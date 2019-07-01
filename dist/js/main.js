"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
// Exporting(Highcharts);
// console.log(Highcharts);
Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'column',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    title: {
      text: null
    },
    data: {
      googleSpreadsheetKey: '1eM4oCpHRWZ5NJi2oCqpXyK2CsBJtWOOSpfgc-oSceoI',
      googleSpreadsheetWorksheet: 2,
      endColumn: 5,
      startRow: 30
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    legend: {
      align: 'right',
      symbolRadius: 0,
      verticalAlign: 'top',
      x: 10,
      itemMarginTop: -10,
      reversed: true
    },
    xAxis: {
      labels: {
        autoRotation: false
      },
      tickLength: 5
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow',
        formatter: function formatter() {
          return (this.value / 1000).toFixed(1);
        }
      }
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      valuePrefix: '$',
      valueSuffix: ' billion',
      valueDecimals: 1,
      shared: true
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 10
          },
          legend: {
            align: 'left',
            x: -18,
            itemMarginTop: 0
          },
          tooltip: {
            enabled: false
          }
        }
      }]
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var _legend;

  var myChart = Highcharts.chart('chart-container-2', {
    chart: {
      type: 'line',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    title: {
      text: null
    },
    data: {
      googleSpreadsheetKey: '1eM4oCpHRWZ5NJi2oCqpXyK2CsBJtWOOSpfgc-oSceoI',
      googleSpreadsheetWorksheet: 3,
      endColumn: 4
    },
    plotOptions: {
      series: {
        lineWidth: 3,
        clip: false,
        marker: {
          enabled: false,
          symbol: 'circle',
          fillColor: '#ffffff',
          states: {
            hover: {
              fillColor: '#ffffff'
            }
          }
        }
      }
    },
    legend: (_legend = {
      align: 'right',
      symbolRadius: 0,
      symbolWidth: 0,
      reversed: true,
      layout: 'proximate'
    }, _defineProperty(_legend, "align", 'right'), _defineProperty(_legend, "padding", 0), _legend),
    xAxis: {
      labels: {
        autoRotation: false,
        formatter: function formatter() {
          var str = this.value;
          return str.substr(3, 6);
        }
      },
      tickInterval: 8
    },
    yAxis: {
      title: false,
      floor: 0,
      labels: {
        useHTML: true,
        overflow: 'allow'
      }
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      valueSuffix: '%',
      valueDecimals: 1
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 10
          },
          legend: {
            itemMarginTop: 0
          },
          tooltip: {
            enabled: false
          },
          xAxis: {
            labels: {
              formatter: function formatter() {
                return "'" + this.value.substr(5, 6);
                ;
              }
            }
          }
        }
      }]
    }
  });
});