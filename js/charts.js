var options = {
    series: [{
        name: "Desktops",
        data: [-0.8, 0, -0.4, 0.4, -1, 0.6, 0.2]
    }],
    options: {
        width: 350
    },
    colors: ['#FF0000'],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['blue']
        }
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Revenue',
        align: 'center'
    },
    grid: {
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    xaxis: {
        categories: ['4:00', '11:00', '18:00', '1:00', '15:00', '22:00'],
    }
};

var chart = new ApexCharts(document.querySelector("#revenue"), options);
chart.render();



var options = {
    series: [{
        name: "Desktops",
        data: [-0.8, 0.2, -0.4, 0.6, -1, 0.8, 0.4]
    }],
    colors: ['#FF0000'],
    options: {
        width: 350
    },
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['blue']
        }
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Receipts',
        align: 'center'
    },
    grid: {
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    xaxis: {
        categories: ['4:00', '11:00', '18:00', '1:00', '15:00', '22:00'],
    }
};

var chart = new ApexCharts(document.querySelector("#receipts"), options);
chart.render();



var options = {
    series: [35, 65],
    chart: {
        width: 350,
        type: 'pie',
    },
    labels: ['Cash', 'Credit'],
    colors: ['#FF0000', '#0000FF'],
    title: {
        text: "Payment",
        align: "center"
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 250
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#payment"), options);
chart.render();


var options = {
    series: [35, 65],
    chart: {
        width: 350,
        type: 'pie',
    },
    colors: ['#FF0000', '#0000FF'],
    labels: ['Text', 'Text'],
    title: {
        text: "Payment-Amount",
        align: "center"
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 250
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#payment-amount"), options);
chart.render();