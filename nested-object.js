const college = {
    name : 'vnc',
    class : ['11', '12'],
    events : ['science fair', 'bijoy dibosh', '21 feb'],
    unique :{
        color : 'blue',
        result : {
            marit : 'top'
        }
    }
}

console.log(college.unique)
console.log(college.unique.color)
console.log(college.unique.result.marit)
college.unique.result.marit = 'top top top most'
console.log(college.events[1]); /* here events is array */
college.events[1] = 'fairy day' /* set the new value */
delete college.class /* if i want to delet the class then i just need to write so */
console.log(college)
