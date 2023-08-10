//Async

const aFunction = () => {
 return Promise.resolve('test')
}

console.log("Before")

aFunction().then(result => {
    console.log(result)
})

console.log("After")
