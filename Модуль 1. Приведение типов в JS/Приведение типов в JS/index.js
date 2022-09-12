//JS имеет динамичесскую типитизацию
//  это значет что в последующем коде мы можем изменить тип данных этой переменной
// сейчас она является стракой, в будующем если мы захотим мы можем приобразовать эту строчку в число либо в boolean значение

let animal = 'Dog'

// Виды преобразования типов существует всего ТРИ: то есть любая переменная может быть приобразованна к одному из ТРЁХ типу данных
// 1. Приобразование к СТРОКЕ
// 2. Приобразование к ЧИСЛУ
// 3. Приобразование к Boolean

// НЕЛЬЗЯ например приобразовать СТРАКУ в тип данных SYMBOL,
// либо СТРАКУ в тип данных OBJECT

// 1. Приобразование к СТРОКЕ
const age = 20
console.log('number age:', typeof age) //number
console.log('string age', String(age)) //20

// данный тип называется ЯВНЫМ ПРИОБРАЗОВАНИЕМ (всегда только используем ЯВНОЕ ПРИОБРАЗОВАНИЕ),
// потому что мы явно указываем что хотим перевести значение AGE к СТРОКЕ
console.log('string age', typeof String(age)) //string (данный тип называется ЯВНЫМ ПРИОБРАЗОВАНИЕМ)

// НЕЯВНОЕ ПРИОБРАЗОВАНИЕ,
// потому что не понятно что значение "updateAge" в будующем станет строкой
const updateAge = '1' + 20
console.log('updateAge', typeof updateAge) // string

// 2. Приобразование к ЧИСЛУ
const experianceInJavaScript = '5'
console.log('string experianceInJavaScript', typeof experianceInJavaScript) //string
// ЯВНОЕ ПРИОБРАЗОВАНИЕ в "ЧИСЛО"
console.log('number experianceInJavaScript', Number(experianceInJavaScript)) // 5,
console.log('number experianceInJavaScript', typeof Number(experianceInJavaScript)) // number

// НЕЯВНОЕ ПРИОБРАЗОВАНИЕ (Чтобы преобразовать в тип Number неявно, достаточно перед значением написать +)
console.log('experianceInJavaScript', typeof +experianceInJavaScript) // number

console.log('Hello World', Number('Hello World')) //NaN (Not a Number)

// 3. Приобразование к Boolean
console.log('Hello', Boolean('Hello')) //true
console.log('5', Boolean(5)) //true

// Вообще почти все значения которые мы передаем к Boolean приобразуется к TRUE
// но есть некоторые из них которые переводяться к FALSE
// null, underfined, NaN, '', 0, -0
console.log('null', Boolean(null)) //false
console.log('underfined', Boolean(undefined)) //false
console.log('NaN', Boolean(NaN)) //false
console.log('', Boolean('')) //false
console.log(0, Boolean(0)) //false

console.log('', Boolean('0')) //true,  потому что у строски у которой  находится "0", длинна раняется "1".
