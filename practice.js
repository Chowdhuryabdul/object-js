const colo3rs = {
    red : '#ff000',
    green : '#00ff00',
    blue : '#0000ff',
    'golden rod' : '#daa520'
}


colo3rs['golden rod'] = 'white'
// console.log(colo3rs['golden rod'])
// console.log(colo3rs)

const car = {
    make : 'toyota',
    model : 'corolla',
    year : 2020
}

car['passenger capacity'] = 5 /* to add new property name with the value object['property'] = value */
// console.log(car)

const student = {
    name : 'Hamim sakap',
    id : 6565,
    physics : {
        subject : 'HSC physics',
        author : 'shajahan tapan',
        marks : 30
    }
}

// console.log(student.physics.marks)
// console.log(student.physics['marks'])

let student1 = {
    name : 'arain',
    age : 32,
    city : 'shaka',
    isStudent : true
}


const propnumr = Object.keys(student1).length
// console.log(propnumr)

let myObject = {
    name : 'john doe',
    age : 25,
    city : 'example city',
    isStudent : true
}

for(const key in myObject){
    console.log('key:', key, '|', 'type:', typeof(myObject[key]))
}
