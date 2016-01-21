var replaceVowels= function(statement) {
  return statement = statement.replace(/a|e|i|o|u/gi, "-")

};


$(document).ready(function() {
    $("form#wordPuzzle").submit(function(event) {
      var statementInput = $("input#statement").val();
      var statementOutput = replaceVowels(statementInput);
      var wnd = window.open("about:", "", "_blank");
      wnd.document.write(statementOutput);
    });
  event.preventDefault();
});


//STUFF BELOW HERE IS WORKING CODE BEFORE REFACTORING

// var vowels = ["a", "e", "i", "o", "u"];
//
// var findVowel= function(statement) {
//   for(var j = 0; j < statement.length; j++) {
//     var isVowel = false;
//    for(var i = 0; i < vowels.length; i++) {
//      if (statement[j] === vowels[i]) {
//        isVowel = true;
//      };
//
//      if (isVowel === true) {
//        statement = statement.replace(/a|e|i|o|u/gi, "-")
//      };
//    };
//  };
//  return statement;
// };
