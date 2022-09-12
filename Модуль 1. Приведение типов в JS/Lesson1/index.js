let age = 18
console.log(Number(age), Boolean(age), String(age))

// 1. выврдится: NaN true 'google.com'
let website = 'google.com'
console.log(Number(website), Boolean(website), String(website))

//2. выврдится: NaN true 'blue'
let color = 'blue'
console.log(Number(color), Boolean(color), String(color))

//3. выврдится: 50 true '50'
let bodyWeight = 50
console.log(Number(bodyWeight), Boolean(bodyWeight), String(bodyWeight))

//4. выврдится: 1.4 true '1.4'
let water = 1.4
console.log(Number(water), Boolean(water), String(water))

//5. выврдится: 1 true 'true'
let somethingNew = true
console.log(Number(somethingNew), Boolean(somethingNew), String(somethingNew))

//6. выврдится: 1 true 'true'
let isStudentMessage = true
console.log(Number(isStudentMessage), Boolean(isStudentMessage), String(isStudentMessage))

//7. выврдится: NaN true 'Mercedes Benz, Tesla'
let twoCarsModels = 'Mercedes Benz, ' + 'Tesla'
console.log(Number(twoCarsModels), Boolean(twoCarsModels), String(twoCarsModels))

//8. выврдится: 400 true '400'
let totalCarsModels = 400
console.log(Number(totalCarsModels), Boolean(totalCarsModels), String(totalCarsModels))
