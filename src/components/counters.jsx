import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {


	render() {
		const { onReset, counters, onDelete, onIncrement} = this.props;
		return (
			<div>
				<button
					onClick={this.props.onReset}
					className="btn btn-primary btn-sm m-2"
				>
					RESET
				</button>
				{this.props.counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						counter={counter}
						onIncrement={this.props.onIncrement}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
