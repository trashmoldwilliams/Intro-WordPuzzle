var vowels = ["a", "e", "i", "o", "u"];

var findVowel= function(word) {
  for(var j = 0; j < word.length; j++) {
   for(var i = 0; i < vowels.length; i++) {
     if (word[j] === vowels[i]) {
       return true;
     };
   };
 };
};


$(document).ready(function() {


    event.preventDefault();
});
