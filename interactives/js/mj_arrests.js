/* Define for default load */
var data = null;
var arrests_data = null;

/* Load default */
function start(){
  $.getJSON("data/mj_arrests.json",function(arrests) {
    arrests_data = arrests;
    // console.log(arrests_data);
  })
  .error(function(jqXHR, textStatus, errorThrown) {
    console.log("error " + textStatus);
    console.log(errorThrown);
  })
}

start();

$(document).ready(function() {
  //getDataByState(state); 
});

function update_charts() {
  getArrestsByState();
  // document.getElementById('subhed').style.display = 'block';
}

function getArrestsByState() {
    var count = 0;
    var i = 0;
    var year_arr = [];
    var total_arr = [];
    var male_arr = [];
    var female_arr = [];
    var white_arr = [];
    var black_arr = [];
    var aian_arr = [];
    var others_arr = [];
    var usave_arr = [];
    var usavemale_arr = [];
    var usavefemale_arr = [];
    var usavewhite_arr = [];
    var usaveblack_arr = [];
    var usaveaian_arr = [];
    var usaveother_arr = [];

    var temp_state = $('#select-state').val();
    // console.log(temp_state);
    $.each(arrests_data, function() {
        loop_state = arrests_data[count].state; 
        if(temp_state == loop_state) {
            for (i = 0; i < arrests_data[count]["dataset"].length; i++) {
                year_arr.push(arrests_data[count]["dataset"][i]["year"]);
                total_arr.push(arrests_data[count]["dataset"][i]["total"]);
                male_arr.push(arrests_data[count]["dataset"][i]["male"]);
                female_arr.push(arrests_data[count]["dataset"][i]["female"]);
                white_arr.push(arrests_data[count]["dataset"][i]["white"]);
                black_arr.push(arrests_data[count]["dataset"][i]["black"]);
                aian_arr.push(arrests_data[count]["dataset"][i]["aian"]);
                others_arr.push(arrests_data[count]["dataset"][i]["others"]);
                usave_arr.push(arrests_data[count]["dataset"][i]["usavetotal"]);
                usavemale_arr.push(arrests_data[count]["dataset"][i]["usavemale"]);
                usavefemale_arr.push(arrests_data[count]["dataset"][i]["usavefemale"]);
                usavewhite_arr.push(arrests_data[count]["dataset"][i]["usavewhite"]);
                usaveblack_arr.push(arrests_data[count]["dataset"][i]["usaveblack"]);
                usaveaian_arr.push(arrests_data[count]["dataset"][i]["usaveaian"]);
                usaveother_arr.push(arrests_data[count]["dataset"][i]["usaveother"]);
            }
        } 
        count++;
    });

    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Roboto Condensed'
            }
        },
        lang: {
            thousandsSep: ','
        }
    });
    $('#arrestsContainer').highcharts({
        chart: {
            type: 'line',
            height: 500
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        title: {
            style: {
                fontFamily: 'Roboto Condensed',
                fontSize: '1em'
            },
            text: 'Click on the legend items to see/hide arrest rates per 100,000 for  each state and the U.S. population.'
        },
        subtitle: {

            style: {
                fontFamily: 'Roboto Condensed',
                fontSize: '1.5em'
            },
            text: null
        },
        xAxis: {
            labels: {
                style: {
                    fontFamily: 'Roboto Condensed',
                    fontSize: '1em'
                }
            },
            categories: year_arr
        },
        yAxis: {
            labels: {
                style: {
                    fontFamily: 'Roboto Condensed',
                    fontSize: '1em'
                }
            },
            title: {
                style: {
                    fontFamily: 'Roboto Condensed',
                    fontSize: '1em'
                },
                text: 'Number of arrests per 100,000'
            },
            min: 0
        },
        legend: {
            x: 0,
            y: 40,
            itemStyle: {
                fontFamily: 'Roboto Condensed',
                fontSize: '1em'
            },
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            padding: 2
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            series: {
                lineWidth: 3.5
            }
        },
        series: [{
            name: 'Total',
            color: "#FFC437",
            data: total_arr,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: 'Male',
            color: "#FF8325",
            data: male_arr,
            visible: false,
            marker: {
                symbol: "circle",
                radius: 2
            }
        }, {
            name: 'Female',
            color: "#FF442C",
            data: female_arr,
            visible: false,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: 'White',
            color: "#95B56E",
            data: white_arr,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: 'Black',
            color: "#62C7D1",
            data: black_arr,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: 'American Indian/Alaskan Native',
            color: "#B21ADB",
            data: aian_arr,
            visible: false,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: 'Other race',
            color: "#3792FF",
            data: others_arr,
            visible: false,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: 'U.S. average',
            color: "#967421",
            data: usave_arr,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: 'U.S. average male',
            color: "#CC691D",
            data: usavemale_arr,
            visible: false,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: 'U.S. average female',
            color: "#C23421",
            data: usavefemale_arr,
            visible: false,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: 'U.S. average white',
            color: "#5D7044",
            data: usavewhite_arr,
            visible: false,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: 'U.S. average black',
            color: "#4A969E",
            data: usaveblack_arr,
            visible: false,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: 'U.S. average American Indian/Alaskan Native',
            color: "#75188F",
            data: usaveaian_arr,
            visible: false,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: 'U.S. average other race',
            color: "#043FCC",
            data: usaveother_arr,
            visible: false,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }]
    });
}