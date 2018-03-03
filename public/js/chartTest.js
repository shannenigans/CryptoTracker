//$.getJSON("https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05 ", function (data) { 
var request = require('request');

$(function() {

    $.getJSON('https://api.coindesk.com/v1/bpi/historical/close.json?start=2010-07-17&end=2010-07-21', function(data) {
        // Create the chart
        window.chart = new Highcharts.StockChart({
            chart: {
                renderTo: 'container'
            },

            rangeSelector: {
                selected: 1,
                inputDateFormat: '%Y-%m-%d'
            },

            title: {
                text: 'AAPL Stock Price'
            },
            
            yAxis: {
                floor: 0
            },

            series: [{
                name: 'AAPL',
                data: data,
                tooltip: {
                    valueDecimals: 2
                }}]

        }, function(chart) {

            // apply the date pickers
            setTimeout(function() {
                $('input.highcharts-range-selector', $('#' + chart.options.chart.renderTo)).datepicker()
            }, 0)
        });
    });



});