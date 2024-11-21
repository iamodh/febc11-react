import { Component } from "react";
import PropTypes from "prop-types";

class ClickMe extends Component {
  state = { count: 0 };

  handleClick = () => {
    this.setState({ count: this.state.count + (this.props.level || 1) });
  };
  render() {
    return (
      <div>
        클릭 횟수 X {this.props.level} : {this.state.count}
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }
}

ClickMe.propTypes = {
  level: PropTypes.number,
};

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>클래스 컴포넌트</h1>
        <ClickMe level={5} />
        <ClickMe level={10} />
        <ClickMe />
      </div>
    );
  }
}

export default Parent;
