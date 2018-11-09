import { createCommentAction } from 'store/actions';
import { ADD_COMMENT } from 'store/actions/types';

describe('createCommentAction', () => {
	
	it('creates an action of type ADD_COMMENT', () => {
		const createdAction = createCommentAction('new comment');

		expect(createdAction.type).toEqual(ADD_COMMENT);
	});

	it('creates an action with payload of comment text', () => {
		const createdAction = createCommentAction('new comment');

		expect(createdAction.comment).toEqual('new comment');
	});
})