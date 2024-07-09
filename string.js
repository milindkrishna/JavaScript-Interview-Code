// String to Array
let string = 'GeeksforGeeks'
let arr = []
arr = [...string]
console.log(arr)

// palindrome or not

let xyz = 'DAD'
if (xyz === xyz.split('').reverse().join('')) {
	console.log(true)
} else {
	console.log(false)
}

// Extract a number from a string using JavaScript
let str = 'jhkj7682834hhdg237'
function extractNumber() {
	let numbers = ''
	for (let i = 0; i < str.length; i++) {
		if (!isNaN(str[i])) {
			numbers += str[i]
		}
	}
	console.log(numbers)
}

extractNumber()

// Check if a string is a valid JSON string

const jsonS = '{"name":"John", "age":30, "city":"New York"}'
function validJSON() {
	try {
		JSON.parse(jsonS)
		return true
	} catch (e) {
		return false
	}
}

console.log(validJSON())

// Reverse a String
let s = 'GeeksforGeeks'

function reverseString() {
	const rev = s.split('').reverse().join('')
	console.log(rev)
}

reverseString()

// Sort a string in JavaScript
function sortString() {
	return s.split('').sort().join('')
}

console.log(sortString())

// to remove text from a string

let newString = s.replace('Geeks', '')
console.log(newString)

// Remove a Character From String

let newChar = s.replace('G', '')
// to remove all the G character
let c = s.replace(/G/g, '')
console.log(newChar)
console.log(c)

// remove repetative character from string

const unique = [...new Set(s)]
const result = unique.join('')
console.log(result)

// To Count the Occurrences of Each Character

let res = {}
for (let i = 0; i < s.length; i++) {
	let ch = s.charAt(i)
	if (!res[ch]) {
		res[ch] = 1
	} else {
		res[ch] += 1
	}
}
console.log(res)

// to Count Words of a String

let value = 'Welcome, to the Geeeksforgeeks'

const word = value.trim().split(/\s+/)
console.log(word.length)

// Extract URLs from a String
let a = 'Platform for geeks: https://www.geeksforgeeks.org'
let r = a.split(/\s+/).find((word) => word.startsWith('http'))
console.log(r)

// Strip all non-numeric characters from string

let b = '1Gee2ksFor345Geeks6'
console.log(
	b
		.split('')
		.filter((char) => isNaN(parseInt(char)))
		.join('')
)

// // Strip all numeric characters from string
console.log(
	b
		.split('')
		.filter((char) => !isNaN(parseInt(char)))
		.join('')
)

// to Count Number of Alphabets
let alphabets = b.match(/[a-zA-z]/g)
console.log(alphabets, alphabets.length)

// // to Count Number of numbers
let digits = b.match(/\d/g)
console.log(digits, digits.length)

// Sort an array of Strings

let cs = ['Suraj', 'Sanjeev', 'Rajnish', 'Yash', 'Ravi']
console.log(cs.sort())

// to check if a string is a valid IP address format

// let net = require('net')
// let ip = '192.168.1.1'
// let net = new net()
// if (net.isIPV4(ip) || net.isIPV6(ip)) {
// 	console.log(true)
// } else {
// 	console.log(false)
// }

// JavaScript URLify a given string (Replace spaces is %20)
let z = 'Geeks for Geeks'
let outputStr = z.replaceAll(' ', '%20')
console.log(outputStr)
