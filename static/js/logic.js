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
      title: 'Top 10 goal scorers'
    }
  Plotly.newPlot('goalsDiv', data);
});
}
// Call the updateChart function initially with the default selected year
updateChart();