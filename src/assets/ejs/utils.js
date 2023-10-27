/**
 * @name arrow
 * @returns {string}
 */
const arrow = function arrow() {
	return `<div class="arrow" role="presentation">
				<div class="arrow__icon">${iconTemplate('chevron')}</div>
			</div>`;
};

/**
 * @name buildQuery
 * @param {object} data
 * @returns {string}
 */
const buildQuery = function buildQuery(data) {
	// Create an array to hold the key/value pairs
	let query = [];

	// Loop through the data object
	for (let key in data) {
		if (data.hasOwnProperty(key)) {
			if (Array.isArray(data[key])) {
				data[key].forEach(function (value) {
					query.push(key + '=' + encodeURIComponent(value));
				});
			} else {
				query.push(key + '=' + encodeURIComponent(data[key]));
			}
		}
	}

	// Join each item in the array with an '&' and return the resulting string
	query = query.join('&');

	return query;
};

/**
 * @name closeButton
 * @param {string} style
 * @param {string} label
 */
const closeButton = function closeButton(style, label, dataSelector) {
	return `<button class="close-button${(style && style.length > 0) ? (' ' + style) : ''}" aria-label="${label}"${((dataSelector) ? ' data-selector="' + dataSelector + '"' : '')} tabindex="0">${iconTemplate('close')}</button>`;
};

/**
 * @name dirButton
 * @param {string} style
 * @param {string} label
 * @returns {string}
 */
const dirButton = function dirButton(url, style, label) {
	return `<a href="${(url && url !== '') ? url : '#'}" class="dir-button${((style !== '') ? (' ' + style) : '')}" aria-label="${label}">${iconTemplate('chevron')}</a>`;
};

/**
 * @name filterChip
 * @param {string} id
 * @returns {string}
 */
const filterChip = function filterChip(id) {
	return `<button class="filter-chip" data-target="${id}" tabindex="0"><span class="filter-chip__text">${$(id).val()}</span><div class="filter-chip__icon" role="presentation">${iconTemplate('x')}</div></button>`;
};

/**
 * @name getData
 * @param {string} url
 * @param {string} data
 * @param {string} type
 * @returns {object}
 */
const getData = function getData(url, data, type) {
	const deferred = $.Deferred();

	$.ajax({
		url: url,
		method: 'GET',
		data: data,
		dataType: type,
		success(data) {
			deferred.resolve(data);
		},
		error(jqXHR, textStatus) {
			deferred.reject(textStatus);
		}
	});

	return deferred.promise();
};

/**
 * @name getRandomNumber
 * @returns {number}
 * @description // Returns a 10 digit, random number
 */
const getRandomNumber = function getRandomNumber() {
	return Math.floor(Math.random() * 9000000000) + 1000000000;
};

/**
 * @name iconTemplate
 * @param {string} name
 * @returns {string}
 */
const iconTemplate = function iconTemplate(name) {
	return `
		<svg class="brei-icon brei-icon-${name}" aria-hidden="true">
			<use xlink:href="#brei-icon-${name}"></use>
		</svg>
	`;
};

/**
 * @name mql
 * @const {object}
 */
const mql = {
	small: window.matchMedia('(min-width: 400px)'),
	medium: window.matchMedia('(min-width: 768px)'),
	large: window.matchMedia('(min-width: 1024px)'),
	xlarge: window.matchMedia('(min-width: 1200px)'),
	xxlarge: window.matchMedia('(min-width: 1440px)'),
	xxxlarge: window.matchMedia('(min-width: 1920px)')
};

/**
 * @name queryStringToJSON
 * @param {string} qs
 * @returns {object}
 */
const queryStringToJSON = function queryStringToJSON(qs) {
	qs = qs || window.location.search.slice(1);

	let pairs = qs.split('&');
	let result = {};

	pairs.forEach(function (p) {
		let pair = p.split('=');
		let key = pair[0];
		let value = decodeURIComponent(pair[1] || '');

		if(result[key]) {
			if(Object.prototype.toString.call(result[key]) === '[object Array]') {
				result[key].push(value);
			} else {
				result[key] = [result[key], value];
			}
		} else {
			result[key] = value;
		}
	});

	return JSON.parse(JSON.stringify(result));
};

/**
 * @name ready
 * @param {func} callbackFunc
 * @description On DOM ready, execute callback function
 */
const ready = function ready(callbackFunc) {
	// Document is ready; call the callback function
	if (document.readyState !== 'loading') {
		callbackFunc();
		// Modern browsers
	} else if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', callbackFunc, false);
		// Old IE browsers (IE <= 8)
	} else {
		document.attachEvent('onreadystatechange', function () {
			if (document.readyState === 'complete') {
				callbackFunc();
			}
		});
	}
};

/**
 * @name scrollToTop
 * @param {object} element
 * @param {number} duration
 */
const scrollToTop = function scrollToTop(element, duration) {
	$('html, body').animate({
		scrollTop: element.offset().top
	}, duration);
};

/**
 * @name speechBubble
 * @param {string} style
 * @param {string} text
 * @returns {string}
 */
const speechBubble = function speechBubble(style, id, text) {
	return `
		<div id="${id}" class="speech-bubble${(style && style.length > 0) ? (' ' + style) : ''}" role="tooltip">
			<span class="speech-bubble__text">${text}</span>
			${closeButton('close-button--light close-button--small', 'Click to close tooltip')}
		</div>
	`;
};

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const utils = {
	arrow,
	buildQuery,
	closeButton,
	dirButton,
	filterChip,
	getData,
	getRandomNumber,
	iconTemplate,
	mql,
	queryStringToJSON,
	ready,
	scrollToTop,
	speechBubble,
	_extends
};

export {
	arrow,
	buildQuery,
	closeButton,
	dirButton,
	filterChip,
	getData,
	getRandomNumber,
	iconTemplate,
	mql,
	queryStringToJSON,
	ready,
	scrollToTop,
	speechBubble,
	_extends
};

export { utils as default };
