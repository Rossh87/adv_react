import {ADD_COMMENT, DELETE_COMMENT, ADD_CORS_COMMENTS} from 'store/actions/types';
import { xhr } from 'utilities/xhr';

export const createCommentAction = commentText => ({
	type: ADD_COMMENT,
	comment: commentText
});

export const deleteCommentAction = id => ({
	type: DELETE_COMMENT,
	id
});

export const dispatchImportedComments = commentsArr => ({
	type: ADD_CORS_COMMENTS,
	importedComments: commentsArr
});

