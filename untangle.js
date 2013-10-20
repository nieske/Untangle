var puzzles = [
    'Wilhelmus van Nassouwe Ben ick van Duytschen bloet',
    'Wilhelmus van Nassouwe Ben ick van Duytschen bloet Den Vaderlant getrouwe Blyf ick tot in den doot Een Prince van Oraengien Ben ick vrij onverveert Den Coninck van Hispaengien Heb ick altijt gheeert',
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    "M'n zoon was gisteren jarig hij werd acht jaar oud m'n schat Hij vroeg aan mij een vlieger en die heeft hij ook gehad",
    "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe",
    'Be the change that you wish to see in the world'
];
           

var text = puzzles[Math.floor(puzzles.length * Math.random())];
var rightAnswer = text.toLowerCase();
var puzzle = text.toLowerCase().split(' ').sort();


function checkAnswer(userAnswer) {
    return userAnswer.toLowerCase() === rightAnswer;
}