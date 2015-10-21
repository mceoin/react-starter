var React = require('react')
var ReactDOM = require('react-dom')

var App = React.createClass({
  getInitialState:function(){
    return {
      txt: 'the state txt',
      id: 0
    }
  },
  update: function(e){
    this.setState({txt: e.target.value});
  },
  render:function(){
    return (
      <div>
        <input type="text" onChange={this.update} />
        <h1>{this.state.txt}</h1>
      </div>
      );

  }
});

//React.render will be depricated in the next release
//https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#two-packages-react-and-react-dom
console.log(document.getElementById('myContainer'))

ReactDOM.render(<App txt="this is the txt prop"  />, document.getElementById('myContainer'));
