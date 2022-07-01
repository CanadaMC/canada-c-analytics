var labels = [
    '29/06/2022',
    '01/07/2022',
    '02/07/2022'
  ];

  var data = {
    labels: labels,
    datasets: [{
      label: 'Connections per second',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
      tension: 0.5,
    }]
  };

  var config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        pan: {
            enabled: true,
            mode: "xy"
        },
        zoom: {
            enabled: true,
            mode: "xy"
        },
        legend: {display: false},
    }
  };
new Chart($("#chart_cps"), config);