import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { deleteCommentAction } from 'store/actions';
import * as actions from 'store/actions';

class CommentList extends Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(id, e) {
		this.props.deleteCommentAction(id);
	}

	renderComments() {
		const {comments} = this.props;

		return comments.map(comment => (
			<li key={comment.id}>
				{comment.text}  
				<span onClick={this.handleDelete.bind(null, comment.id)}>
					{' '} X {' '}
				</span>
			</li>
		));
	}

	render() {
		return (
			<ul>{this.renderComments()}</ul>
		)
	}

}

const mapStateToProps = state => ({
	comments: state.comments
});

// const mapDispatchToProps = dispatch => ({
// 	deleteComment: id => dispatch(deleteCommentAction(id))
// });

export default connect(mapStateToProps, actions)(CommentList);