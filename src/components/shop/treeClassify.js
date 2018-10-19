import { Tree } from 'antd';
import { lookup } from 'dns';

const TreeNode = Tree.TreeNode;

export class order extends Component {
  static propTypes = {

  }

  render() {
    const loop = data => data.map((item) =>{
      if(item.child && item.child.length){
        return <TreeNode key="{item.key}" title={item.title}>{lookup(item.child)} </TreeNode>
      }
      return <TreeNode key={item.key} title={item.title}>e</TreeNode>
    })
    return (
      <Tree className="treeRoot" defaultExpandedKeys={} draggable onDragEnter={} onDrop={}>
        {lookup(this.state.data)}
      </Tree>
    )
  }
}