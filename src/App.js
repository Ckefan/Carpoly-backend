import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addGun,removeGun,addGunAsny} from './index.redux';
import { Button } from 'antd';
import './App.css';

// App = connect(mapStateProps,actionCreators)(App)
@connect(
  state =>({num:state.counter}),
  {addGun,removeGun,addGunAsny}
)


class App extends Component {
  render(props) {
    return (
      <div className="App">
        <span>现在有AK986P:{this.props.num}把</span>
        <Button type="primary" onClick={this.props.addGun}>添加</Button>
        <Button type="primary" onClick={this.props.removeGun}>删除</Button>
        <Button type="primary" onClick={this.props.addGunAsny}>2件</Button>
      </div>
    );
  }
  
}
/*
componentWillMount(){
    console.log('组件马上就要挂载了');
  }
  componentDidMount(){
    console.log('组件已经挂载了');
  }
  componentWillReceiveProps(nextProps){
    console.log('组件要接收父组件的值了');
  }
  shouldComponentUpdate(){
    console.log('判断是不是要更新组件');
    return true;  //记得要返回true
  }
  componentWillUpdate(){
    console.log('马上就要更新组件了');
  }
  componentDidUpdate(){
    console.log('组件更新完毕');
  }
  componentWillUnmount(){
    console.log('组件卸载了');
  }
const store = createStore(counter);
const init = store.getState();
function listener(){
  const current = store.getState();
  console.log(`现在有的store${current}`);
}
store.subscribe(listener);
store.dispatch({type:'add'});
*/

export default App;

