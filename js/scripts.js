var vowels = ["a", "e", "i", "o", "u"];

var findVowel= function(statement) {
  for(var j = 0; j < statement.length; j++) {
    var isVowel = false;
   for(var i = 0; i < vowels.length; i++) {
     if (statement[j] === vowels[i]) {
       isVowel = true;
     };

     if (isVowel === true) {
       statement = statement.replace(/a|e|i|o|u/gi, "-")
     };
   };
 };
 return statement;
};


$(document).ready(function() {


    event.preventDefault();
});
