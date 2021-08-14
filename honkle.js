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
const trash = [
	/*THE TRASH RULES*/
	//the points must be between 2 and 19
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
]

var points = 0
var notafood = 0
var spintime = 1
var rank = "afk noob"

print("WELCOME TO HONKLE\n In Honkle you are a honkle that lives on top of\n a hill with a trashpile underneath. Every turn you grab two pieces\n of trash to choose from to eat. Depending on what trash you choose, you will\n get a different amount of points.");
print("BEFORE YOU START, THERE IS ONE RULE: DO NOT DISOBAY THE RULES.\n")

function trashLoop() {
		console.clear();		
		if (points > 50) {
			rank = "noob";
		} 
		if (points > 200) {
			rank = "afk pro";
		} 
		if (points > 500) {
			rank = "pro";
		}
		if (points > 1000) {
			rank = "couch potato"
		} 
		if (points > 2000) {
			rank =  "NaN potato"
		}
		if (points > 5000) {
			rank = "Lamy"
		}
		if (points > 10000) {
			rank = "afk Sniffle"
		}
		if (points > 15000) {
			rank = "Sniffle"
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
