// code your solution here
function saturdayFun(activity = "roller-skate"){
    return`This Saturday, I want to ${activity}!`;
}

function mondayWork(expectation = "go to the office"){
    return `This Monday, I will ${expectation}.`

}
mondayWork(expectation = "work from home")

function wrapAdjective(flair = "*") {
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`;
    };
} 


const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptfunction("awesome"));
console.log(encouragingPromptFunction());


