var data = {
    "cars": {
        "Nissan": [
            { "model": "Sentra", "doors": 4 },
            { "model": "Maxima", "doors": 4 },
            { "model": "Skyline", "doors": 2 }
        ],
        "Ford": [
            { "model": "Taurus", "doors": 4 },
            { "model": "Escort", "doors": 4 }
        ]
    }
}

console.log("Car Details");

Object.keys(data["cars"]).map((k)=>{
 console.log(k);
 data["cars"][k].map((v,i)=>{
  Object.keys(v).map((k1)=>{
   console.log(k1+"---->"+v[k1]);	
  }); 
 });	
 console.log();
});











