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

d3.json('/api/report/rainfall')+ selectedYear).then(function(apiData) {

   // Sample data
const data = [
  { year: 2019, score_with_rain: 150, score_without_rain: 200 },
  { year: 2020, score_with_rain: 180, score_without_rain: 250 },
  { year: 2021, score_with_rain: 220, score_without_rain: 180 }
];
// Set up the SVG dimensions and margins
const margin = { top: 20, right: 30, bottom: 30, left: 50 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;
// Create the SVG container
const svg = d3
  .select("#chart-container")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
// Extract the years and scores from the data
const years = data.map(d => d.year);
const scoresWithRain = data.map(d => d.score_with_rain);
const scoresWithoutRain = data.map(d => d.score_without_rain);
// Create scales for the x and y axes
const xScale = d3.scaleLinear().domain(d3.extent(years)).range([0, width]);
const yScale = d3.scaleLinear().domain([0, d3.max(scoresWithRain.concat(scoresWithoutRain))]).range([height, 0]);
// Create a line generator for the score with rain
const lineWithRain = d3.line()
  .x((d, i) => xScale(years[i]))
  .y(d => yScale(d))
  .curve(d3.curveMonotoneX);
// Create a line generator for the score without rain
const lineWithoutRain = d3.line()
  .x((d, i) => xScale(years[i]))
  .y(d => yScale(d))
  .curve(d3.curveMonotoneX);
// Append the line for the score with rain
svg.append("path")
  .datum(scoresWithRain)
  .attr("class", "line")
  .attr("d", lineWithRain)
  .style("fill", "none")
  .style("stroke", "blue");
// Append the line for the score without rain
svg.append("path")
  .datum(scoresWithoutRain)
  .attr("class", "line")
  .attr("d", lineWithoutRain)
  .style("fill", "none")
  .style("stroke", "green");
// Append the x-axis
svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));
// Append the y-axis
svg.append("g")
  .call(d3.axisLeft(yScale));
// Add labels and title
svg.append("text")
  .attr("class", "label")
  .attr("x", width / 2)
  .attr("y", height + margin.bottom)
  .attr("text-anchor", "middle")
  .text("Year");
svg.append("text")
  .attr("class", "label")
  .attr("transform", "rotate(-90)")
  .attr("x", -height / 2)
  .attr("y", -margin.left)
  .attr("dy", "1em")
  .attr("text-anchor", "middle")
  .text("Score");
svg.append("text")
  .attr("class", "title")
  .attr("x", width / 2)
  .attr("y", -margin.top / 2)
  .attr("text-anchor", "middle")
  .text("Scores Over the Years");
});
// Call the updateChart function initially with the default selected year
updateChart();}