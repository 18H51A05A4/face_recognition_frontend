// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Present', 10],
  ['Absent', 3],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Last Week', 'width':425, 'height':275};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('weekly-chart'));
  chart.draw(data, options);
}