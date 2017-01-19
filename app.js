var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('underscore');


// app.use(express.static('public'));
// console.log(path);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))


var avalis1 = [{"date":"2017-01-12","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-13","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-14","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-15","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-16","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-17","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-18","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-19","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-20","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-21","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-22","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-23","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-24","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-25","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-26","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-27","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-28","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-29","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-30","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-01-31","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true}]
var avalis2 = [{"date":"2017-02-12","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-02-13","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-02-14","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-02-15","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-02-16","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-02-17","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-02-18","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true}];
var avalis3 = [{"date":"2017-03-12","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-03-13","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-03-14","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-03-15","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-03-16","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-03-17","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-03-18","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true}];
var avalis4 = [{"date":"2017-04-12","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-04-13","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-04-14","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-04-15","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-04-16","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-04-17","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true},{"date":"2017-04-18","status":"status_available","supplier_price":"12.0","inventory_type":"inventory_immediate","total_inventory":12,"inventory":12,"has_breakfast":true}];

app.get('/index', function(req, res) {
	if(req.query.data_month == '2017-1-01') {
		res.json(avalis1);
	}else if(req.query.data_month == '2017-02-01') {
		res.json(avalis2);
	}else if(req.query.data_month == '2017-03-01') {
		res.json(avalis3);
	}else if(req.query.data_month == '2017-04-01') {
		res.json(avalis4);
	}
});

app.post('/index', function(req, res) {
	var date; 
	 _.mapObject(req.body, function(val, key){
		if(key == 'dates[]') {
			date = val;
		}
	});
	var month, avalis, resJsonData;
	if(!_.isArray(date)){
		month = date.split('-')[1];
		if(parseInt(month) == 1) {
			resJsonData = resJson(avalis1,date);
		}else if (parseInt(month) == 2) {
			resJsonData = resJson(avalis2,date);
		}else if (parseInt(month) == 3) {
			resJsonData =resJson(avalis3,date);
		}else if (parseInt(month) == 4) {
		  resJsonData = resJson(avalis4,date);
		}
		res.json(resJsonData);
	}else {
		month = date[0].split('-')[1];
		_.each(date, function(idx, el) {
			if(parseInt(month) == 1) {
				resJsonData = resJson(avalis1,idx);
			}else if (parseInt(month) == 2) {
				resJsonData = resJson(avalis2,idx);
			}else if (parseInt(month) == 3) {
				resJsonData = resJson(avalis3,idx);
			}else if (parseInt(month) == 4) {
				resJsonData = resJson(avalis4,idx);
			}
		});
		res.json(resJsonData);
	}

	function resJson(data,parDate) {
		data.map(function(index, elem) {
			if(index.date == parDate) {
				index.status = req.body['availibility[status]'];
				index.supplier_price =  req.body['availibility[supplier_price]'];
				index.inventory_type =  req.body['availibility[inventory_type]'];
				index.total_inventory =  req.body['availibility[total_inventory]'];
				index.has_breakfast =  req.body['availibility[has_breakfast]'];
			}
		});
		return data;
		// res.json(data);
	}
	// console.log(date.split('-')[1] == '01');
	// avalis1.map(function(index, elem) {
	// 	if(index.date == date) {
	// 		index.status = req.body['availibility[status]'];
	// 		index.supplier_price =  req.body['availibility[supplier_price]'];
	// 		index.inventory_type =  req.body['availibility[inventory_type]'];
	// 		index.total_inventory =  req.body['availibility[total_inventory]'];
	// 		index.has_breakfast =  req.body['availibility[has_breakfast]'];
	// 	}
	// })

	// res.json(avalis1);

});


app.listen(8000);