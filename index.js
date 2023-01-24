function calculate() {
    let loveScore = Math.round(100 * Math.random()) + 1;
    let scoreText = "You may find your partner this month.";
    if (loveScore < 35) {
        scoreText = "Hey buddy, you're gonna stay Single again."
    } else if (loveScore >= 35 && loveScore < 75) {
        scoreText = "Don't worry, you may find your partner this time."
    } else {
        scoreText = "Congrats! there's a very high probability you'll find your partner this time."
    }

    // expression = document.getElementById("expression").value
    // console.log(expression)
    // if (expression) {
    //     try {
    //         answer = eval(expression)
    //         document.getElementById("expression").value = answer
    //         addlog(expression + " = " + answer)
    //     } catch(e) {
    //         console.log("Bad Expression")
    //         addlog("Expression '" + expression + "' is a Bad Expression. Please Fix it.")
    //     }
    // }
}