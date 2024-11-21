import { Component } from "react";
import PropTypes from "prop-types";

class ClickMe extends Component {
  handleClick = () => {
    this.setState({ count: this.state.count + (this.props.level || 1) });
  };

  // 1-1
  constructor(props) {
    console.log("1-1 constructor 호출됨.");

    super(props);
    this.state = { count: props.level || 1 };
  }

  // 1-2/2-1
  static getDerivedStateFromProps(props, state) {
    console.log("1-2/2-1 getDerivedStateFromProps 호출됨.");
    console.log(" props", props);
    console.log(" state", state);

    if (state.count > props.level * 5) {
      return { count: 0 };
    }
    return null;
  }

  // 2-2
  shouldComponentUpdate(nextProps, nextState) {
    console.log("2-2 shouldComponentUpdate 호출됨.");
    console.log("현재값", this.props, this.state);
    console.log("다음값", nextProps, nextState);
    return true;
  }

  // 1-3/2-3
  render() {
    console.log("1-3/2-3 render 호출됨.");
    return (
      <div>
        클릭 횟수 X {this.props.level} : {this.state.count}
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }

  // 1-4
  componentDidMount() {
    console.log("1-4 componentDidMount 호출됨.");
  }

  // 2-4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("2-4 getSnapshotBeforeUpdate 호출됨.");
    return null;
  }

  // 2-5
  componentDidUpdate() {
    console.log("2-5 componentDidUpdate 호출됨.");
  }

  // 3-1
  componentWillUnmount() {
    console.log("3-1 componentWillUnmount 호출됨.");
  }
}

ClickMe.propTypes = {
  level: PropTypes.number,
};

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
        <ClickMe level={5} />
      </div>
    );
  }
}

export default Parent;
