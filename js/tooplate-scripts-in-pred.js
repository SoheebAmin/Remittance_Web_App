const width_threshold = 480;

function drawLineChart() {
  if ($("#lineChart").length) {
    ctxLine = document.getElementById("lineChart").getContext("2d");
    optionsLine = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "USD"
            }
          }
        ]
      }
    };

    // Set aspect ratio based on window width
    optionsLine.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    configLine = {
      type: "line",
      data: {
        labels: [
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        datasets: [
          {
            label: graph_data[0][6],
            data: graph_data[0].slice(0,6),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            lineTension: 0.1
          },
          {
            label: graph_data[1][6],
            data: graph_data[1].slice(0,6),
            fill: false,
            borderColor: "rgba(255,99,132,1)",
            lineTension: 0.1
          },
          {
            label: graph_data[2][6],
            data: graph_data[2].slice(0,6),
            fill: false,
            borderColor: "rgba(153, 102, 255, 1)",
            lineTension: 0.1
          },
          {
            label: graph_data[3][6],
            data: graph_data[3].slice(0,6),
            fill: false,
            borderColor: "rgba(53, 122, 55, 1)",
            lineTension: 0.1
          },
          {
            label: graph_data[4][6],
            data: graph_data[4].slice(0,6),
            fill: false,
            borderColor: "rgba(225, 2, 255, 1)",
            lineTension: 0.1
          }
        ]
      },
      options: optionsLine
    };

    lineChart = new Chart(ctxLine, configLine);
  }
}

function drawBarChart() {
  if ($("#barChart").length) {
    ctxBar = document.getElementById("barChart").getContext("2d");

    optionsBar = {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Remittances"
            }
          }
        ]
      }
    };

    optionsBar.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    configBar = {
      type: "bar",
      data: {
        labels: [top_5_remittance[0][1], top_5_remittance[1][1], top_5_remittance[2][1], top_5_remittance[3][1], top_5_remittance[4][1]],
        datasets: [
          {
            label: "Remittance (Billions)",
            data: [top_5_remittance[0][0], top_5_remittance[1][0], top_5_remittance[2][0], top_5_remittance[3][0], top_5_remittance[4][0]],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: optionsBar
    };

    barChart = new Chart(ctxBar, configBar);
  }
}

function drawPieChart() {
  if ($("#pieChart").length) {
    ctxPie = document.getElementById("pieChart").getContext("2d");
    optionsPie = {
      responsive: true,
      maintainAspectRatio: false
    };

    configPie = {
      type: "pie",
      data: {
        datasets: [
          {
            data: [top_5_remittance[0][0], top_5_remittance[1][0], top_5_remittance[2][0], top_5_remittance[3][0], top_5_remittance[4][0]],
            backgroundColor: [
              window.chartColors.red,
              window.chartColors.blue,
              window.chartColors.yellow,
              window.chartColors.green,
              window.chartColors.purple,
            ],
            label: "Storage"
          }
        ],
        labels: [top_5_remittance[0][1], top_5_remittance[1][1], top_5_remittance[2][1], top_5_remittance[3][1], top_5_remittance[4][1]]
      },
      options: optionsPie
    };

    pieChart = new Chart(ctxPie, configPie);
  }
}

function updateChartOptions() {
  if ($(window).width() < width_threshold) {
    if (optionsLine) {
      optionsLine.maintainAspectRatio = false;
    }
    if (optionsBar) {
      optionsBar.maintainAspectRatio = false;
    }
  } else {
    if (optionsLine) {
      optionsLine.maintainAspectRatio = true;
    }
    if (optionsBar) {
      optionsBar.maintainAspectRatio = true;
    }
  }
}

function updateLineChart() {
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}

function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
}

 // Reload the page so that charts will display correctly
function reloadPage() {
  setTimeout(function() {
    window.location.reload();
  });
}
