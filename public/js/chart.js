$(function () { 
   var cryptoSelected = "BTC"
   var currencySelected = "USD"
   var convertName = {
    "US Dollars":"USD",
    "Euros":"EUR",
    "Ethereum":"ETH",
    "Bitcoin":"BTC"
   };
   generateChart(cryptoSelected, currencySelected)  // Generate Initial Chart

   $("#currency :input").on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).text())
        currencySelected = $(this).text()
        generateChart(cryptoSelected,currencySelected);
   });
   $("#crypto :input").on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).text())
        cryptoSelected = $(this).text()
        generateChart(cryptoSelected,currencySelected);
        // var crypt = convertName.cryptoSelected;
        // var curr = convertName.currencySelected;
        // console.log("Shorthand Currency: " + curr);
        // console.log("Shorthand Crypto: " + crypt);
   });
});

function generateChart(coin, curr) { 
        $.getJSON('https://min-api.cryptocompare.com/data/histoday?fsym=' + coin + '&tsym=' + curr + '&limit=180&aggregate=3&e=CCCAGG', function(resp) {
        
        var coinData = resp.Data;    //holds the values we're interested in from api call
        console.log(resp.Data);
        //var dataTimePrice = [];     //holds parsed values, used for graphing
        
        var myChart = Highcharts.chart('container2', {
        chart: {
            type: 'candlestick'
        },
        title: {
            text: coin + ' Prices'
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
            name: coin,
            data: coinData,
        }],
        tooltip:{
            valueSuffix: " " + curr
        }

      });

    });
}