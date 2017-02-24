'use strict';

const YQL = require('yql');
const _ = require('lodash');

module.exports = (opts, callback) => {
	opts = opts || [];

	let query;

	if (_.isEmpty(opts)) {
		//YQL query to get the data of the weather for the default values
		query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Dhaka, Bangladesh")');
	} else {
		//YQL query to get the data of the weather in the chosen city
		query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + opts[0] + ', ' + opts[1] + '")');
	}

	query.exec((err, response) => {
		if (err) {
			return callback(err);
		}

		callback(null, response);
	});
};
