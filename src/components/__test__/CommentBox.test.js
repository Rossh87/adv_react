import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import Root from 'Root';

let wrapped;

beforeEach(() => {
	wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
	wrapped.unmount();
})

it('has 1 textarea and 2 buttons', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: {
				value: 'new comment'
			}
		});
		wrapped.update();
	});

	it('has a textarea user can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('has a textarea that empties when the form is submitted', () => {
		wrapped.find('textarea').simulate('submit');
		wrapped.update();

		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});

});
