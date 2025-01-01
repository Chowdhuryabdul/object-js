const mobile = { /* this system of object declaring is called, object literal */
    brand : 'samsumg',
    price : 23000,
    color : 'black',
    camera : '15MGH',
    isNew : true
}

/* for of -- > it is used in case of Array
for in --> it is used in case of Object */

for(const prop in mobile){
    console.log(prop) /* in thi way we will only get the keys of the Object, without value of the keys */
    console.log(mobile[prop]) /* in thi way we will only get the value of the keys */
}

const keys = Object.keys(mobile)
console.log(keys) /* it will give all the keys in a array format. if want to get it throgh loop. i can run a loop through keys */

for(const key of keys){
    console.log(key, ':', mobile[key]) /* in this way i can get the keys with values */
}