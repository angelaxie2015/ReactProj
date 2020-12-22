import React, { Component } from "react";

export default class Counter extends Component {
	//the state only exists locally
	// state = {
	// 	value: this.props.counter.value, //this.props comes with every element, shows the state of the elment: i.e. value, selected.. ect
	// 	tags: [],
	// }; //includes any data that the component needs

	// renderTags() {
	// 	if (this.state.tags.length === 0) return <p>There are no tags! </p>;

	// 	return (
	// 		<ul>
	// 			{this.state.tags.map((tag) => (
	// 				<li key={tag}>{tag}</li>
	// 			))}
	// 		</ul>
	// 	);
	// }

	// constructor(){
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	//setState tells react what is being changed.
	//this only works locally
	// handleIncrement = () => {
	// 	this.setState({ value: this.state.value + 1 });
	// 	console.log("Increment clicked", this.value);
	// };


	//{ } allows you to render values dynamically
	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>
					{this.formatvalue()}
				</span>

				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>

				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatvalue() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}
