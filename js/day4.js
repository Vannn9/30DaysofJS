// Level 1

/*
let age = prompt('Enter your age:')
if (age >= 18) {
    console.log('You are old enough to drive')
} else {
    console.log('You are left with ' + (18 - age) + ' years to drive.')
}

const myAge = 23
let yourAge = prompt('Enter your age:')
if (yourAge > myAge) {
    console.log('You are ' + (yourAge - myAge) + ' older than me.')
} else if (yourAge < myAge) {
    console.log('You are ' + (myAge - yourAge) + ' younger than me.')
} else {
    console.log('We are the same age.')
}
*/

let a = 4
let b = 3
// if else
if (a > b) {
    console.log('a is greater than b')
} else {
    console.log('a is less than b')
}
// ternary operator
a > b
    ? console.log('a is greater than b')
    : console.log('a is less than b')

/*
let num = prompt('Enter a number:')
num % 2 == 0
    ? console.log(num + ' is an even number')
    : console.log(num + ' is an odd number')
*/

// Level 2

/*
let grade = prompt('Enter your grade:')
if (100 >= grade && grade >= 90) {
    console.log('A')
} else if (grade >= 80) {
    console.log('B')
} else if (grade >= 70) {
    console.log('C')
} else if (grade >= 60) {
    console.log('D')
} else if (grade >= 0) {
    console.log('F')
} else {
    console.log('Not a valid grade.')
}

let month = prompt('Enter the month:')
if (month == 'September' || month == 'October' || month == 'November') {
    console.log('Autumn')
} else if (month == 'December' || month == 'January' || month == 'February') {
    console.log('Winter')
} else if (month == 'March' || month == 'April' || month == 'May') {
    console.log('Spring')
} else {
    console.log('Summer')
}

let day = prompt('Enter the day:')
day = day.toLowerCase()
if (day == 'saturday' || day == 'sunday') {
    console.log(day + ' is a weekend')
} else {
    console.log(day + ' is a weekday')
}
*/

// Level 3

/*
let month = prompt('Enter the month:')
month = month.toLowerCase()
month = month.charAt(0).toUpperCase() + month.slice(1)
if (month == 'January' || month == 'March' || month == 'May' || month == 'July' || month == 'August' || month == 'October' || month == 'December') {
    console.log(month + ' has 31 days.')
} else if (month == 'February') {
    console.log(month + ' has 28 days.')
} else {
    console.log(month + ' has 30 days.')
}
*/