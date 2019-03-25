import React, { Component } from 'react'
import { Layout, Button, Input, Modal, Table, Divider, message } from 'antd'
import './entry.scss'
import { TreeClassify } from '../../../components/shop/tree_classify'

const { Header, Sider, Content } = Layout;
const Search = Input.Search;
const confirm = Modal.confirm;
// const data = [
//   {
//     "title": "粉类",
//     "key": "1",
//     "children": [
//       {
//         "title": "粒子粉",
//         "key": "1.1",
//       },
//       {
//         "title": "石灰粉",
//         "key": "1.2",
//       }
//     ]
//   },
//   {
//     "title": "漆类",
//     "key": "2",
//     "children": [
//       {
//         "title": "环保漆",
//         "key": "2.1",
//       }
//     ]
//   }
// ]
const columns = [{
  title: '商品编码',
  dataIndex: 'shop_code',
  key: 'shop_code',
}, {
  title: '商品名称',
  dataIndex: 'shop_name',
  key: 'shop_name',
}, {
  title: '商品类型',
  dataIndex: 'shop_type',
  key: 'shop_type',
}, {
  title: '商品价格',
  key: 'shop_pay',
  dataIndex: 'shop_pay',
}, {
  title: '商品图片',
  key: 'shop_img',
  dataIndex: 'shop_img',
}, {
  title: '操作',
  key: 'control',
  render: (text, record) => (
    <span>
      <a href="javascript:;">编辑 {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">删除</a>
    </span>
  ),
}];

const tableData = [{
  key: '1',
  shop_code: '11',
  shop_name: 'John Brown',
  shop_type: 32,
  shop_pay: 'New York No. 1 Lake Park',
  shop_img: "121",
}, {
  key: '2',
  shop_code: '22',
  shop_name: 'Jim Green',
  shop_type: 42,
  shop_pay: 'London No. 1 Lake Park',
  shop_img: "121",
}, {
  key: '3',
  shop_code: '33',
  shop_name: 'Joe Black',
  shop_type: 32,
  shop_pay: 'Sidney No. 1 Lake Park',
  shop_img: "223",
}];
//一位数组根据parent_id变成多维数组
function listToTree(data) {
  const listChildren = (obj, filter) => {
    [data, obj.children] = data.reduce((res, val) => {
      if (filter(val)) {
        if (!val.key) { val.key = val.id; val.title = val.name }
        res[1].push(val)
      } else {
        if (!val.key) { val.key = val.id; val.title = val.name }
        res[0].push(val)
      }
      return res
    }, [[], []])
    obj.children.forEach(val => {
      if (data.length)
        listChildren(val, obj => obj.parent_id === val.id)
    })
  }
  const tree = {}
  listChildren(tree, val => data.findIndex(i => i.id === val.parent_id) === -1)
  return tree.children
}

export class order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: '',//搜索框内容
      clearSearch: true,//清空搜索框
      nodeKey: [],//选中节点key
    }
  }
  componentDidMount() {
    this.getClassify();
  }
  //子组件更新数据
  update = (data) => {
    this.setState({
      data
    })
  }
  onSelect = (e) => {
    this.setState({ nodeKey: e })
  }
  //赋值搜索框内容  or 搜索分类
  assginSearch = (data) => {
    const value = data.target.value;
    this.onChange(value);
    this.setState({
      search: value
    })
  }
  // 获取所有分类信息
  getClassify = () => {
    this.$http.post('/api/manager/shop/get_classify/').then((re) => {
      let res = re.data;
      if (res.code === 1) {
        let data = listToTree(res.data);
        this.setState({ data });
      } else if (res.code === -1) {
        message.warning(<span style={{ color: '#FAAD14' }}>{res.msg}</span>)
      }
    }).catch((err) => {
      message.error(<span style={{ color: 'red' }}>{this.$hint.MSG.connect_fail}</span>)
    })
  }
  //添加分类
  addClassify = () => {
    this.$http.post('/api/manager/shop/add_classify/', {
      name: this.state.search,
      classify_level: 1
    }).then((re) => {
      let res = re.data;
      if (res.code === 1) {
        message.success(<span style={{ color: '#72c040' }}>{res.msg}</span>)
        this.getClassify();
        this.setState({ clearSearch: false })
        this.setState({ clearSearch: true, search: '' })
        this.onChange('');
      } else if (res.code === -1) {
        message.warning(<span style={{ color: '#FAAD14' }}>{res.msg}</span>)
      }
    }).catch((err) => {
      message.error(<span style={{ color: 'red' }}>{this.$hint.MSG.connect_fail}</span>)
    })
  }
  detele = () => {
    let { data, nodeKey } = this.state;
    confirm({
      title: '温馨提示！',
      content: '删除此分类将不能恢复，是否确定删除？',
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        for (var i = 0; i < data.length; i++) {
          if (data[i].key === nodeKey[0]) {
            data.splice(i, 1);
            this.setState({ data, nodeKey: [] });
            return;
          }
          for (var i2 = 0; i2 < data[i].children.length; i2++) {
            if (data[i].children[i2].key === nodeKey[0]) {
              data[i].children.splice(i2, 1);
              this.setState({ data, nodeKey: [] });
              return;
            }
          }
        }
      }
    });
  }
  //获取子组件onChang 方法
  showTree = (onChange) => {
    this.onChange = onChange;
  }
  render() {
    const { data, search, nodeKey, clearSearch } = this.state;
    return (
      <div className="shop_entry">
        <Layout >
          <Header className="header" style={{ background: '#fff', padding: '0 10px' }}>录入商品</Header>
          <Header className="header" style={{ background: '#fff', padding: '0 10px' }}>
            {clearSearch ? <Search
              placeholder="搜索/添加分类"
              onChange={this.assginSearch}
              style={{ width: 180, marginRight: 10 }}
            /> : ''}
            <Button type="primary" disabled={search === ''} style={{ marginRight: 10 }} onClick={this.addClassify}>添加分类</Button>
            <Button type="danger" disabled={nodeKey.length === 0} onClick={this.detele}>删除分类</Button>
          </Header>
          <Layout>
            <Sider style={{ background: '#fff' }}>
              <TreeClassify data={data} search={this.state.search} onChange={this.showTree} onSelect={this.onSelect} update={this.update} nodeKey={nodeKey}></TreeClassify>
            </Sider>
            <Content>
              <Table columns={columns} dataSource={tableData} />
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default order
