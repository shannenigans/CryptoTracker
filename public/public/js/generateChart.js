$(function (coin, curr) { 
        $.getJSON('https://min-api.cryptocompare.com/data/histoday?fsym=' + coin + '&tsym=' + curr + '&limit=180&aggregate=3&e=CCCAGG', function(resp) {
        
        var coinData = resp.Data;    //holds the values we're interested in from api call
        console.log(resp.Data);
        //var dataTimePrice = [];     //holds parsed values, used for graphing
        
        var myChart = Highcharts.chart('container2', {
        chart: {
            type: 'candlestick'
        },
        title: {
            text: cryptoSelected + 'Prices'
        },
        xAxis:{            
            type: 'datetime',
            //minRange: 3600 * 1000 * 24 * 7, // one week
            gridLineWidth: 1,
            resize:{
                enabled: true,
            }
        },
        yAxis:{
            title:'Price to USD',
            floor:0,
        },
        series: [{
            turboThreshold: 0,
            name: "ETH",
            data: coinData,
        }],

      });

    });
}