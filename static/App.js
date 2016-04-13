var BugList = React.createClass({
	displayName: "BugList",

	getInitialState: function () {
		return { bugs: bugData };
	},
	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"Bug Tracker"
			),
			React.createElement(BugFilter, null),
			React.createElement("hr", null),
			React.createElement(BugTable, { bugs: this.state.bugs }),
			React.createElement("hr", null),
			React.createElement(BugAdd, { addBug: this.addBug }),
			React.createElement("hr", null)
		);
	},

	addBug: function (bug) {
		var bugsModified = this.state.bugs.slice();
		bug.id = this.state.bugs.length + 1;
		bugsModified.push(bug);
		this.setState({ bugs: bugsModified });
	}
});

var BugFilter = React.createClass({
	displayName: "BugFilter",

	render: function () {
		return React.createElement(
			"div",
			null,
			"Meant for a filter"
		);
	}
});

var BugTable = React.createClass({
	displayName: "BugTable",

	render: function () {
		var bugRows = this.props.bugs.map(function (bug) {
			return React.createElement(BugRow, { key: bug.id, bug: bug });
		});
		return React.createElement(
			"table",
			null,
			React.createElement(
				"thead",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						null,
						"id"
					),
					React.createElement(
						"th",
						null,
						"status"
					),
					React.createElement(
						"th",
						null,
						"priority"
					),
					React.createElement(
						"th",
						null,
						"owner"
					),
					React.createElement(
						"th",
						null,
						"title"
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				bugRows
			)
		);
	}
});

var BugAdd = React.createClass({
	displayName: "BugAdd",

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"form",
				{ name: "bugAdd" },
				React.createElement("input", { type: "text", name: "owner", placeholder: "owner" }),
				React.createElement("input", { type: "text", name: "title", placeholder: "title" }),
				React.createElement(
					"button",
					{ onClick: this.handleSubmit },
					"Add"
				)
			)
		);
	},

	handleSubmit: function (e) {
		e.preventDefault();
		var form = document.forms.bugAdd;
		this.props.addBug({ owner: form.owner.value, title: form.title.value, status: 'New', priority: 'P1' });
		//clear form
		form.owner.value = "";form.title.value = "";
	}
});

var BugRow = React.createClass({
	displayName: "BugRow",

	render: function () {
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"td",
				null,
				this.props.bug.id
			),
			React.createElement(
				"td",
				null,
				this.props.bug.status
			),
			React.createElement(
				"td",
				null,
				this.props.bug.priority
			),
			React.createElement(
				"td",
				null,
				this.props.bug.owner
			),
			React.createElement(
				"td",
				null,
				this.props.bug.title
			)
		);
	}
});

var bugData = [{ id: 1, priority: "P1", status: "Open", owner: "Ravan", title: "App crashes on open" }, { id: 2, priority: "P2", status: "New", owner: "Eddie", title: "Misaligned border on panel" }];

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));