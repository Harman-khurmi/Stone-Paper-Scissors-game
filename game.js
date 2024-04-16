let choose = document.querySelectorAll(".choice");
let detail = document.querySelector(".detail");
let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");
let showmsg = document.querySelector("#msg");
let restart = document.querySelector("#restart");

let usercount = 0;
let compscount = 0;

let compchoicerand = () => {
    let options = ["stone", "paper", "scissors"];
    let rand = Math.floor(Math.random() * 3);
    return options[rand];
};

let restartgame = restart.addEventListener("click", () => {
    usercount = "0";
    userscore.innerText = usercount;
    compscount = "0";
    compscore.innerText = compscount;
    showmsg.innerText = `Play Your Move`;
    showmsg.style.backgroundColor = "#697a21";
});

for (let i = 0; i < 3; i++) {
    choose[i].addEventListener("click", () => {
        let userchoice = choose[i].getAttribute("id");
        console.log("button was clicked", userchoice);
        playgame(userchoice);
    });
}
let wincheck = (userwin, user, comp) => {
    //userwin === 1 ? console.log("you won") : console.log("you lost");
    if (userwin === 1 && user !== comp) {
        console.log("you won");
        usercount++;
        userscore.innerText = usercount;
        showmsg.innerText = `You Won! ${user} beats ${comp}`;
        console.log(user, comp);
        showmsg.style.backgroundColor = "green";
    }
    else {
        console.log("you lost");
        compscount++;
        compscore.innerText = compscount;
        showmsg.innerText = `You Lost! ${comp} beats ${user}`;
        console.log(user, comp);
        showmsg.style.backgroundColor = "red";

    }
};

let drawgame = () => {
    console.log("its a draw");
    showmsg.innerText = `It is a draw`;
    showmsg.style.backgroundColor = "#B8B42D";
}

let playgame = (userchoice) => {
    let compchoice = compchoicerand();
    console.log(`comp choice ${compchoice}`);
    if (userchoice === compchoice) {
        drawgame();
    }
    else {
        let userwin = 1;
        if (userchoice === "stone") {
            userwin = compchoice === "paper" ? 0 : 1;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "stone" ? 1 : 0;
        }
        else {
            userwin = compchoice === "stone" ? 0 : 1;
        }
        console.log(`userwin ${userwin}`);
        let check = wincheck(userwin, userchoice, compchoice);
        console.log(check);
    }

};



