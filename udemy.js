/*const objectV = {
    a: 10,
    b: true
}

const copyOfV = objectV;

console.log(copyOfV.b);

copyOfV.w = 196;

console.log(objectV.w)*/

/*const myCity = {
    city: "Montana",
}

myCity.country = 'USA'

console.log(myCity)

myCity.population = 2000000

console.log(myCity)

myCity.population = 1000000

console.log(myCity)

console.log(myCity.population)

delete myCity.population

console.log(myCity)*/

/*const post = {
    title: 'my post',
    qty: 5
}

JSON.stringify(post)*/

/*function myFn(a, b) {
    let c
    a = a + 3
    c = a + b
    return c
}

console.log(myFn(10, 3))
console.dir(myFn)
let result = myFn(11, 5 )
console.log(result)*/

/*const carOne = {
    color: 'red',
    brand: 'bmw',
    year: 2015
}

function increasCarAge(car) {
    const updatedAge = Object.assign({}, car)
    updatedAge.year += 1
    return updatedAge
}

const updatedCarAge = increasCarAge(carOne)
console.log(carOne.year)
console.log(updatedCarAge.year)*/

/*function printMyName() {
    console.log('Xlib')
}

console.log('Start')

setTimeout(printMyName, 3000)*/

/*const a = 5;

function myFn() {
    function innerFn() {
        console.log(a)
    }
    innerFn()
}

myFn()*/

/*let a
let b

function myFn() {
    let b
    a = true
    b = 10
    console.log(a)
}

myFn() //true

console.log(a) //true
console.log(b) //undefined*/

/*let a = 5
let b = "5"
let c = a + b
let d = b * 2

console.log(typeof a)
console.log(c)
console.log(d)
console.log(typeof d)*/

/*let a 

console.log(!!a)*/

/*let a = true

let b = 0

let c = a && b

console.log(c)*/

/*
const button = {
 width: 200,
 text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(redButton)

console.table(button)

const borderButton = {
    border: 2
}

const newButton = {
    ...button,
    ...redButton,
    ...borderButton
}

console.table(newButton)*/

/*const myName = 'My name is Kidnrat'
const myCity = 'and I live in New York'

let str = myName + " " + myCity
let newStr = `${myName} + '' + ${myCity}`


console.log(str)*/

/*function multByFactor(value, multiplier = 2) {
    return value * multiplier
}

console.log(multByFactor(10, 2))
console.log(multByFactor(5))

const qtyFun =  (qty, sets = 2)=> {
    return qty * sets
}

console.log(qtyFun(10, 2))
console.log(qtyFun(5))*/

/*post = {
    text: "Some Letters"
}

//явный возврат
const newPost = (post, addedAt = Date()) => {
    return ({
    ...post,
    addedAt,
    })
} */

//неявный возврат
/*const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
    })

const firstPost = {
    id: 1,
    author: 'Some Name'
}

console.table(newPost(firstPost)) */

/*const fnWithError = () => {
    throw new Error ('Some error') //uncaught error
}

fnWithError()

console.log('Continue...')

const newFnWithError = () => {
    throw new Error('Some error')
}

try {
    newFnWithError()
    } catch (error) {
        console.error(error)
        console.log(error.message)
    }
    
*/

/*function myFn(a) {
    return console.log(a);
}

const b = true;
let c = 10;

//myFn(2 + 3)
//myFn(b)
//myFn(c = c + 1)
// myFn(c = c + 1;)
//myFn(let d)
//myFn(2 + 3;)
//myFn(let b = 3)*/


/*const myArray = [1, 2, 3]
console.log(myArray)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)

console.log(myArray[1])

// myArray[2] = 'text'

// console.log(myArray)

// myArray[3] = false

// console.log(myArray)

myArray.push('new')

console.log(myArray)

myArray.pop()

const removedElement = myArray.pop()

console.log(myArray)

console.log(removedElement)

myArray.unshift('abr')

console.log(myArray)

myArray.shift()
const removedElement2 = myArray.shift()

console.log(myArray)*/

/*const myArray = [1, 2, 3]
console.log(myArray)

myArray.forEach(el => console.log(el * 2))

console.log(myArray)

const newArray = myArray.map(el => el * 3) //неявний return можливо тільки в стрілочних функціях
//const newArray = myArray.map((el) => {el * 3}) //явно але no return
//const newArray = myArray.map((el) => {return el * 3}) //явний return
//const newArray = myArray.map(function (el) {return el * 3}) //анонімний функціональний вираз

console.log(newArray)
console.log(myArray)*/

/*const userProfile = {
    userName: 'Bodyk',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const { userName, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile

console.log(userName)
console.log(commentsQty) //деструктуризація об'єкту */

/*const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits

console.log(fruitOne)
console.log(fruitTwo) //деструктуризація масивів*/

/*const userProfile = {
    userName: 'Bodyk',
    commentsQty: 23,
    hasSignedAgreement: false, 
}

const userInfo = ({ userName, commentsQty }) => {
    if(!commentsQty) {
        return `User ${userName} has no comments`
    }

    return `User ${userName} has ${commentsQty} comments`
}

console.log(userInfo(userProfile)) //деструктуризація параметрів функції*/

/*const age = 25

if (age > 18) {
    console.log('Is adult')
} else if (age >= 12) {
    console.log('Is teenager')
} else {
    console.log('Is child')
}

//

if (age > 18) {
    console.log('Is adult')
} 

if (age >= 12) {
    console.log('Is teenager')
}
if (age < 12) {
    console.log('Is child')
}

//

if (age > 18) {
    console.log('Is adult')
} 

if (age >= 12 && age <=18) {
    console.log('Is teenager')
}
if (age < 12) {
    console.log('Is child')
}*/

/*const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }

    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }

    return a + b
} 

console.log(sumPositiveNumbers(-2, 5)) */

// const month = 2

// switch (month) {
//     case 12:
//         console.log('Декабрь')
//         break
//     case 1:
//         console.log('Январь')
//         break
//     case 2:
//         console.log('Февраль')
//         break
//     default:
//         console.log('Это не зимний месяц')
// }

let i = 10;

do {
    console.log(i);
    i++;
} while (i < 5);

const arrObj = {
    a: 1,
    '2': 'b',
    3: 6,

};

//console.log(arrObj ['a']);

console.log(typeof i);


