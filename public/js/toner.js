//alert("Connected!");
var Twitter = require('twitter');

var secret
secret_key = '04qAixZwVqgxRS9vMFWMbak9Vw2O4VW9m67hbJ3CkN4uW3OpuN';

var client = new Twitter({
  consumer_key: 'A79TGkNbOyDh9lFgwVF8dxrQj',
  consumer_secret: secret_key,
  bearer_token: 'AAAAAAAAAAAAAAAAAAAAACrK5AAAAAAAWXjw%2BOi1QA25iKeuEXHzgUaOAZA%3DnBIochrwxX14TGz2874uYV8fNDPN8b38HIESCipPfyT17O4zfA'
});

client.get('search/tweets', {q: 'Bitcoin'}, function(error, tweets, response) {
   console.log(tweets);
});