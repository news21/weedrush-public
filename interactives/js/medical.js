$(function () {
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
    $('#med').highcharts({
        chart: {
            type: 'column'
        },
        credits: {
            text: 'Source: Harris Polls',
            href: '',
            position: {
                align: 'right',
                verticalAlign: 'bottom'
            }
        },
        exporting: {
            enabled: false
        },
        title: {
            style: {
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                fontSize: '2em'
            },
            text: 'Support for medical marijuana',
            x: -20 //center
        },
        subtitle: {
            text: 'Certain states are discussing the idea of legalizing marijuana. Would you support or oppose the legalization of marijuana for the following purposes in your state: Medical treatment?',
            style: {
                fontFamily: 'Roboto Condensed',
                fontWeight: 'bold',
                fontSize: '1em'
            }
        },
        xAxis: {
            categories: ['2011', '2015']
        },
        yAxis: {
            labels: {
                format: '{value}%'
            },
            title: {
                enabled: false
            },
            min: 0
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.percentage:.0f}%<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent',
                events: {
                    legendItemClick: function () {
                        return false;
                    }
                }
            },
            series: {
                pointWidth: 100
            },
            allowPointSelect: false,
        },
        legend: {
            reversed: true,
            align: 'center',
            x: 0,
            layout: 'horizontal',
            verticalAlign: 'bottom',
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 0,
            shadow: false
        },
        series: [{
            name: 'Oppose',
            color: '#4A969E',
            data: [18, 13]
        }, {
            name: 'Not sure',
            color: '#516061',
            data: [7, 5]
        }, {
            name: 'Decline',
            color: '#967421',
            data: [1, 1]
        }, {
            name: 'Support',
            color: '#FFC437',
            data: [74, 81]
        }]
    });
});
