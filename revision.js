const house = {
    where : 'dhaka',
    'how old' : '30years',
    color : ['red', 'green', 'black'],
    direction : {
        south : 'blockA',
        north : {
        corener : 'tree'    
        }
    }
}

// console.log(house.where)
// console.log(house['where'])
// const variable1 = house.color;
// const variable1 = house['how old']

// house.color[2] = 'yellow'
// console.log(Object.keys(house))
// console.log(Object.values(house))

for(const prop in house){
    // console.log(prop)
    // console.log(house[prop])
}

const keys = (Object.keys(house))
console.log(keys)
for(const key of keys){
    console.log(key, ':', house[key])
}

