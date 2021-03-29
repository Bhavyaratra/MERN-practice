// var tahoe = {
//     resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
//     print: function(delay=1000) {
//     setTimeout(()=> {
//     console.log(this.resorts)
//     }, delay)
//     }
//     }
    
//     tahoe.print()

// var lord = ({resorts})=>{ // destructuring
//     console.log(resorts);

// }

// var tahoe = {
//         resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
//         print: function(delay=1000) {
//         setTimeout(()=> {
//         console.log(this.resorts.join(","))
//         }, delay)
//     }
// }
var nam="name"
var sound= " aaaaa"
const skier = {
    nam ,
    sound,
    powderYell() {
    let yell = this.sound.toUpperCase()
    console.log(`${yell} ${yell} ${yell}!!!`)
    },
    speed(mph) {
        //console.log(this.speed)
    //this.speed = mph
    console.log('speed:', mph)
    }
    }
    skier.speed(10);



// tahoe.print()
// lord(tahoe)

var peaks = ["Tallac", "Ralston", "Rose"]

var [ls] = [...peaks].reverse()
console.log(...peaks)
console.log(ls);

var cls = function(a,b){
    this.a=a;
    this.b=b;

}

 cls.prototype.sum=function(){
    console.log(this.b + " "+ this.a)
 }

var ob= new cls(1,2);
var ob1= new cls(3,4);
ob.sum()
ob1.sum()

//////////////
// sending function as an argument 

const inside = logger =>
 logger("called")

 inside(message => console.log(message))


 const createScream = logger => message =>
 logger(message.toUpperCase() + "!!!")

 const scream = createScream(message => console.log(message))
scream('functions can be returned from other functions')


const filterW=(list) =>(
     list.filter(element => element[0]!=='R')
    )
   //predicate is a function that always returns a Boolean value


console.log(filterW(peaks).join("# "))

const wSchools = peaks.filter(school => school[0] === "R")
console.log( wSchools )
///////////////////////////////
const schools = [
    "Yorktown",
    "Washington & Lee",
    "Wakefield"
    ]


const higschools= schools.map(school=>({name:school}))
console.log(higschools)


///////////////////
const editName = (oldName, name, arr) =>
    arr.map(item => {
    if (item.name === oldName) {
        return {
         ...item,
            name
        }
        } else {
            return item
        }
    })

let schoolss = [
    { name: "Yorktown"},
    { name: "Stratford" },
    { name: "Washington & Lee"},
    { name: "Wakefield"}
    ]
let updatedSchools = editName("Stratford", "HB Woodlawn", schoolss)
console.log( updatedSchools[1] ) // { name: "HB Woodlawn" }
console.log( schoolss[1] ) // { name: "Stratford" },

    