import React, { Component } from "react";

export default class Counter extends Component {
	state = {
		count: 0,
		tags: [],
	}; //includes any data that the component needs

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags! </p>;

		return (
			<ul>
				{this.state.tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	}

	// constructor(){
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	//setState tells react what is being changed. 
	handleIncrement = () => {
		this.setState( {count: this.state.count + 1});
		console.log("Increment clicked", this.count);

	};

	//{ } allows you to render values dynamically
	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={this.handleIncrement}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				{this.renderTags()}
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}
