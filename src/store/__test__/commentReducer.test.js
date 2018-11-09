import commentReducer from 'store/reducers/commentReducer.js';
import { ADD_COMMENT } from 'store/actions/types';

describe('commentReducer', () => {
	const action = {
		type: ADD_COMMENT,
		comment: 'new comment'
	}
	const newState = commentReducer([], action);

	it('returns an array of comment objects with text(string) and id(number) keys', () => {
		const expected = {
			text: expect.any(String),
			id: expect.any(Number)
		}
		expect(newState).toEqual(expect.arrayContaining([expected]))
	})

	// it('handles actions of type ADD_COMMENT', () => {
	// 	const newState = commentReducer([], action);

	// 	expect(newState).toHaveProperty('id');
	// 	expect(newState.text).toEqual('new comment')
	// });

	// it('does not generate an error if passed an unexpected action type', () => {

	// 	const newState = commentReducer([], {});

	// 	expect(newState).toEqual([]);
	// });
})
