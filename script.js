// 1.Reverse a string
function reverseString(str) {
	return str.split('').reverse().join('');
}

// 2.Factorialize a Number
function factorialize(num) {
	for (let product = 1; num > 0; num--) {
		product *= num;
	}
	return product;
}

// 3.Find the Longest Word in a String
function findLongestWordLength(str) {
	return Math.max(...str.split(' ').map((word) => word.length));
}

// 4.Return Largest Numbers in Arrays
function largestOfFour(arr) {
	return arr.map(function (group) {
		return group.reduce(function (prev, current) {
			return current > prev ? current : prev;
		});
	});
}

// 5.Confirm the Ending
function confirmEnding(str, target) {
	return str.slice(str.length - target.length) === target;
}

// 6.Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
	let accumulatedStr = '';
	while (num > 0) {
		accumulatedStr += str;
		num--;
	}
	return accumulatedStr;
}

// 7.Truncate a String
function truncateString(str, num) {
	if (str.length > num) {
		return str.slice(0, num) + '...';
	} else {
		return str;
	}
}

// 8. Finders Keepers
// Create a function that looks through an array arr
// and returns the first element in it that passes a
// 'truth test'. This means that given an element x,
// the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.
function findElement(arr, func) {
	return arr.find(func);
}

// 9.Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
	return typeof bool === 'boolean';
}

// 10.Title Case a Sentence (Capitalize first letter of each word)
function titleCase(str) {
	let convertToArray = str.toLowerCase().split(' ');
	let result = convertToArray.map(function (val) {
		return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
	});
	return result.join(' ');
}

// 11.Slice and Splice
function frankenSplice(arr1, arr2, n) {
	let localArr = arr2.slice();
	localArr.splice(n, 0, ...arr1);
	return localArr;
}

// 12. Falsy Bouncer (Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.)
function bouncer(arr) {
	return arr.filter(Boolean);
}

// 13. Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
function getIndexToIns(arr, num) {
	return arr
		.concat(num)
		.sort((a, b) => a - b)
		.indexOf(num);
}

// 14. Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
	return arr[1]
		.toLowerCase()
		.split('')
		.every(function (letter) {
			return arr[0].toLowerCase().indexOf(letter) != -1;
		});
}

// 15. Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
	let temp = [];
	let result = [];

	for (let a = 0; a < arr.length; a++) {
		if (a % size !== size - 1) temp.push(arr[a]);
		else {
			temp.push(arr[a]);
			result.push(temp);
			temp = [];
		}
	}

	if (temp.length !== 0) result.push(temp);
	return result;
}

// 16.Sum All Numbers in a Range
function sumAll(arr) {
	let max = Math.max(arr[0], arr[1]);
	let min = Math.min(arr[0], arr[1]);
	let sumBetween = 0;
	for (let i = min; i <= max; i++) {
		sumBetween += i;
	}
	return sumBetween;
}

// 17.Diff Two Arrays
function diffArray(arr1, arr2) {
	return arr1
		.concat(arr2)
		.filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

// 18.Seek and Destroy
function destroyer(arr, ...valsToRemove) {
	return arr.filter((elem) => !valsToRemove.includes(elem));
}

// 19. Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
	let srcKeys = Object.keys(source);

	return collection.filter(function (obj) {
		return srcKeys.every(function (key) {
			return obj.hasOwnProperty(key) && obj[key] === source[key];
		});
	});
}

// 20. Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
	return str
		.split(/\s|_|(?=[A-Z])/)
		.join('-')
		.toLowerCase();
}

// 21. Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// If a word begins with a vowel, just add way at the end.
function translatePigLatin(str, charPos = 0) {
	return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
		? str + (charPos === 0 ? 'way' : 'ay')
		: charPos === str.length
		? str + 'ay'
		: translatePigLatin(str.slice(1) + str[0], charPos + 1);
}

// 22. Search and Replace
function myReplace(str, before, after) {
	// Find index where before is on string
	let index = str.indexOf(before);
	// Check to see if the first letter is uppercase or not
	if (str[index] === str[index].toUpperCase()) {
		// Change the after word to be capitalized before we use it.
		after = after.charAt(0).toUpperCase() + after.slice(1);
	} else {
		// Change the after word to be uncapitalized before we use it.
		after = after.charAt(0).toLowerCase() + after.slice(1);
	}
	// Now replace the original str with the edited one.
	str = str.replace(before, after);

	return str;
}

// 23. DNA Pairing
function pairElement(str) {
	//create object for pair lookup
	let pairs = {
		A: 'T',
		T: 'A',
		C: 'G',
		G: 'C',
	};
	//split string into array of characters
	let arr = str.split('');
	//map character to array of character and matching pair
	return arr.map((x) => [x, pairs[x]]);
}

// 24. Missing letters
function fearNotLetter(str) {
	for (let i = 0; i < str.length; i++) {
		/* code of current character */
		let code = str.charCodeAt(i);

		/* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
		if (code !== str.charCodeAt(0) + i) {
			/* if current character has escaped one character find previous char and return */
			return String.fromCharCode(code - 1);
		}
	}
	return undefined;
}

// 25. Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
function uniteUnique(arr) {
	let args = [...arguments];
	let result = [];
	for (let i = 0; i < args.length; i++) {
		for (let j = 0; j < args[i].length; j++) {
			if (!result.includes(args[i][j])) {
				result.push(args[i][j]);
			}
		}
	}
	return result;
}

// 26. Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
	// Use Object Lookup to declare as many HTML entities as needed.
	const htmlEntities = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&apos;',
	};
	//Use map function to return a filtered str with all entities changed automatically.
	return str
		.split('')
		.map((entity) => htmlEntities[entity] || entity)
		.join('');
}

// 27. Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
	let prevNumber = 0;
	let currNumber = 1;
	let result = 0;
	while (currNumber <= num) {
		if (currNumber % 2 !== 0) {
			result += currNumber;
		}
		currNumber += prevNumber;
		prevNumber = currNumber - prevNumber;
	}

	return result;
}

// 28. Sum All Primes
function sumPrimes(num) {
	// Check all numbers for primality
	let primes = [];
	for (let i = 2; i <= num; i++) {
		if (primes.every((prime) => i % prime !== 0)) primes.push(i);
	}
	return primes.reduce((sum, prime) => sum + prime, 0);
}

// 29. Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
function smallestCommons(arr) {
	// Setup
	const [min, max] = arr.sort((a, b) => a - b);
	const numberDivisors = max - min + 1;
	// Largest possible value for SCM
	let upperBound = 1;
	for (let i = min; i <= max; i++) {
		upperBound *= i;
	}
	// Test all multiples of 'max'
	for (let multiple = max; multiple <= upperBound; multiple += max) {
		// Check if every value in range divides 'multiple'
		let divisorCount = 0;
		for (let i = min; i <= max; i++) {
			// Count divisors
			if (multiple % i === 0) {
				divisorCount += 1;
			}
		}
		if (divisorCount === numberDivisors) {
			return multiple;
		}
	}
}

// 30. Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
	while (arr.length > 0 && !func(arr[0])) {
		arr.shift();
	}
	return arr;
}

// 31. Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
	return arr
		.toString()
		.replace(',,', ',') // "1,2,,3" => "1,2,3"
		.split(',') // ['1','2','3']
		.map(function (v) {
			if (v == '[object Object]') {
				// bring back empty objects
				return {};
			} else if (isNaN(v)) {
				// if not a number (string)
				return v;
			} else {
				return parseInt(v); // if a number in a string, convert it
			}
		});
}

// 32. Binary Agents
// Return an English translated sentence of the passed binary string.
function binaryAgent(str) {
	return String.fromCharCode(
		...str.split(' ').map(function (char) {
			return parseInt(char, 2);
		})
	);
}

// 33. Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
	// Is everyone being true?
	return collection.every((obj) => obj[pre]);
}

// 34. Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether() {
	const [first, second] = arguments;
	if (typeof first !== 'number') return undefined;
	if (second === undefined) return (second) => addTogether(first, second);
	if (typeof second !== 'number') return undefined;
	return first + second;
}

// 35. Make a Person
const Person = function (firstAndLast) {
	let fullName = firstAndLast;

	this.getFirstName = function () {
		return fullName.split(' ')[0];
	};

	this.getLastName = function () {
		return fullName.split(' ')[1];
	};

	this.getFullName = function () {
		return fullName;
	};

	this.setFirstName = function (name) {
		fullName = name + ' ' + fullName.split(' ')[1];
	};

	this.setLastName = function (name) {
		fullName = fullName.split(' ')[0] + ' ' + name;
	};

	this.setFullName = function (name) {
		fullName = name;
	};
};

// 36. Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
function orbitalPeriod(arr) {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;
	return arr.map(({ name, avgAlt }) => {
		const earth = earthRadius + avgAlt;
		const orbitalPeriod = Math.round(
			2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM)
		);
		return { name, orbitalPeriod };
	});
}

// 37. Palindrome Checker
function palindrome(str) {
	const reg = /[^A-Za-z0-9]/g;
	const lowerRegStr = str.toLowerCase().replace(reg, '');
	const reverseStr = lowerRegStr.split('').reverse('').join('');
	return reverseStr === lowerRegStr;
}

// 38. Roman Numeral Converter
function convertToRoman(num) {
	if (typeof num !== 'number') return false;

	let digits = String(num).split(''),
		key = [
			'',
			'C',
			'CC',
			'CCC',
			'CD',
			'D',
			'DC',
			'DCC',
			'DCCC',
			'CM',
			'',
			'X',
			'XX',
			'XXX',
			'XL',
			'L',
			'LX',
			'LXX',
			'LXXX',
			'XC',
			'',
			'I',
			'II',
			'III',
			'IV',
			'V',
			'VI',
			'VII',
			'VIII',
			'IX',
		],
		roman_num = '',
		i = 3;
	while (i--) roman_num = (key[+digits.pop() + i * 10] || '') + roman_num;
	return Array(+digits.join('') + 1).join('M') + roman_num;
}

// 39. Caesars Cipher
function rot13(str) {
	let decoded = [];
	{
		const alphabet = [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z',
		];
		const _str = str.split('');
		_str.map((l) => {
			if (alphabet.indexOf(l) === -1) {
				decoded.push(l);
			} else {
				const index =
					alphabet.indexOf(l) + 13 >= 26
						? alphabet.indexOf(l) + 13 - 26
						: alphabet.indexOf(l) + 13;
				decoded.push(alphabet[index]);
			}
		});
	}

	return decoded.join('');
}

// 40. Telephone Number Validator
function telephoneCheck(str) {
	const regExp = /^1?\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/gm;
	return regExp.test(str);
}

// 41. Bubble Sort
function bubbleSort(array) {
	// Make some sort of loop that keeps happening if there were any swaps
	// that happened this turn
	// reset swapHappened to false each time so we can detect if a swap
	// happened in this specific iteration.
	// Make another loop (inside the first one) to go through one
	// round of swapping from the start of the list to the end

	// Inside inner loop:
	// compare each pair of elements near each other
	// swap them if the bigger one was at a lower index.

	// Make sure to keep track of whether a swap happened!

	// After both loops have exited, remember to return the array
	let swapHappened = true;
	while (swapHappened) {
		swapHappened = false;
		for (let i = 0; i < array.length; i++) {
			if (array[i] > array[i + 1]) {
				let temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				swapHappened = true;
			}
		}
	}
	return array;
}

// 42. Insertion Sort
function insertionSort(array) {
	// Loop through each element

	// store the current item value so it can be placed correctly
	// in the sorted portion of the array

	// Loop backward through the sorted portion of the array
	// and scoot everything over until you find the right place to
	// insert the value you're working with

	// Copy each item to the next slot over, as long as the value is smaller
	// than the item in the sorted array we're looking at (items[j] > value)

	// We can now insert the item in its sorted location

	// Remember to return the list!
	for (let i = 1; i < array.length; i++) {
		let temp = array[i];
		let j = i - 1;
		while (j >= 0 && array[j] > temp) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = temp;
	}
	return array;
}

// 43. Merge Sort
// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
	var result = [];

	while (arr1.length && arr2.length) {
		if (arr1[0] <= arr2[0]) {
			result.push(arr1.shift());
		} else {
			result.push(arr2.shift());
		}
	}

	return result.concat(arr1, arr2);
}
function mergeSort(arr) {
	const half = arr.length / 2;

	// the base case is array length <=1
	if (arr.length <= 1) {
		return arr;
	}

	const left = arr.splice(0, half); // the first half of the array
	const right = arr;
	return merge(mergeSort(left), mergeSort(right));
}

// 44. Quick Sort
function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const pivot = arr.pop();
	const left = arr.filter((num) => num <= pivot);
	const right = arr.filter((num) => num > pivot);
	return quickSort(left).concat(pivot, quickSort(right));
}

// 45. Bucket Sort
function bucketSort(arr) {
	if (arr.length === 0) {
		return arr;
	}
	let i,
		minValue = arr[0],
		maxValue = arr[0],
		bucketSize = 5;
	arr.forEach(function (currentVal) {
		if (currentVal < minValue) {
			minValue = currentVal;
		} else if (currentVal > maxValue) {
			maxValue = currentVal;
		}
	});
	let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
	let allBuckets = new Array(bucketCount);
	for (i = 0; i < allBuckets.length; i++) {
		allBuckets[i] = [];
	}
	arr.forEach(function (currentVal) {
		allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(
			currentVal
		);
	});
	arr.length = 0;
	allBuckets.forEach(function (bucket) {
		insertionSort(bucket);
		bucket.forEach(function (element) {
			arr.push(element);
		});
	});
	return arr;
}

// 46. Binary Search
function binarySearch(arr, element) {
	//  search through the array non-recursively for the element
	//  if the element is not found, return -1
	//  if the element is found, return the index at which it was found
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let middle = Math.floor((start + end) / 2);

		if (arr[middle] === element) {
			// found the key
			return middle;
		} else if (arr[middle] < element) {
			// continue searching to the right
			start = middle + 1;
		} else {
			// search searching to the left
			end = middle - 1;
		}
	}
	// key wasn't found
	return -1;
}

function recursiveBinarySearch(arr, element, min, max) {
	//  search through the array recursively for the element
	//  you may need to add some default parameters to this function!
	//  if the element is not found, return -1
	//  if the element is found, return the index at which it was found
	var tArray = arr.slice();
	if (min === undefined) min = 0;
	if (max === undefined) max = arr.length - 1;

	var guess = Math.floor((max - min) / 2 + min);
	if (max <= min && tArray[guess] !== element) return -1;
	else if (tArray[guess] === element) return guess;
	else if (tArray[guess] < element)
		return recursiveBinarySearch(tArray, element, guess + 1, max);
	else return recursiveBinarySearch(tArray, element, min, guess - 1);
}

// 47. Graph
class Graph {
	constructor() {
		// Create a property called `nodes` and set it equal to an empty object.
		// This will be our adjacency list.
		this.nodes = {};
	}

	addNode(node) {
		// If the node value passed in does not already exist in our adjacency
		// list, then add it as a key and set it equal to an empty array.
		if (!this.nodes[node]) {
			this.nodes[node] = [];
		}
	}

	addEdge(node, edge) {
		// If the node exists in our adjacency list, then push the edge into the
		// array of edges for that node.
		if (this.nodes[node]) {
			this.nodes[node].push(edge);
		}
	}
}
