const aFunction = async () => {
 return 'test'
}

console.log("Before")

/*aFunction().then(result => {
 console.log(result)
})*/

console.log(await aFunction());

console.log("After")