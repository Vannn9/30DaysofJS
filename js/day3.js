// Level 1

let firstName = 'brandon', lastName = 'van', country = 'USA', city = 'houston', age = 23, isMarried = true
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried)

console.log(typeof '10' == 10)
console.log(parseInt('9.8') == 10)

const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())

// Level 2

/*
let base = prompt('Enter the base length')
let height = prompt('Enter the height')
console.log(base * height / 2)

let a = prompt('Enter the length of side a')
let b = prompt('Enter the length of side b')
let c = prompt('Enter the length of side c')
console.log(parseInt(a) + parseInt(b) + parseInt(c))

let len = prompt('Enter the length')
let wid = prompt('Enter the width')
console.log(2 * (parseInt(len) + parseInt(wid)))

let rad = prompt('Enter the radius')
console.log(Math.PI * Math.exp(rad, 2))
*/

let fName = 'brandon'
let lName = 'van'
console.log(fName.length > lName.length ? "first longer" : "last longer")

let myAge = 23
let yourAge = 26
let diff = Math.abs(myAge - yourAge)
console.log(myAge > yourAge ? `I am ${diff} years older than you`: `You are ${diff} years older than me`)

/*
let bYear = prompt('What is your birthyear?')
let old = now.getFullYear()
let old2 = old - bYear
console.log(old2 > 18 ? `You are ${old2}. You are old enough to drive` : `You are ${old2}. You will be allowed to drive after ` + (18 - old2) + ' years')
*/

let curY = now.getFullYear()
let curM = now.getMonth()
let curD = now.getDate()
let curH = now.getHours()
let curMin = now.getMinutes()

console.log(`${curY}-${curM}-${curD} ${curH}:${curMin}`)

// Level 3

console.log(`${curY}-${curM}-${curD} ` + (curH > 9 ? `${curH}` : '0' + `${curH}`) + ':' + (curMin > 9 ? `${curMin}` : '0' + `${curMin}`))