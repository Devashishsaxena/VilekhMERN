function checkStringCase(s) {
    return new Promise((resolve, reject) => {
        if (s==s.toUpperCase())
            resolve(1);
        else if (s==s.toLowerCase())
            resolve(2);
        else
            reject(0);
    });
}

console.log("Before");

var s = "_";
checkStringCase(s).then((response) => {
    if (response == 1)
        console.log("Uppercase");
    else
        console.log("Lowercase");
}).catch((response) => {
    console.log("Invalid character input");
});

console.log("After");
