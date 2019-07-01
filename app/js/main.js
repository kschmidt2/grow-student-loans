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
    const myChart = Highcharts.chart('chart-container', {
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
                formatter: function() {
                    return (this.value/1000).toFixed(1);
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
    const myChart = Highcharts.chart('chart-container-2', {
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
        legend: {
            align: 'right',
            symbolRadius: 0,
            symbolWidth: 0,
            reversed: true,
            layout: 'proximate',
            align: 'right',
            padding: 0
        },
        xAxis: {
            labels: {
                autoRotation: false,
                formatter: function () {
                    let str = this.value;
                    return str.substr(3,6);
                },
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
            valueDecimals: 1,
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
                        formatter: function () {
                            return "'" + this.value.substr(5,6);;
                        }
                    }
                }
              }
            }]
        }
    });
});