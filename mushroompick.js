const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const print = console.log;

var shrooms = {
    redcount:0,
    browncount:0,
    orangecount:0,
    goldshrooms:0
}
var newtext = 0;
var event = {
    slug:1,
    slugmad:2,
    shroombless:1,
    goldslug:1,
    goldslugmad:5
}
const slugs = [{type:"bannana",shroom:"2"},{type:"poop",shroom:"3"},{type:"slimey",shroom:"1"}];

var rank = "spore"

print("WELCOME TO SHROOMLAND.\nIN THIS GAME, YOU PICK MUSHROOMS TO SELL FOR GOLDEN MUSHROOMS\nTO RANK UP. THE FINAL RANK IN THE GAME IS GUACATHON. THIS IS YOUR GOAL.");

function mushroomcheck() {
    return "You have "+shrooms.redcount+" red mushrooms, "+shrooms.browncount+" brown mushrooms, "+shrooms.orangecount+" orange mushrooms, and "+shrooms.goldshrooms+" golden mushrooms."
}

function game() {
    console.clear();

    if (shrooms.goldshrooms >= 10) {
        rank = "mycelium"
    } if (shrooms.goldshrooms >= 20) {
        rank = "mold"
    } if (shrooms.goldshrooms >= 50) {
        rank = "cup shroom"
    } if (shrooms.goldshrooms >= 70) {
        rank = "bolite"
    } if (shrooms.goldshrooms >= 100) {
        rank = "edible bolite"
    } if (shrooms.goldshrooms >= 120) {
        rank = "Gilled Shroom"
    } if (shrooms.goldshrooms >= 150) {
        rank = "Amanita"
    } if (shrooms.goldshrooms >= 200) {
        rank = "Puffball"
    } if (shrooms.goldshrooms >= 250) {
        rank = "Floof Shroom"
    } if (shrooms.goldshrooms >= 300) {
        rank = "Kitten Shroom"
    } if (shrooms.goldshrooms >= 400) {
        rank = "Guacathon"
    } if (shrooms.goldshrooms < 10) {
        rank = "spore"
    }
    
    event.slug +=1
    event.goldslug += 1
    event.shroombless +=1
    if (event.shroombless >= 20) {
        event.shroombless = 0;
        rl.question("You are blessed with 5 shrooms of any type! Press 1 for red, 2 for brown, and 3 for orange!\n   >", (type) => {
            switch (type) {
                case "1":
                    shrooms.redcount += 5
                    break;
                case "2":
                    shrooms.browncount += 5
                    break;
                case "3":
                    shrooms.browncount += 5
                    break;
                default:
                    shrooms.redcount += 2;
                    shrooms.browncount += 2;
                    shrooms.orangecount += 1;
            }
            print("You recieved your shrooms. "+mushroomcheck());
            rl.question("\nPress enter to move on.", () => {game()})
        })
    } else if (event.slug >= 4) {
        event.slug = 0
        var slug = slugs[Math.floor(Math.random() * slugs.length)];
        print("A "+slug.type+" slug arrives. You must feed it a mushroom it likes. If you feed it the right mushroom,\nit will leave only taking the mushroom you fed it but if you feed it one it doesn't\nlike, it will eat "+event.slugmad+" other mushrooms.\n");
        print("Press 1 to feed it a red shroom, 2 to feed it a brown, and 3 to feed it an orange mushroom.")
        rl.question("   >", (choice) => {
            switch (choice) {
                case slug.shroom:
                    print("The slug only takes the one you give it. Congrats!");
                    break;
                default:
                    event.slugmad += 1;
                    print("The slug frowns and eats your shroom. It also eats "+event.slugmad+" others.");
                    for (var i = 0; i < event.slugmad; i++) {
                        var eaten = Math.floor(Math.random() * 3);
                        switch (eaten) {
                            case 0:
                                shrooms.redcount -= 1;
                                break;
                            case 1:
                                shrooms.browncount -= 1;
                                break;
                            case 2:
                                shrooms.orangecount -= 1;
                                break;
                        }
                    }
            }
            switch (choice) {
                case "1":
                    shrooms.redcount -= 1;
                    break;
                case "2":
                    shrooms.browncount -= 1;
                    break;
                case "3":
                    shrooms.orangecount -= 1;
                    break;
                default:
                    shrooms.goldshrooms -= 1;
            }
        rl.question("\nHit enter to move on.", () => {game()})
        });
    } else if (event.goldslug >= 50) {
        event.goldslug = 0;
        print("The Golden Slug comes and takes away "+event.goldslugmad+" mushrooms.\n");
        shrooms.goldshrooms -= event.goldslugmad;
        event.goldslugmad += 5
        rl.question("Press enter to move on.", () => {game()});
    } else {
        print(mushroomcheck());
        print("Your rank is "+rank+"\n")
    
    if (newtext == 1) {
        print("That is not an answer.");
    } else if (newtext == 2) {
        print("You found some mushrooms.");
    }
    newtext = 0
    rl.question("Type 1 to pick mushrooms from the forest, or 2 to buy a golden mushroom with 5 of each normal type. You can also type exit to stop.\n   >", (choice) => {
        switch (choice) {
            case "1":
                shrooms.redcount += Math.floor((Math.random() * 3)+1)
                shrooms.browncount += Math.floor((Math.random() * 3)+1)
                shrooms.orangecount += Math.floor((Math.random() * 3)+1)
                newtext = 2;
                game();
                break;
            case "2":
                if (shrooms.redcount >= 5 && shrooms.browncount >= 5 && shrooms.orangecount >=5) {
                    print("You buy 1 golden mushroom.");
                    shrooms.goldshrooms += 1
                    shrooms.redcount -= 5
                    shrooms.browncount -= 5
                    shrooms.orangecount -= 5
                } else {
                    print("You don't have enough mushrooms!");
                }
                rl.question("\nHit enter to continue.", () => {game()})
                break;
            case "exit":
                print("ctrl+c to finish exit");
                break;
            default:
                newtext = 1;
                game();
        }
    });}
}

rl.question("\nHIT ENTER TO START.", () => {game()})
