// const React = require('react');
// const ReactDOM = require('react-dom');

class ButtonCount extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState(currCount => ({
      count: currCount.count + 1
    }));
  }

  render() {
    return (<button onClick={this.handleClick}>Time's Clicked: {this.state.count}</button>);
  }
}
ReactDOM.render(<ButtonCount/>, document.getElementById('counter'));