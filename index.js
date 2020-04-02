const readlineSync = require('readline-sync');

const name = readlineSync.question('May I have your name?')

readlineSync.question(' Hi there ' + name +', Welcome universe 7! You will defeat all of your opponents. Press Enter to begin the game.');

const badGuys = ['Friza', 'Cell', 'buu', 'Jiren']
const Energy = ['SuperSaiyan', 'SuperSaiyan2', 'SuperSaiyanBlue', 'SuperSaiyanUltraInstinct']
var DragonBalls = []
let Playerhealth = 100
const options = ['print', 'Duck', 'Walk', 'Jump','Run']
let pickup = Energy[Math.floor(Math.random()*Energy.length)];

function game(){
    const attackpower = Math.floor(Math.random() * (6 - 4 + 3) + 6)
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)]
    let BadGuyshealth = 30
    const badGuyspower = Math.floor(Math.random() * (6 - 3 + 2) + 6)

const index = readlineSync.keyInSelect(options, 'what is the next step?')

if (options[index] == 'Duck') {
    return Playerhealth = 0;
} else if (options[index] == 'print'){
    console.log(name + ': /n' + Playerhealth + '/nDragonballs: ' + pickup)
} else if (options[index] === 'Run'){
    let key = Math.random()
    if (key <= .3) {
        console.log('Running....')
    } else if (key >= .3) {
        console.log(badGuy + ' showed up. ')

        while(badGuyshealth > 0 && Playerhealth > 0) {

            const Player = readlineSync.question('What is your next step? enter "r" to run or "a" to attack:')

            switch (Player){
                case 'r':
                    const run = Math.random()
                    if(run < 3) {
                        console.log('Just run away' + badGuys + 'attack you with: '+ badGuys) 
                    }else {
                        console.log('Player runs away!')
                        break
                    }

                    case 'a':
                        badGuyshealth -= attackpower
                        console.log('Goku attacked' + badGuys + 'with' + attackpower + 'attack power' )

                        Playerhealth -= attackpower
                        console.log('Enemies attacked you with: ' + badGuyspower + 'attack power')

                        if (badGuyshealth <=0){
                            console.log('Player defeated' + badGuys + '.\n' + badGuys + 'left' + pickup)
                            let loot = Math.random()
                            if (loot <=.3){
                                Dragonballs.push(pickup)}
                            } else if(Playerhealth <= 0){
                                console.log(badGuys + 'have defeated you. you have died.')}
                        }
            }
        }
    }
}
while(Playerhealth > 0){
    userRestore =  function(){
        userActive = true;
        userActive = 50;
    };
    userRestore()
    game()
}