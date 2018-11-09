import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createCommentAction, createCORSComment } from 'store/actions';
import * as actions from 'store/actions';
import {fetchMessages} from 'utilities/xhr';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.populateComments = this.populateComments.bind(this);
	}

	handleChange(e) {
		const text = e.target.value;
		this.setState(prevState => ({
			comment: text
		}));
	}

	handleSubmit(e) {
		e.preventDefault();
		const {comment} = this.state;
		const {createCommentAction} = this.props;
		createCommentAction(comment);
		this.setState(prevState => ({
			comment: ''
		}));
	}

	populateComments() {
		const {dispatchImportedComments} = this.props;

		fetchMessages()
			.then(arr => dispatchImportedComments(arr));
	}

	render() {

		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add Comment</h4>
				<textarea 
					onChange={this.handleChange}
					value = {this.state.comment}
					name="entry" id="entry" cols="30" rows="10"
				>
				</textarea>
				<div>
					<button type="submit">Submit Comment</button>
					<button className="fetch-comments" type="button" onClick={this.populateComments}>Get Comments</button>
				</div>
			</form>
		)
	}
}

export default connect(null, actions)(CommentBox);

