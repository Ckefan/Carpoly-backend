import React, { Component } from 'react'
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;
const dataList = [];

export class TreeClassify extends Component {
  constructor(props) {
    super(props);
    this.props.onChange(this.onChange)

    //搜索节点
    this.generateList(this.props.data);
  }
  state = {
    gData: this.props.data,
    expandedKeys: [],
    searchValue: '',
    autoExpandParent: true,
  }
  getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some(item => item.key === key)) {
          parentKey = node.key;
        } else if (this.getParentKey(key, node.children)) {
          parentKey = this.getParentKey(key, node.children);
        }
      }
    }
    return parentKey;
  };
  generateList = (data) => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const key = node.key;
      const title = node.title;
      dataList.push({ key, title });
      if (node.children) {
        this.generateList(node.children, node.key);
      }
    }
  };

  //拖拽松手
  onDragEnter = (info) => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  }
  //拖拽
  onDrop = (info) => {
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    // const dragNodesKeys = info.dragNodesKeys;
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === +key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.props.data];
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (info.dropToGap) {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    } else {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    }
    this.props.update(data)
  }
  //展开/收起节点时触发
  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }
  //搜索展开
  onChange = (value) => {
    const expandedKeys = dataList.map((item) => {
      if (item.title.indexOf(value) > -1) {
        debugger
        return this.getParentKey(item.key, this.props.data);
      }
      return null;
    }).filter(
      (item, i, self) =>
        item && self.indexOf(item) === i
    );
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
  }
  //选中节点，删除使用
  onSelect = (e) => {
    this.props.onSelect(e)
  }
  render() {
    const { searchValue, expandedKeys, autoExpandParent } = this.state;
    const loop = data => data.map((item) => {
      const index = item.title.indexOf(searchValue);
      const beforeStr = item.title.substr(0, index);
      const afterStr = item.title.substr(index + searchValue.length);
      const title = index > -1 ? (
        <span>
          {beforeStr}
          <span style={{ color: '#f50' }}>{searchValue}</span>
          {afterStr}
        </span>
      ) : <span>{item.title}</span>;
      if (item.children) {
        return (
          <TreeNode key={item.key} title={title}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={title} />;
    });
    return (
      <Tree
        className="draggable-tree"
        defaultExpandedKeys={expandedKeys}
        draggable
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onExpand={this.onExpand}
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
        onSelect={this.onSelect}
      >
        {loop(this.props.data)}
      </Tree>
    );
  }
}