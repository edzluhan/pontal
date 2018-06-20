import React, { Component, Fragment } from 'react';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
        };
	}

	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
	}

	leading0(num) {
		return num < 10 ? `0${num}` : `${num}`;
	}

	getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log('Date.parse(deadline)', Date.parse(deadline));
        console.log('Date.parse(new Date())', Date.parse(new Date()));
		if (time < 0) {
			this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
		} else {
			const seconds = Math.floor((time / 1000) % 60);
			const minutes = Math.floor((time / 1000 / 60) % 60);
			const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
			const days = Math.floor(time / (1000 * 60 * 60 * 24));
			this.setState({ days, hours, minutes, seconds });
		}
	}

	render() {
		return (
			<Fragment>
                <div className="box" style={{display: 'inline-block'}}>{this.leading0(this.state.days)}</div> : <div className="box" style={{display: 'inline-block'}}>{this.leading0(this.state.hours)}</div> : <div className="box" style={{display: 'inline-block'}}>{this.leading0(this.state.minutes)}</div> : <div className="box" style={{display: 'inline-block'}}>{this.leading0(this.state.seconds)}</div>
			</Fragment>
		);
	}
}
export default Clock;
