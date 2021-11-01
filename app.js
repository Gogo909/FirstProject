function generateNumber(num){
  return Math.floor(Math.random() * num)
}

const Inspiration = {
 quotes: ['Be yourself ,everyone else is already taken.', 'Be the change that you wish to see in the world.','Live as if you were to die tomorrow.' ],
 advice:["Don't stop when u are almost there!","Don't forget to remember","You only know your own power"],
 methods:['work hard','sleep','hustle']
}

const result = []

for(let instance in Inspiration){
    let index = generateNumber(Inspiration[instance].length)


switch(instance){
    case 'quotes':
        result.push(`${Inspiration[instance][index]}`)
        break;
    case 'advice':
        result.push(`My advice is: ${Inspiration[instance][index]}`)
        break;
    case "methods":
        result.push(`yOU MUST ${Inspiration[instance][index]}`)
        break;
    default:
        console.log(`Maybe u dont have luck`)
 
 }
}
function recycle(result){
    const formated = result.join('\n')
    console.log(formated)
}

const ex1 = generateNumber(4)
recycle(result)