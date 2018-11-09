import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;

const dummyComments = {
	comments: [
		{
			text: 'comment 1', 
			id: 'placeholder'
		},

		{
			text: 'comment 2', 
			id: 'placeholder2'
		}
	]
};

beforeEach(() => {
	wrapped = mount(<Root initState={dummyComments}><CommentList /></Root>);
});

afterEach(() => {
	wrapped.unmount();
});

it('generates an <li> for each entry in store.comments', () => {
	expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
	expect(wrapped.render().text()).toContain('comment 1');
	expect(wrapped.render().text()).toContain('comment 2');
});