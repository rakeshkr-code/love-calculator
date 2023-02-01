function clearallscore() {
    localStorage.clear()
}
function calculate() {
    let loveScore = Math.round(100 * Math.random()) + 1;
    let scoreText = "";
    let name_input = document.getElementById("name").value
    let pname_input = document.getElementById("pname").value

    if (! (name_input && pname_input)) {
        loveScore = "--"
        scoreText = "-----"
        scoreElement = document.getElementById("result-score")
        messageElem = document.getElementById("result-text")
        scoreElement.innerHTML = `${loveScore}%`
        messageElem.innerHTML = `${scoreText}.`
        alert("Please Enter Names and then proceed.")
        return false
    }

    let keygenfr = name_input + pname_input
    let keygenrev = pname_input + name_input

    if (localStorage.getItem(keygenfr)) {
        loveScore = localStorage.getItem(keygen)
    } else if (localStorage.getItem(keygenrev)) {
        loveScore = localStorage.getItem(keygen)
    } else {
        localStorage.setItem(keygenfr, loveScore)
    }

    if (loveScore < 35) {
        scoreText = "<i class='bi bi-heartbreak-fill'></i> There's No match this year. Better Luck next year."
    } else if (loveScore >= 35 && loveScore < 75) {
        scoreText = "May be a match, keep throwing love-arrows <i class='bi bi-arrow-through-heart-fill'></i> daar ke aage jeet hai!"
    } else {
        scoreText = "<i class='bi bi-hearts'></i> Congrats! it's a Match. You both will get mingle."
    }
    
    scoreElement = document.getElementById("result-score")
    messageElem = document.getElementById("result-text")
    scoreElement.innerHTML = `${loveScore}%`
    messageElem.innerHTML = `${scoreText}.`

}