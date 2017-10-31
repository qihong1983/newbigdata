        var Colors = [bgPrimary, bgInfo, bgWarning, bgAlert, bgDanger, bgSystem, bgSuccess,]
        // Donut Chart
        var chart10 = c3.generate({
            bindto: '#donut-chart',
            color: {
              pattern: Colors,
            },
            data: {
                columns: [
                    ['data1', 33],
                    ['data2', 66],
                ],
                type : 'donut',
                  // all of data will be hidden
                // hide: true,
                // specified data will be hidden
                // hide: ['data1'],
                selection: {
                    enabled: false
                },
                classes: {
                    data1: 'additional-data1-class',
                    data2: 'additional-data2-class',
                },
                data: {
                    selection: {
                        draggable: false
                    }
                },
                empty: {
                    label: {
                    text: "No Data"
                }
            },
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            legend: {
                show: false
            },
            donut: {
                title: "Iris Petal Width"
            }
        });

        console.log(chart10,'chart10');

        var Colors = ['#f2f2f2', '#e56045'];
        // Guage Chart
        var chart11 = c3.generate({
            bindto: '#guage-chart',
            color: {
              pattern: Colors,
              threshold: {
                 // unit: 'value', // percentage is default
                  max: 300, // 100 is default
                 values: [30, 60, 90, 120]
              }
            },
            data: {
                columns: [
                    ['data', 91.4]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
             label: {
                 format: function(value, ratio) {
                     return value
                 },
                 show: false // to turn off the min/max labels.
             },
             // min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
              max: 360, // 100 is default
             // units: ' %',
              width: 39 // for adjusting arc thickness
            },
            size: {
                height: 141,
                width:141
            }
        });

        var Colors = ['#f2f2f2', '#f7941d'];
        var chart13 = c3.generate({
            bindto: '#guage-chart1',
            color: {
              pattern: Colors,
              threshold: {
                 // unit: 'value', // percentage is default
                  max: 300, // 100 is default
                 values: [30, 60, 90, 120]
              }
            },
            data: {
                columns: [
                    ['data', 91.4]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
             label: {
                 format: function(value, ratio) {
                     return value
                 },
                 show: false // to turn off the min/max labels.
             },
             // min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
              max: 360, // 100 is default
             // units: ' %',
              width: 39 // for adjusting arc thickness
            },
            size: {
                height: 141,
                width:141
            }
        });


      var chart14 = c3.generate({
            bindto: '#guage-chart3',
            color: {
              pattern: Colors,
              threshold: {
                 // unit: 'value', // percentage is default
                  max: 300, // 100 is default
                 values: [30, 60, 90, 120]
              }
            },
            data: {
                columns: [
                    ['data', 91.4]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
             label: {
                 format: function(value, ratio) {
                     return value
                 },
                 show: false // to turn off the min/max labels.
             },
             // min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
              max: 360, // 100 is default
             // units: ' %',
              width: 39 // for adjusting arc thickness
            },
            size: {
                height: 141,
                width:141
            }
        });

        var chart15 = c3.generate({
            bindto: '#guage-chart4',
            color: {
              pattern: Colors,
              threshold: {
                 // unit: 'value', // percentage is default
                  max: 300, // 100 is default
                 values: [30, 60, 90, 120]
              }
            },
            data: {
                columns: [
                    ['data', 91.4]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
             label: {
                 format: function(value, ratio) {
                     return value
                 },
                 show: false // to turn off the min/max labels.
             },
             // min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
              max: 360, // 100 is default
             // units: ' %',
              width: 39 // for adjusting arc thickness
            },
            size: {
                height: 141,
                width:141
            }
        });

        var chart16 = c3.generate({
            bindto: '#guage-chart5',
            color: {
              pattern: Colors,
              threshold: {
                 // unit: 'value', // percentage is default
                  max: 300, // 100 is default
                 values: [30, 60, 90, 120]
              }
            },
            data: {
                columns: [
                    ['data', 91.4]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
             label: {
                 format: function(value, ratio) {
                     return value
                 },
                 show: false // to turn off the min/max labels.
             },
             // min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
              max: 360, // 100 is default
             // units: ' %',
              width: 39 // for adjusting arc thickness
            },
            size: {
                height: 141,
                width:141
            }
        });

        var chart17 = c3.generate({
            bindto: '#guage-chart6',
            color: {
              pattern: Colors,
              threshold: {
                 // unit: 'value', // percentage is default
                  max: 300, // 100 is default
                 values: [30, 60, 90, 120]
              }
            },
            data: {
                columns: [
                    ['data', 91.4]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
             label: {
                 format: function(value, ratio) {
                     return value
                 },
                 show: false // to turn off the min/max labels.
             },
             // min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
              max: 360, // 100 is default
             // units: ' %',
              width: 39 // for adjusting arc thickness
            },
            size: {
                height: 141,
                width:141
            }
        });


var dd = d3.scale.linear()
            .domain([0,d3.max([
                    ['DAU', 30, 200, 100, 400, 150, 250,100],
                    ['日存留用户数', 130, 100, 140, 200, 150, 50,40],
                    ['日新增用户数',123,34,222,113,324,444,34]
                ],function(d)
                {
                    return d[10];
                })
            ]);

        console.log(dd,'dd');


            var kkk = d3.max([[1,2]],function(d)
                {
                    return d[0];
                });




        var Colors = ['#E56045','#f7941d'];
        var chart12 = c3.generate({
            bindto: '#pie-chart',
            color: {
              pattern: Colors,
            },
            data: {
                // iris data from R
                columns: [
                    ['data1', 30],
                    ['data2', 120],
                ],
                type : 'pie',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            legend: {
                show: false
            }
        });

        var chart22 = c3.generate({
            bindto: '#pie-chart1',
            color: {
              pattern: Colors,
            },
            data: {
                // iris data from R
                columns: [
                    ['data1', 40],
                    ['data2', 120],
                ],
                type : 'pie',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            legend: {
                show: false
            }
        });

        var chart23 = c3.generate({
            bindto: '#pie-chart5',
            color: {
              pattern: Colors,
            },
            data: {
                // iris data from R
                columns: [
                    ['新增用户发出的消息数', 40],
                    ['存留用户发出的消息数', 120],
                ],
                type : 'pie',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            legend: {
                show: false
            }
        });

        var Colors = ['#ccc','#e56045','#f7941d'];
        // Spline Chart
        var chart7 = c3.generate({
            bindto: '#spline-chart',
            color: {
              pattern: Colors,
            },
           //  padding: {
           //    left: 30,
           //    right: 15,
           //    top: 0,
           //    bottom: 0,
           // },
            data: {
                columns: [
                    ['DAU', 30, 200, 100, 400, 150, 250,100],
                    ['日存留用户数', 130, 100, 140, 200, 150, 50,40],
                    ['日新增用户数',123,34,222,113,324,444,34]
                ],
                type: 'spline'
            },
            axis: {
                y: {
                    tick: {
                        count: false,
                        format: d3.format(","),
                        outer: true,
                        // count: 3,
                        // values: [1, 10, 20],
                        // count:4,
                    }
                }
            },
            grid: {
                y: {
                   //show: true
                }
            },
            legend: {
                show: true,
                position: 'inset',
                  inset: {
                    anchor: 'top-right',
                    x: 10,
                    y: 0,
                    step: 0
                  }
            }
        });
        console.log(chart7, 'chart7');


        var chart8 = c3.generate({
            bindto: '#spline-chart1',
            color: {
              pattern: Colors,
            },
           //  padding: {
           //    left: 30,
           //    right: 15,
           //    top: 0,
           //    bottom: 0,
           // },
            data: {
                columns: [
                    ['DAU', 30, 200, 100, 400, 150, 250,100],
                    ['日存留用户数', 130, 100, 140, 200, 150, 50,40],
                    ['日新增用户数',123,34,222,113,324,444,34]
                ],
                type: 'spline'
            },
            axis: {
                y: {
                    tick: {
                        count: false,
                        format: d3.format(","),
                        outer: true,
                        // count: 3,
                        // values: [1, 10, 20],
                        // count:4,
                    }
                }
            },
            grid: {
                y: {
                   //show: true
                }
            },
            legend: {
                show: true,
                position: 'inset',
                  inset: {
                    anchor: 'top-right',
                    x: 10,
                    y: 0,
                    step: 0
                  }
            }
        });

        var chart9 = c3.generate({
            bindto: '#spline-chart2',
            color: {
              pattern: Colors,
            },
           //  padding: {
           //    left: 30,
           //    right: 15,
           //    top: 0,
           //    bottom: 0,
           // },
            data: {
                columns: [
                    ['DAU', 30, 200, 100, 400, 150, 250,100],
                    ['日存留用户数', 130, 100, 140, 200, 150, 50,40],
                    ['日新增用户数',123,34,222,113,324,444,34]
                ],
                type: 'spline'
            },
            axis: {
                y: {
                    tick: {
                        count: false,
                        format: d3.format(","),
                        outer: true,
                        // count: 3,
                        // values: [1, 10, 20],
                        // count:4,
                    }
                }
            },
            grid: {
                y: {
                   //show: true
                }
            },
            legend: {
                show: true,
                position: 'inset',
                  inset: {
                    anchor: 'top-right',
                    x: 10,
                    y: 0,
                    step: 0
                  }
            }
        });


