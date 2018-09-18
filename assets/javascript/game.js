$(document).ready(function() {
var random_result;
var losses;
var wins;

for(var i = 0; i < 4; i++){
    
    var random = Math.floor(Math.random() = 12);
    console.log(random);
    var crystal = $("<div>");
        crystal.attr("class", 'crystal')

    $(".crystals").append(crystal);   
    console.log("hello word");
}
}




// game based on 4 crystal and random number
//each crystal has a random number between 1-12
//a new number will be generated every single time the game is either won or lost
//each time you click a crystal it will add the results up until total score is mett
//if its equal you win if not you lose