var doSomethingAsync=()=>{
  return new Promise((resolve) => {
    setTimeout(()=> { 
	resolve("Its working");
    },3000)
    // resolve("Its working");
  })
}

console.log("Before")

doSomethingAsync().then(result => {
  console.log(result)  
})

console.log("After")
