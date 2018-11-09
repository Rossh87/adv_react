import { ADD_COMMENT, ADD_CORS_COMMENTS, DELETE_COMMENT } from 'store/actions/types';

const DEFAULT_STATE = [];

let idCount = 0;

const commentReducer = (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case ADD_COMMENT:
			idCount++;
			return [...state, {text: action.comment, id: idCount} ];

		case DELETE_COMMENT:
			return state.filter(commentObj => commentObj.id !== action.id);

		case ADD_CORS_COMMENTS:
			const paredArr = action.importedComments.map(obj => 
				(
					{
						text: obj.name,
						id: ++idCount
					}
				)
			)
			return [...state, ...paredArr];

		default:
			return state;
	}
}

export default commentReducer;