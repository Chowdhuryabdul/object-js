const person = {
    name : 'rakib',
    age : 35,
    profession : 'teacher',
    addresee : 'dhaka',
    isStudent : true,
    salary : 25000,
    'fav place' : ['dhaka', 'khulna', 'barishal']  /* - in such case i have to use brcket notation to get the value */
}

/* to change or update value  */

person.salary = 30000 /* - with dot notation */
person ['age'] = 45  /* with break notation */
person ['fav place'] = 'comilla' /* - must be with the bracket notation */

const propName = 'profession' /* it is also possible to keep the property name in the varibale and udate it  */
person[propName] = 'devops'
console.log(person)