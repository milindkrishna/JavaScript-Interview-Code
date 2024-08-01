// Convert an Array to an Object in JavaScript

let arrr = ['Geeks', 'for', 'Geeks']
const obj = { ...arrr }
console.log(obj)

// to Convert an Object into Array of Objects
let sample = {
	java: {
		id: 1,
		title: 'Java Programming'
	},
	python: {
		id: 2,
		title: 'Python for Beginners'
	}
}

console.log(Object.values(sample))

// Add an Object to an Array in JavaScript

arrr = [...arrr, sample]

console.log(arrr)

// To delete an item from an array using JavaScript from
// middle

const arr1 = ['gfg', 'GFG', 'g', 'GeeksforGeeks']

const emptyArr = []

for (let i = 0; i < arr1.length; i++) {
	if (arr1[i] !== 'GFG') {
		emptyArr.push(arr1[i])
	}
}

console.log(emptyArr)

arr1.pop()
console.log(arr1)

arr1.shift()
console.log(arr1)

// Most Frequent Element in an Array using JavaScript

// JavaScript Get all non-unique values from an array

let arr2 = [89, 89, 11, 2, 3, 4, 2, 4, 5, 7]

function nonunique() {
	let output = arr2.filter((item, index) => arr2.indexOf(item) !== index)
	console.log(output)
}

nonunique()

// JavaScript Get all unique values from an array

let arr3 = [89, 89, 11, 2, 3, 4, 2, 4, 5, 7]

function unique() {
	let out = arr3.filter(
		(item, index) =>
			arr3.indexOf(item) === index && arr3.lastIndexOf(item) === index
	)
	console.log(out)
}

unique()

// JavaScript remove all duplicate values from an array

let arr4 = [89, 89, 11, 2, 3, 4, 2, 4, 5, 7]

function removeDuplicate() {
	let xx = arr4.filter((item, index) => arr4.indexOf(item) === index)
	console.log(xx)
}

removeDuplicate()

// to Remove Duplicates from an Array of Objects in JavaScript

let books = [
	{ title: 'C++', author: 'Bjarne' },
	{ title: 'Java', author: 'James' },
	{ title: 'Python', author: 'Guido' },
	{ title: 'Java', author: 'James' }
]

function removeD() {
	jsonObject = books.map(JSON.stringify)
	uniqueSet = new Set(jsonObject)
	uniqueArray = Array.from(uniqueSet).map(JSON.parse)
	console.log(uniqueArray)
}

removeD()

// To Get a Value from a JSON Array in JavaScript

let jsonArray = [
	{
		ComapnyName: 'GeeksforGeeks',
		Location: 'Noida'
	},
	{
		Courses: [
			'DSA self paced course',
			'DevOps Boot camp',
			'GATE prepration course'
		],
		Topics: ['Web Devlopment', 'Machine Learning', 'Artifical Intelligence']
	}
]

for (let data of jsonArray) {
	console.log(data)
}

// Reverse an array in JavaScript

let numbers_array = [1, 2, 3, 4, 5]

// console.log(numbers_array.reverse())

let reversearray = []
numbers_array.forEach((e) => {
	reversearray.unshift(e)
})
console.log(reversearray)

// Check if an element is present in an array using JavaScript

const arr6 = [5, 20, 30, 40, 50]
const xx = 10
const res = arr6.find((element) => element === xx)
if (res !== undefined) {
	return console.log(xx + ' is present')
}
console.log(xx + ' is not present')

// binary search
let arr = [1, 3, 5, 7, 8, 9]
let x = 5

function iterativeFunction() {
	let start = 0,
		end = arr.length - 1

	while (start <= end) {
		let mid = Math.floor((start + end) / 2)
		if (arr[mid] === x) return true
		else if (arr[mid] < x) start = mid + 1
		else end = mid - 1
	}

	return false
}

console.log(iterativeFunction())

// To Find the Largest Element in an Array

let arr7 = [20, 10, 20, 4, 100]

function max() {
	let max = arr7[0]

	for (let i = 1; i < arr7.length; i++) {
		if (arr7[i] > max) {
			max = arr7[i]
		}
	}

	return max
}

console.log(max())

// to Find Second Largest Element in an Array

let Arr = [12, 35, 1, 10, 34, 1]

const sortedArr = Arr.slice().sort((a, b) => b - a)
const secondLargest = sortedArr[1]

console.log(secondLargest)

// To Find the smallest Element in an Array

function min() {
	let min = arr7[0]

	for (let i = 1; i < arr7.length; i++) {
		if (arr7[i] < min) {
			min = arr7[i]
		}
	}

	return min
}

console.log(min())

// Count occurrences of all items in an array in JavaScript
let datas = [
	'geeks',
	2,
	'geeks',
	2,
	'Javascript',
	4,
	'Javascript',
	5,
	'for',
	6,
	'Javascript',
	1,
	'for',
	5,
	7,
	8,
	'for'
]

let counter = {}

datas.forEach((e) => {
	if (counter[e]) {
		counter[e] += 1
	} else {
		counter[e] = 1
	}
})

console.log(counter)

// To Swap First and Last Elements in an Array

let array = [10, 20, 30, 40, 50]
let temp = array[0]

array[0] = array[array.length - 1]
array[array.length - 1] = temp
console.log('Array after interchange:', array)



// bracket verification 

function bp(str) { 
let stack = [] 
let pairs = {')':'(', ']':'[', '}':'{'} 
for(let p of str){ 
if(p === '(' || p === '{' || p === '[') { 
stack.push(p) 
} else if(p === ')' || p === '}' || p === ']') { 
if(stack.length === 0 || stack.pop() !== pairs[p]){ 
return false 
} } } 
return stack.length === 0 } 
console.log(bp('([{}])')) 

// array summation 

let arr = [1 , 2 , 3 , 4 , 5] 
let res = arr.reduce((pv, cv) => { return pv + cv }, 0 ) console.log(res)
