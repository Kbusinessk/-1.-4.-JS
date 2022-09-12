// Lesson 3

// 1
console.log(String(alert)) //function alert() { [native code] }
console.log(Number(alert)) //NaN
console.log(Boolean(alert)) //true

// 2
let studentName = { name: 'Maxim' }
console.log(String(studentName)) //[object Object]
console.log(Number(studentName)) //NaN
console.log(Boolean(studentName)) //true
console.log(String(alert[studentName])) // undefined
console.log(Number(alert[studentName])) //NaN
console.log(Boolean(alert[studentName])) //false
//exempel
// let user = {
//   name: 'Maxim',
// }
// let x = Symbol('id')
// user[x] = 1
// alert(user[x])

// 3
let myId = Symbol('key')
console.log(String(myId)) //Symbol(key)
// console.log(Number(myId)) // Cannot convert a Symbol value to a number at Number
console.log(Boolean(myId)) //true
console.log(String(alert[myId])) //undefined
console.log(Number(alert[myId])) //NaN
console.log(Boolean(alert[myId])) //false
// alert(myId.toString())

//4
let num = Number
console.log(String(num)) //function Number() { [native code] }
console.log(Number(num)) //NaN
console.log(Boolean(num)) //true
console.log(String(alert[Number])) //undefined
console.log(Number(alert[Number])) //NaN
console.log(Boolean(alert[Number])) //false

// 5
let singleQuotes = ''
console.log(String(singleQuotes)) //пустая строка
console.log(Number(singleQuotes)) //0
console.log(Boolean(singleQuotes)) //false
console.log(String(alert[singleQuotes])) //undefined
console.log(Number(alert[singleQuotes])) //NaN
console.log(Boolean(alert[singleQuotes])) //false

// 6
let myNumber = 0
console.log(String(myNumber)) //0
console.log(Number(myNumber)) //0
console.log(Boolean(myNumber)) //false
console.log(String(alert[myNumber])) //undefine
console.log(Number(alert[myNumber])) //NaN
console.log(Boolean(alert[myNumber])) //false

// 7
let negativeNumber = -10
console.log(String(negativeNumber)) //-10
console.log(Number(negativeNumber)) //-10
console.log(Boolean(negativeNumber)) //true
console.log(String(alert[negativeNumber])) //undefine
console.log(Number(alert[negativeNumber])) //NaN
console.log(Boolean(alert[negativeNumber])) //false

// 8
let stringNumber = '-105'
console.log(String(stringNumber)) //-105
console.log(Number(stringNumber)) //-105
console.log(Boolean(stringNumber)) //true
console.log(String(alert[stringNumber])) //undefine
console.log(Number(alert[stringNumber])) //NaN
console.log(Boolean(alert[stringNumber])) //false
