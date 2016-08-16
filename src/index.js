import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/bootstrap.css';
import './react-logo.png';

var TodoHeader = React.createClass({
  getInitialState: function(){
    var times = Date();
    times = times.slice(15);
    times = times.slice(0,9);
    return{
      times: times,
    }
  },
  // componenentWillMount: function(){
  //   var times = Date();
  //   times = times.slice(15);
  //   times = times.slice(0,9);
  //   this.setState({times: times});
  // },
  render: function() {
    // var times = Date();
    // times = times.slice(15);
    // times = times.slice(0,9);
    // this.setState({times: times});
    // //this.setTimeOut(this.change.bind(this),1000);
    // setTimeout(function() { this.setState({position: 1}); }.bind(this), 1000);
    var time = Date();
    time = time.slice(0,15);
    return(
      <div>
          <h3 className="head">Todo List for {time}</h3>

          <hr/>
      </div>
    );
  }
});
var Input = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(e.target.value);
    var input = ReactDOM.findDOMNode(this.refs.in)
    this.props.addTodo(input.value);
    input.value="";
  },
  render: function() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
          <input className="inputs" ref="in" placeholder="What're u doing today?"/>
      </form>
      </div>
    );
  }
});

var TodoItem = React.createClass({
  render: function() {
    return(
      <div className="inner">
        <div className="item">
          <p><input type="checkbox" /> {this.props.text}</p>
        </div>
      </div>
    );
  }
});

// var Timing = React.createClass({
//   render: function() {
//     return(
//       <div>
//         <b>created at {this.props.timing}</b>
//       </div>
//     );
//   }
// });

var Main = React.createClass({
  getInitialState: function(){
    return {
      todoItem: [],
      time: [],
    }
  },
  getNowState: function(){
    return {
      todoItem: this.state.todoItem,
      time: this.state.time,
    }
  },
  addTodo: function(item){
    var timed = Date();
    this.setState({
      todoItem: this.state.todoItem.concat(item),
    });
    this.setState({
      time: this.state.time.concat(timed)
    });
  },
  render: function(){
    var todoItem = this.state.todoItem;
    // var time = this.state.time;
    // var timing = time.map(function(times) {
    //   return times;
    // });
    var todos = todoItem.map(function(todo) {
      return (<TodoItem text={todo} />)
    });

    return(
      <div className="col-md-offset-4 col-md-4 me">
        <div>
        <TodoHeader />
        <Input addTodo={this.addTodo}/>

        {todos}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('root'));
