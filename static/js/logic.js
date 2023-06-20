//logic.js

d3.json('http://localhost:5000/api/stats').then(function(data)  {
    console.log(data);
})

d3.json('http://localhost:5000/api/games').then(function(data)  {
    console.log(data);
})
//     var games = [
//         {
//           x: Object.keys(games),
//           y: Object.values(games),
//           type: 'bar'
//         }
//       ];
      
//       Plotly.newPlot('bar', games);
// })
// d3.json('api/stats').then(function(data) {
//   console.log(data);
// });

// function AFLdata() {
//   const url = 'http://localhost:5000/api/stats'
//   fetch(url)
//   .then(response => response.json())  
//   .then(json => {
//       console.log(json);
//       document.getElementById("demo").innerHTML = JSON.stringify(json)
//   })
// }

// fetch('/api/stats', {
//   method: 'GET', // or 'POST', 'PUT', etc. depending on your API
//   headers: {
//     'Content-Type': 'application/json' // set the appropriate content type
//   },
// })
//   .then(response => response.json())
//   .then(data => {
//     // Process the response data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });

//   fetch('/api/games', {
//     method: 'GET', // or 'POST', 'PUT', etc. depending on your API
//     headers: {
//       'Content-Type': 'application/json' // set the appropriate content type
//     },
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Process the response data
//       console.log(data);
//     })
//     .catch(error => {
//       // Handle any errors
//       console.error(error);
//     });

