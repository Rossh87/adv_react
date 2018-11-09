import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import fakeJSON from 'fakeJSON';
import * as utils from 'utilities/xhr';

utils.xhr = jest.fn(() => new Promise(resolve => fakeJSON))

let wrapped = mount(<Root><App /></Root>);

it('can fetch a list of comments and display them', (done) => {
	wrapped.find('.fetch-comments').simulate('click');
	setTimeout(function() {
		wrapped.update();
		expect(wrapped.find('li').length).toEqual(5);
		console.log(wrapped.find('li').length);
		done();
	}, 1000);
})