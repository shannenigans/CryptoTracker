$(function () { 
//    var cryptoSelected = "BTC"
//    var currencySelected = "USD"
//    var convertName = {
//     "US Dollars":"USD",
//     "Euros":"EUR",
//     "Ethereum":"ETH",
//     "Bitcoin":"BTC"
//    };
//    generateChart(cryptoSelected, currencySelected)  // Generate Initial Chart

//    $("#currency :input").on('click',function(){
//         $(this).addClass('active').siblings().removeClass('active');
//         console.log($(this).text())
//         currencySelected = $(this).text()
//         generateChart(cryptoSelected,currencySelected);
//    });
//    $("#crypto :input").on('click',function(){
//         $(this).addClass('active').siblings().removeClass('active');
//         console.log($(this).text())
//         cryptoSelected = $(this).text()
//         generateChart(cryptoSelected,currencySelected);
//    });
// });

var input = document.getElementsByTagName("a");
var coin = input[0].id;

console.log("Coin: ", coin);
generateChart(coin, "USD");
function generateChart(coin, curr) { 
        $.getJSON('https://min-api.cryptocompare.com/data/histoday?fsym=' + coin + '&tsym=' + curr + '&limit=180&aggregate=3&e=CCCAGG', function(resp) {
        
        var coinData = resp.Data;    //holds the values we're interested in from api call
        console.log(resp.Data);
        console.log("First Data Point: " + resp.Data[0].time);
        //var dataTimePrice = [];     //holds parsed values, used for graphing
        for (var a = 0; a < resp.Data.length; a++){
            var newTime = resp.Data[a].time * 1000;
            coinData[a].time = newTime;
        }
        //CHART THEMES
        Highcharts.theme = {

            colors: ['#747E98', '#2E364B', '#272E41', '#232F4E', '#131F42'],
            
            chart: {
                backgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgb(255, 255, 255)'],
                        [1, 'rgb(245, 245, 245)']
                    ]
                },
            },
            title: {
                style: {
                    color: '#000',
                    font: 'bold 16px "Roboto", Verdana, sans-serif'
                }
            },
            subtitle: {
                style: {
                    color: '#666666',
                    font: 'bold 12px "Roboto", Verdana, sans-serif'
                }
            },

            legend: {
                itemStyle: {
                    font: '9pt Roboto, Verdana, sans-serif',
                    color: 'black'
                },
                itemHoverStyle:{
                    color: 'gray'
                }   
            }
        };
        Highcharts.setOptions(Highcharts.theme);
        var myChart = Highcharts.stockChart('container2', {
        chart: {
            type: 'candlestick'
        },
        // title: {
        //     text: coin + ' Prices'
        // },
        navigator: {
            enabled: false
        },
        xAxis:{            
            type: 'datetime',
            //minRange: 3600 * 1000 * 24 * 7, // one week

            gridLineWidth: 1,
            resize:{
                enabled: true,
            },
            dateTimeLabelFormats: {
                day: '%e of %b'
            },
        },
        yAxis:{
            title:'Price to USD',
            floor:0,
        },
        series: [{
            turboThreshold: 0,
            name: coin,
            data: coinData,
            pointStart: coinData[0].time,// Date.UTC
            pointInterval: (coinData[3].time-coinData[2].time) // one day
        }],
        tooltip:{
            valueSuffix: " " + curr
        }

      });

    });
}
});