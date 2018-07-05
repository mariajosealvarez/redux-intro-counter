import React from 'react';
import { connect } from 'react-redux';
import './counter.css';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.dispatch({ type: "INCREMENT"});
  }

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT"});
  }

  render() {
    return (
      <div>
        <h2 className="title">Counter</h2>
        <div className="counter">
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);