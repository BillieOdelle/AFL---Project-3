//logic.js
// Function to update the chart based on the selected year
function  updateChart() {
  var yearSelect = document.getElementById('year-select')
  var selectedYear = yearSelect.value || 2021
  // Make the API call with the selected year
  d3.json('/api/report/home-and-away?year=' + selectedYear).then(function(apiData) {
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
});

d3.json('/api/report/goals-score?year=' + selectedYear).then(function(apiData) {
    var data = [
      {
        x: apiData.map(({name}) => name),
        y: apiData.map(({goals}) => goals),
        type: 'bar'
      }
    ];
    var layout = {
        title: 'Top 10 goal scorers',
        xaxis: {title: 'Player Names'},
        yaxis: {title: 'Number of Goals Scored'},
        height: 400,
        width: 700,
    };
    Plotly.newPlot('goalsDiv', data, layout);
  });

  d3.json('/api/report/rainfall')
  .then(function(data) {
    // Extract the necessary data from the JSON response
    var years = data.map(function(d) { return d.year; });
    var scoresWithRain = data.map(function(d) { return d.score_with_rain; });
    var scoresWithoutRain = data.map(function(d) { return d.score_without_rain; });
    // Update the line chart with the retrieved data
    updateLineChart(years, scoresWithRain, scoresWithoutRain);
  })
  .catch(function(error) {
    console.log('Error:', error);
  });
// Function to update the line chart with the data
function updateLineChart(years, scoresWithRain, scoresWithoutRain) {
  // Code to update the line chart using D3.js
  var trace1 = {
    x: years,
    y: scoresWithRain,
    type: 'scatter', 
    name: 'With Rain'
   };
  var trace2 = {
    x: years,
    y: scoresWithoutRain,
    type: 'scatter',
    name: 'Without Rain'
  };
  var data = [trace1, trace2];

  var layout = {
    title: 'Effect of Rainfall on scores',
    xaxis: {title: 'Years'},
    yaxis: {title: 'Combined Score'},
  };
  Plotly.newPlot('lineDiv', data, layout);
}

// Call the updateChart function initially with the default selected year
}

updateChart();