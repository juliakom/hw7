// 1 =================================================

const frameworks = ['AngularJS' , 'jQuery'];
console.log(frameworks);

frameworks.unshift('Backbone.js');
console.log(frameworks);

frameworks.push('ReactJS', 'Vue.js');
console.log(frameworks);

frameworks.splice(1, 0, 'CommonJS');
console.log(frameworks);

let frameworksNew = frameworks.splice(frameworks.indexOf('jQuery'), 1);
console.log(`${frameworksNew} - Это здесь лишнее`);


//2------------------------------------------------

function removeNegativeElements(arguments) {
  return arguments.filter((el) => el >= 0 || typeof(el) === 'string');
}

let result1 = removeNegativeElements([-9, 2, 3, 0, -28, 'value',]); // [2, 3, 0, 'value'];
console.log(result1);
let result2 = removeNegativeElements([-9, -21, -12]); // []
console.log(result2);
let result3 = removeNegativeElements(['-102', 102]); // ['-102', 102]
console.log(result3);

//3---------------------------------------------------------------

function getStringElements(name) {
  return name.filter(el => typeof(el) === 'string');
}

let arrThree = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false,]
let result = getStringElements(arrThree); 
console.log(getStringElements(result));


//4---------------------------------------------------------

const arrFour = [...Array(10)].map(() =>
  Math.floor(Math.random() * 10));
console.log(arrFour);

function sumArr(arr) {
	let sum = arr.shift();
	if (arr.length !== 0) {
		sum += sumArr(arr);
	}
	return sum;
}

console.log(sumArr(arrFour));

//5-------------------------------------------------

const arrFive = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];

let sumTwo = 0;
function sumArrFive(arr, index = 0,) {
  if (index < arr.length) {
    if (arr[index] == 10) {
      sumTwo += arr[index];
    }
    sumArrFive(arr, ++index);
  }
  return sumTwo;
}

console.log(sumArrFive(arrFive));

//6------------------------

const arrSix = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];

let arrNew = [];

function getNewArr(arr, index = 0,) {
  if (index < arr.length) {
    if (arr[index] > 5) {
      arrNew.push(arr[index]);
    }
    getNewArr(arr, ++index);
  }
  return arrNew;
}

console.log(getNewArr(arrSix));