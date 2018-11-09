export const xhr = (method, url) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = () => {
			resolve(xhr.responseText);
		}
		xhr.onerror = () => {
			reject('an error occurred');
		}
		xhr.send();
	});
};

export const fetchMessages = () => {
	return xhr("GET", 'https://jsonplaceholder.typicode.com/comments')
		.then(res => JSON.parse(res))
		.then(array => array.slice(0, 5))
		.catch(err => console.log(err));
}

