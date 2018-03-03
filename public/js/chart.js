$(function () { 
   $.getJSON('https://api.coindesk.com/v1/bpi/historical/close.json?start=2010-07-17&end=2018-03-01', function(resp) {
        //Get the returned coin data
        var coinData = resp.bpi;
        var dataTimePrice = [];
        var yDataPrice = [];

    for(var prop in coinData){
        //console.log(prop + ":" + coinData[prop]);
        //var datep = new Date(2010,06,18);
        var pair = {}
        pair.y = coinData[prop];
        pair.x = new Date(Date.parse(prop)).getTime()

        //pair[parser(prop)] = coinData[prop]
        dataTimePrice.push(pair);
    }
    console.log(dataTimePrice[3]);
    console.log(dataTimePrice);
    // var s;
    // var myDate;
      // for (var i = 1; i <= Object.keys(coinData).length;i++)
      //   {
      //       s = datep.toISOString();
      //       s = s.substring(0,10);
      //       myDate=s.split("-");
      //       console.log(coinData[s]);
      //       datep.setDate(datep.getDate() + 1);
      //   }
        // Create a timer
        //var start = +new Date();
        //console.log(coinData[0]);
        var myChart = Highcharts.chart('container2', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Bitcoin Prices'
        },
        xAxis:{            
            type: 'datetime',
            minRange: 3600 * 1000, // one hour
            gridLineWidth: 1,
        },
        yAxis:{
            title:'Price to USD',
            floor:0,
        },
        series: [{
            turboThreshold: 0,  //Set to 0 to turn off the limit for data we can process.
            name: "BTC",
            data: dataTimePrice,
            // pointStart: Date.UTC(2010, 06, 18),
            // pointInterval: 24 * 3600 * 1000, // one day
        }]
      });

    });
});
function parser(str){
    return new Date(Date.parse(str)).getTime();
}