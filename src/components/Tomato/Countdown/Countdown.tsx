import React from 'react';
import './Countdown.less';

interface ICountDownProps {
  timer: number,
  duration: number,
  onfinish: () => void
}

interface IContDownStates {
  restTime: number
}

let timerID: NodeJS.Timeout;

class CountDown extends React.Component <ICountDownProps, IContDownStates> {

  constructor(props: ICountDownProps) {
    super(props);
    this.state = {
      restTime: this.props.timer
    };
  };

  componentDidMount(): void {this.startCountDown();};

  componentWillUnmount(): void {this.onTimeOver();};

  get clock() {
    const minutes = Math.floor(this.state.restTime / 1000 / 60);
    const seconds = Math.floor(this.state.restTime / 1000 % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  startCountDown = () => {
    timerID = setInterval(() => {
      const restTime = this.state.restTime;
      this.setState({restTime: restTime - 1000});
      document.title = `${this.clock} - 有一个番茄正在进行`;
      if (restTime < 1000) {
        this.onTimeOver();
        document.title = `Tomatodo`;
      }
    }, 1000);
  };

  onTimeOver = () => {
    this.props.onfinish();
    clearInterval(timerID);
  };

  public render() {
    const percent = 1 - this.state.restTime / this.props.duration;
    return (
      <div className="countdown">
        <span>{this.clock}</span>
        <div className="progress" style={{width: `${percent * 100}%`}}/>
      </div>
    );
  }
}

export default CountDown;