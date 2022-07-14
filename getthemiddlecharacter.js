// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s){
    let arr = new Array(...s)
    if(arr.length % 2 == 0){
        // console.log('even')
        // console.log(arr.length/2)
        // console.log(arr.length/2-1)
        console.log(`The middle character/s in ${s}:`)
        console.log(s[arr.length/2-1].concat(s[arr.length/2]))
    } else {
        // console.log('odd')
        // console.log(Math.floor(arr.length/2))
        console.log(`The middle character/s in ${s}:`)
        console.log(s[Math.floor(arr.length/2)])
    }
}
getMiddle('test')
console.log('========')
getMiddle('testing')
console.log('========')
getMiddle('A')
console.log('========')
getMiddle('middle')