import React, { Component } from "react";

class TimezoneClock extends Component {
  state = {
    currentTime: new Date(),
  };

  componentDidMount() {
    this.updateTime();
    // Update the time every second
    this.intervalID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.intervalID);
  }

  updateTime() {
    const { timezone } = this.props;
    const currentTime = new Date().toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
    });
  
    this.setState({
      currentTime,
    });
  }
  

  render() {
    const { currentTime } = this.state;
    // console.log(this.props.timezone);
    // console.log(currentTime);
  
    return (
      <div>
        {/* <h2>Current Time ({this.props.timezone}): {currentTime}</h2> */}
        {/* {this.props.timezone} */}
        {currentTime.toString()}
      </div>
    );
  }
}

export default TimezoneClock;
