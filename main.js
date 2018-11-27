const playerOneName = prompt("enter first player name");
const playerTwoName = prompt("enter second player name");
const firstMove = Math.random();
let currentPlayer = playerOneName;
if (firstMove >= 0.5) {
  firstMovePlayer = playerTwoName;
}
window.alert("player " + currentPlayer + " will make the first move");
let atackType = "string";

const playerOne = { hp: 100, stamina: 30, playerName: playerOneName }
const playerTwo = { hp: 100, stamina: 30, playerName: playerTwoName }
const damage = (max, min) => {
  damageDealt = Math.round(Math.random() * (max - min) + min);
  return damageDealt;
}
let atackCheck = 1;
while ((playerOne.hp > 0) && (playerTwo.hp > 0)) {
  atackCheck = 1;
  while (atackCheck == 1) {
    atackType = prompt(currentPlayer + " chose atack move\n [p]unch:dmagae: 3-7 stamina cost:3\n [k]ick: damage:5-10 stamina cost:8 \n [r]etreat: damage:0 stamina:recovers full stamina, skip a move\n[s]pecial atack: dmagae 4-30 stamina cost:20").toLowerCase();

    if ((atackType[0] == "p") && (playerOne.stamina < 3) && (currentPlayer == playerOneName)) {
      window.alert("not enough stamina chose a different atack")
    } else if ((atackType[0] == "k") && (playerOne.stamina < 8) && (currentPlayer == playerOneName)) {
      window.alert("not enough stamina chose a different atack")
    }
    else if ((atackType[0] == "s") && (playerOne.stamina < 20) && (currentPlayer == playerOneName)) {
      window.alert("not enough stamina chose a different atack")
    }
    else if ((atackType[0] == "p") && (playerTwo.stamina < 20) && (currentPlayer == playerTwoName)) {
      window.alert("not enough stamina chose a different atack")
    }
    else if ((atackType[0] == "k") && (playerTwo.stamina < 20) && (currentPlayer == playerTwoName)) {
      window.alert("not enough stamina chose a different atack")
    }
    else if ((atackType[0] == "s") && (playerTwo.stamina < 20) && (currentPlayer == playerTwoName)) {
      window.alert("not enough stamina chose a different atack")
    }
    else {
      atackCheck = 0;
    }
  }

  if (currentPlayer == playerTwoName) {
    switch (atackType[0]) {
      case "p":
        {
          playerOne.hp = playerOne.hp - damage(7, 3)
          playerTwo.stamina = playerTwo.stamina - 3
        }
        break;
      case "k":
        {
          playerOne.hp = playerOne.hp - damage(10, 5)
          playerTwo.stamina = playerTwo.stamina - 8
        }
        break;
      case "s":
        {
          playerOne.hp = playerOne.hp - damage(30, 4)
          playerTwo.stamina = playerTwo.stamina - 20
        }
        break;
      case "r":
        {
          playerTwo.stamina = playerTwo.stamina + 20;
        }
        break;
      default:
        window.alert("wrong atack: 'you missed'")

    }
    currentPlayer = playerOneName;
  }
  else {
    switch (atackType[0]) {
      case "p":
        {
          playerTwo.hp = playerTwo.hp - damage(7, 3)
          playerOne.stamina = playerOne.stamina - 3
        }
        break;
      case "k":
        {
          playerTwo.hp = playerTwo.hp - damage(10, 5)
          playerOne.stamina = playerOne.stamina - 8
        }
        break;
      case "s":
        {
          playerTwo.hp = playerTwo.hp - damage(30, 4)
          playerOne.stamina = playerOne.stamina - 20
        }
        break;
      case "r":
        {
          playerOne.stamina = playerOne.stamina + 20;
        }
        break;
      default:
        window.alert("wrong atack: 'you missed'")

    }
    currentPlayer = playerTwoName
  }
  window.alert(playerOneName + " current hp is :" + playerOne.hp + " \n" + playerOneName + " current stamina is: " + playerOne.stamina + " \n" + playerTwoName + " current hp is : " + playerTwo.hp + " \n" + playerTwoName + " current stamina is : " + playerTwo.stamina)

}

if (playerOne.hp <= 0) {
  window.alert("\t congratulation " + playerOneName + " you have won \t")
}
else {
  window.alert("\t congratulation " + playerTwoName + "y ou have won \t")
}