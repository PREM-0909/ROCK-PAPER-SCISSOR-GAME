//  ROCK PAPER SCISSOR

function playGame(userchoice) {
    let choices = ['✊ROCK', '🤚PAPER', '✌SCISSOR']
    let computerchoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("computerChoice").innerHTML = `computer chooses : ${computerchoice}`;
    document.getElementById("userChoice").innerHTML = `you have choosen : ${userchoice}`;


    let result;
    if (userchoice === computerchoice) {
        result = `it's a tie 😅`
    }

    else if ((userchoice === '✊ROCK' && computerchoice === '✌SCISSOR') ||
        (userchoice === '🤚PAPER' && computerchoice === '✊ROCK') ||
        (userchoice === '✌SCISSOR' && computerchoice === '🤚PAPER')
) {
        result = `you won 🥂🥳`
    }
    else {
        result = `you lose 😭😞`
    }

document.getElementById("result").innerHTML = result;


}

