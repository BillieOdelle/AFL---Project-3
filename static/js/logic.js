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

d3.json('/api/report/home-and-away?year=2021').then(function(apiData){
    var data = [{
        values: [apiData.home, apiData.away],
        labels: ['Home Win', 'Away Win'],
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };
      
      Plotly.newPlot('myDiv', data, layout);
})

// var data = [{
//     values: [19, 26, 55],
//     labels: ['Residential', 'Non-Residential', 'Utility'],
//     type: 'pie'
//   }];
  
//   var layout = {
//     height: 400,
//     width: 500
//   };
  
//   Plotly.newPlot('myDiv', data, layout);
  
//   //bar chart
//   const xValues = [100,200,300,400,500,600,700,800,900,1000];
  
//   new Chart("myChart", {
//     type: "line",
//     data: {
//       labels: xValues,
//       datasets: [{ 
//         data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
//         borderColor: "red",
//         fill: false
//       }, { 
//         data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
//         borderColor: "green",
//         fill: false
//       }, { 
//         data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
//         borderColor: "blue",
//         fill: false
//       }]
//     },
//     options: {
//       legend: {display: false}
//     }
//   });