//logic.js

d3.json('/api/data').then(data => {
    console.log(data);



    var data = [
        {
          x: Object.keys(data),
          y: Object.values(data),
          type: 'bar'
        }
      ];
      
      Plotly.newPlot('bar', data);
})