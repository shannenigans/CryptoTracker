
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var tone_analyzer = new ToneAnalyzerV3({
  "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
  "username": "64d0c1fd-85ee-4a5e-ad2a-82f26f903bf5",
  "password": "wDgsf4JrHlsA"
});
var params = { 
  'tone_input': require('tone.json'),
  'content_type': 'application/json'
};

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  bearer_token: ''
});