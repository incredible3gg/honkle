/*
HONKLE
	By: incredible3gg
	Wifi Provided By: nilc
WARNING: Do not attempt to eat trash in real life.
Add any trash as long as you follow the trash rules.
*/

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

const print = console.log;
var trash = []
var lvl0trash = [
	/*THE TRASH RULES*/
	//the points must be between 2 and 19, unless it is a negitave score in which case the range is -5 to -10
	//the rarer it is to find in a real trash pile or the more nutricios it is to a honkle defines the point value
	{name:"a tin can",points:5},
	{name:"an old tire",points:8},
	{name:"a broken computer",points:12},
	{name:"a plastic 6 pack ring",points:3},
	{name:"a pizza box",points:4},
	{name:"a broken toy",points:2},
	{name:"an eggshell",points:3},
	{name:"a cigarette blunt",points:-10},
	{name:"an old magazine",points:5},
	{name:"a baseball hat",points:4},
	{name:"some rotting meat",points:18},
	{name:"a suitcase",points:6},
	{name:"an agate",points:10},
	{name:"some pages from a book called 'Essentials of Physics'",points:7}
]
var lvl1trash = [
	/*LEVEL 1 TRASH RULES*/
	//the points must be between 5 and 23, with no negative point trash from this level and up.
	//you can only add 3 items with points over 20 (including the ones already added) and all of the items have to be common household items that are not normaly found in trash piles.
	{name:"a cd player",points:10},
	{name:"a coke bottle",points:13},
	{name:"a sodden sock",points:23},
	{name:"a cowboy boot",points:19},
	{name:"some watermelon rinds",points:14},
	{name:"flour",points:5},
	{name:"a game controller",points:10}
]
var lvl2trash = [
	/*LEVEL 2 TRASH RULES*/
	//The points for an item must be between 10 and 28.
	//You can only add 5 items above 25 and all of the items have to be somewhat expensive, but not too expensive.
	{name:"an ancient artifact",points:28},
	{name:"a computer",points:19},
	{name:"guitar",points:20},
	{name:"a tire full of money",points:23},
	{name:"an expensive violin",points:15},
	{name:"a winning lottery ticket",points:21},
	{name:"a famous painting",points:26},
	{name:"a wedding ring",points:14},
	{name:"an AC unit",points:25}
]
var points = 0
var notafood = 0
var spintime = 1
var rank = "afk noob"

print("WELCOME TO HONKLE\n In Honkle you are a honkle that lives on top of\n a hill with a trashpile underneath. Every turn you grab two pieces\n of trash to choose from to eat. Depending on what trash you choose, you will\n get a different amount of points. every time you rank up,\n starting after the afk pro rank, more trash will be added to the pile.");
print("BEFORE YOU START, THERE IS ONE RULE: DO NOT DISOBAY THE RULES.\n")

function trashLoop() {
		console.clear();
		if (points < 50) {
			rank = "afk noob";
			trash = [...lvl0trash]
		}
		if (points > 50) {
			rank = "noob";
			trash = [...lvl0trash]
		} 
		if (points > 200) {
			rank = "afk pro";
			trash = [...lvl0trash, ...lvl1trash]
		} 
		if (points > 500) {
			rank = "pro";
			trash = [...lvl0trash,...lvl1trash,...lvl2trash]
		}
		if (points > 1000) {
			rank = "couch potato"
			trash = [...lvl0trash,...lvl1trash,...lvl2trash]
		} 
		if (points > 2000) {
			rank =  "NaN potato"
			trash = [...lvl0trash,...lvl1trash,...lvl2trash]
		}
		if (points > 5000) {
			rank = "Lamy"
			trash = [...lvl0trash,...lvl1trash,...lvl2trash]
		}
		if (points > 10000) {
			rank = "afk Sniffle"
			trash = [...lvl0trash,...lvl1trash,...lvl2trash]
		}
		if (points > 15000) {
			rank = "Sniffle"
			trash = [...lvl0trash,...lvl1trash,...lvl2trash]
		}
		spintime += 1
		var c1 = trash[Math.floor(Math.random() * trash.length)];
		var c2 = trash[Math.floor(Math.random() * trash.length)];
		var c3 = trash[Math.floor(Math.random() * trash.length)];
		print("You have "+points+" points.")
		print("Your rank is "+rank+".\n")
		if (spintime == 20) {
			rl.question("Do you want to test your luck with a spin? \nSpinning will take away 12 points and give you 3 random pieces of trash!\n   [y\\n]>", (spin) => {
				switch (spin) {
					case "y":
						points -= 15;
						print("you got "+c1.name+", "+c2.name+", and "+c3.name+".");
						points += c1.points+c2.points+c3.points;
						rl.question("\nHit enter to move on.", () => {trashLoop()});
						break;
					default:
						trashLoop();
				}
			})
			spintime = 1;
		} 
		
		if (notafood == 1) {
			print("That was not an option!")
			notafood = 0
		}
		print("You reach into the trash pile with your long nose.")
		rl.question("You got "+c1.name+" and "+c2.name+". Type 1 to choose the first and 2 to choose the second. You can also type exit to stop.\n   >", (choice) => {
			switch (choice) {
				case "1":
					points += c1.points;
					trashLoop();
					break;
				case "2":
					points += c2.points;
					trashLoop();
					break;
				case "exit":
					print("ctrl+c to finish exit");
					break;
				default:
					notafood = 1;
					trashLoop();
			};
		});
}

rl.question("PRESS ENTER TO START", () => {
	trashLoop();
});
