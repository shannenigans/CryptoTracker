$(function () { 
   $.getJSON('https://api.coindesk.com/v1/bpi/historical/close.json?start=2010-07-17&end=2018-03-01', function(resp) {
        
        var coinData = resp.bpi;    //holds the values we're interested in from api call

        var dataTimePrice = [];     //holds parsed values, used for graphing


    for(var prop in coinData){  //loops through each value, and changes the time to UTC ms

        var pair = {}
        pair.y = coinData[prop];
        pair.x = new Date(Date.parse(prop)).getTime()

        dataTimePrice.push(pair);
    }
    
        var myChart = Highcharts.chart('container2', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Bitcoin Prices'
        },
        xAxis:{            
            type: 'datetime',
            minRange: 3600 * 1000 * 24 * 7, // one week
            gridLineWidth: 1,
        },
        yAxis:{
            title:'Price to USD',
            floor:0,
        },
        series: [{
            turboThreshold: 0,
            name: "BTC",
            data: dataTimePrice,
        }]
      });

    });
});
function parser(str){
    return new Date(Date.parse(str)).getTime();
}