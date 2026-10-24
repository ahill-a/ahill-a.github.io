'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const a = document.getElementById('link-conversion');

	a.setAttribute('href', a.getAttribute('href')
		.replace('$', '@')
		.replaceAll('-', '.')
		.replace('/', 'wi.rr.com')
		.replace('to', 'mailto:')
	);
});