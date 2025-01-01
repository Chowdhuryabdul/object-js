/* this system of object declaring is called, object literal */

const mobile = { 
    brand : 'samsumg',
    price : 23000,
    color : 'black',
    camera : '15MGH',
    isNew : true
}
/* Another way */

const pen = {brand: 'econo', price: 10, color: 'black'}

/* Another type */

const pencil = new Object ()
console.log(pencil);

/* another type */

const rubber = Object.create({})
console.log(rubber)