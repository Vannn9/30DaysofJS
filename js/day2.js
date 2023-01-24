// Level 1

let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)

console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3, 7))
console.log(challenge.substring(3, 22))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))

tmp = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(tmp.split(', '))

console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.indexOf('because'))
console.log(because.lastIndexOf('because'))
console.log(because.search('because'))

tmp = '   test   '
console.log(tmp.trim())

console.log(challenge.startsWith('3'))
console.log(challenge.endsWith('t'))
console.log(challenge.match('a'))
let tmp1 = '30 Days of', tmp2 = 'JavaScript'
console.log(tmp1.concat(tmp2))
console.log(challenge.repeat(2))

// Level 2

let quote1 = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(quote1)

let quote2 = "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
console.log(quote2)

console.log(typeof '10' == typeof 10)
console.log(typeof parseInt('10') == typeof 10)
console.log(parseFloat('9.8') == 10)
console.log(Math.round(9.8) == 10)

let v1 = 'python', v2 = 'jargon'
console.log(v1.includes('on') && v2.includes('on'))

let check = 'I hope this course is not full of jargon.'
console.log(check.includes('jargon'))

console.log(Math.floor(Math.random() * 101))
console.log(50 + Math.floor(Math.random() * 51))
console.log(Math.floor(Math.random() * 256))
let js = 'JavaScript'
console.log(js[Math.floor(Math.random() * js.length)])
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

console.log(because.substring(31, 54))

// Level 3
let count = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log((count.match(/love/gi) || []).length)

let bc = 'You cannot end a sentence with because because because is a conjunction'
console.log((bc.match(/because/gi) || []).length)

// using replaceAll (newer and better)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replaceAll('%', '').replaceAll('$','').replaceAll('@', '').replaceAll('&', '').replaceAll('#', ''))
// using regular expressions
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence2.replace(/%/g, '').replace(/\$/g, '').replace(/@/g, '').replace(/&/g, ''))

let sal = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log('test')
let vals = sal.match(/\d+/g)
let ans = 0
for (let i = 0; i < vals.length; i += 1) {
    ans += parseInt(vals[i])
}
console.log(ans)