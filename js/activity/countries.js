var xValues = ["United Kingdom", "Germany", "France", "Spain", "USA", "Other"];
var yValues = [45, 30, 10, 7.5, 5, 2.5];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#218489"
];

new Chart($("#chart_countries"), {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: false,
    }
  }
});