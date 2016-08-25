var express = require('express');
var router = express.Router();

//Returns a random whole integer within the given range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var quotes = ["Always have faith. ALways have hope.", "The key is to make it.", "Another one.", "Key to more success is clean heart and clean face.", "Smh they get mad when you have joy.", "Baby, you smart. I want you to film me taking a shower.", "You smart! You loyal! You're a genius.", "We go hard. In everything we do we’re going to accomplish our victory and our goal. If it takes a day, a year, or 20 years, we’re going to win. I haven’t taken a loss because everything I’ve done has been a working process to win. From being a kid on them turntables to becoming where I am is not a loss. It’s a blessing.", "Before I went into the studio with Jay Z, Jigga, Hov, I wanted to go to the Marcy Projects in Brooklyn and touch the people and touch the culture.", "Give thanks to the most high.", "They will try to close the door on u, just open it.", "They don’t want you to win. They don’t want you to have the No. 1 record in the country. They don’t want you get healthy. They don’t want you to exercise. And they don’t want you to have that view.", "I don’t have no favorite rock bands. I’m a fan of rock music though.", "I wanted to see what type of trees is growing in Marcy Projects, what type of water Jay Z was drinking.", "Those that weather the storm r the great ones.", "The key to more success is coco butter.", "I changed… a lot.", "My fans expect me to be greater and keep being great.", "They don’t want you to jet ski.",
"Congratulations, you played yourself.", "You want my advice? Don’t play yourself.", "Another one, no. Another two, drop two singles at a time.", "I can deal with everything. I got the answer for anything. This DJ Khaled." ];


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express', quote: quotes[numQuote]});
  //res.render('index');
  var numQuote = getRandomInt(0, quotes.length - 1);
  var data = { quote: quotes[numQuote] };
  res.json(data);
});
 
// router.get('/getquote', function(req, res, next){
//   var numQuote = getRandomInt(0, quotes.length - 1);
//   var data = { quote: quotes[numQuote] };
//   res.json(data);
// });

module.exports = router;
