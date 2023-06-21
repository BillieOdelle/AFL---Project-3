//logic.js

d3.json('http://localhost:5000/api/stats').then(function(data)  {
    console.log(data);
})

d3.json('http://localhost:5000/api/games').then(function(data)  {
    console.log(data);
})

d3.json('http://localhost:5000/api/players').then(function(data)  {
    console.log(data);
})


