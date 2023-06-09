function hexToRGB(a, e) {
    var r = parseInt(a.slice(1, 3), 16),
        t = parseInt(a.slice(3, 5), 16),
        o = parseInt(a.slice(5, 7), 16);
    return e ? "rgba(" + r + ", " + t + ", " + o + ", " + e + ")" : "rgb(" + r + ", " + t + ", " + o + ")"
}! function(p) {
    "use strict";
    function a() {
        this.$body = p("body"), this.charts = []
    }
    a.prototype.respChart = function(e, r, t, o) {
        var s = e.get(0).getContext("2d"),
            n = p(e).parent();
        return Chart.defaults.global.defaultFontColor = "#8391a2", Chart.defaults.scale.gridLines.color = "rgba(150, 150, 150, 0.1)",
            function() {
                var a;
                switch (e.attr("width", p(n).width()), r) {
                    case "Line":
                        a = new Chart(s, {
                            type: "line",
                            data: t,
                            options: o
                        });
                        break;
					case "Line2":
                        a = new Chart(s, {
                            type: "line",
                            data: t,
                            options: o
                        });
                        break;
                    case "Doughnut":
                        a = new Chart(s, {
                            type: "doughnut",
                            data: t,
                            options: o
                        });
                        break;
					case "Doughnut2":
                        a = new Chart(s, {
                            type: "doughnut",
                            data: t,
                            options: o
                        });
                        break;
                    case "Pie":
                        a = new Chart(s, {
                            type: "pie",
                            data: t,
                            options: o
                        });
                        break;
                    case "Bar":
                        a = new Chart(s, {
                            type: "bar",
                            data: t,
                            options: o
                        });
                        break;
                    case "Radar":
                        a = new Chart(s, {
                            type: "radar",
                            data: t,
                            options: o
                        });
                        break;
                    case "PolarArea":
                        a = new Chart(s, {
                            data: t,
                            type: "polarArea",
                            options: o
                        });
                }
                return a
            }()
    }, a.prototype.initCharts = function() {
        var a = [],
            e = ["#1abc9c", "#f1556c", "#3bafda", "#e3eaef"];
		/*
        if (0 < p("#line-chart-example").length) {
            var r = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
                datasets: [{
                    label: "Porcentaje",
                    fill: !1,
                    backgroundColor: hexToRGB((i = (l = p("#line-chart-example").data("colors")) ? l.split(",") : e.concat())[0], .3),
                    borderColor: i[0],
                    data: [10, 40, 20, 50, 30, 60, 40, 70, 50, 80]
                }, {
                    label: "Año Anterior",
                    fill: !0,
                    backgroundColor: "transparent",
                    borderColor: i[1],
                    borderDash: [5, 5],
                    data: [5, 15, 10, 20, 15, 25, 20, 30, 25, 35]
                }]
            };
            a.push(this.respChart(p("#line-chart-example"), "Line", r, {
                maintainAspectRatio: !1,
                legend: {
                    display: !0
                },
                tooltips: {
                    intersect: !1
                },
                hover: {
                    intersect: !0
                },
                plugins: {
                    filler: {
                        propagate: !1
                    }
                },
                scales: {
                    xAxes: [{
                        reverse: !0,
                        gridLines: {
                            color: "rgba(150, 150, 150, 0.1)"
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            stepSize: 20
                        },
                        display: !0,
                        borderDash: [5, 5],
                        gridLines: {
                            color: "rgba(0,0,0,0)",
                            fontColor: "#fff"
                        }
                    }]
                }
            }))
        }
		if (0 < p("#line-chart-example2").length) {
            var r = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
                datasets: [{
                    label: "Porcentaje",
                    fill: !1,
                    backgroundColor: hexToRGB((i = (l = p("#line-chart-example2").data("colors")) ? l.split(",") : e.concat())[0], .3),
                    borderColor: i[0],
                    data: [10, 40, 20, 50, 30, 60, 40, 70, 50, 80]
                }, {
                    label: "Año Anterior",
                    fill: !0,
                    backgroundColor: "transparent",
                    borderColor: i[1],
                    borderDash: [5, 5],
                    data: [5, 15, 10, 20, 15, 25, 20, 30, 25, 35]
                }]
            };
            a.push(this.respChart(p("#line-chart-example2"), "Line2", r, {
                maintainAspectRatio: !1,
                legend: {
                    display: !0
                },
                tooltips: {
                    intersect: !1
                },
                hover: {
                    intersect: !0
                },
                plugins: {
                    filler: {
                        propagate: !1
                    }
                },
                scales: {
                    xAxes: [{
                        reverse: !0,
                        gridLines: {
                            color: "rgba(150, 150, 150, 0.1)"
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            stepSize: 20
                        },
                        display: !0,
                        borderDash: [5, 5],
                        gridLines: {
                            color: "rgba(0,0,0,0)",
                            fontColor: "#fff"
                        }
                    }]
                }
            }))
        }
		*/
        if (0 < p("#bar-chart-example").length) {
            var t = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Sales Analytics",
                    backgroundColor: hexToRGB((i = (l = p("#bar-chart-example").data("colors")) ? l.split(",") : e.concat())[0], .3),
                    borderColor: i[0],
                    borderWidth: 2,
                    hoverBackgroundColor: hexToRGB(i[0], .7),
                    hoverBorderColor: i[0],
                    data: [65, 59, 80, 81, 56, 55, 40, 20]
                }]
            };
            a.push(this.respChart(p("#bar-chart-example"), "Bar", t, {
                maintainAspectRatio: !1,
                legend: {
                    display: !0
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: !0
                        },
                        stacked: !1,
                        ticks: {
                            stepSize: 20
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: !0
                        },
                        barPercentage: .7,
                        categoryPercentage: .5,
                        stacked: !1
                    }]
                }
            }))
        }
        if (0 < p("#pie-chart-example").length) {
            var o = {
                labels: ["Desktops", "Tablets", "Mobiles", "Mobiles", "Tablets"],
                datasets: [{
                    data: [80, 50, 100, 121, 77],
                    backgroundColor: i = (l = p("#pie-chart-example").data("colors")) ? l.split(",") : e.concat(),
                    borderColor: "#fff"
                }]
            };
            a.push(this.respChart(p("#pie-chart-example"), "Pie", o, {
                maintainAspectRatio: !1,
                legend: {
                    display: !0
                }
            }))
        }
        if (0 < p("#donut-chart-example").length) {
            var s = {
                labels: ["Pedimento", "COVE", "Factura", "Manifestación de Valor", "DODA"],
                datasets: [{
                    data: [80, 50, 100, 121, 77],
                    backgroundColor: i = (l = p("#donut-chart-example").data("colors")) ? l.split(",") : e.concat(),
                    borderColor: "#fff"
                }]
            };
            a.push(this.respChart(p("#donut-chart-example"), "Doughnut", s, {
                maintainAspectRatio: !1,
                cutoutPercentage: 60,
                legend: {
                    display: !0
                }
            }))
        }
		if (0 < p("#donut-chart-example2").length) {
            var s = {
                labels: ["Pedimento", "COVE", "Factura", "Manifestación de Valor", "DODA"],
                datasets: [{
                    data: [80, 50, 100, 121, 77],
                    backgroundColor: i = (l = p("#donut-chart-example2").data("colors")) ? l.split(",") : e.concat(),
                    borderColor: "#fff"
                }]
            };
            a.push(this.respChart(p("#donut-chart-example2"), "Doughnut2", s, {
                maintainAspectRatio: !1,
                cutoutPercentage: 60,
                legend: {
                    display: !0
                }
            }))
        }
        if (0 < p("#polar-chart-example").length) {
            var n = {
                labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
                datasets: [{
                    data: [11, 16, 7, 18],
                    backgroundColor: i = (l = p("#polar-chart-example").data("colors")) ? l.split(",") : e.concat(),
                    borderColor: "transparent"
                }]
            };
            a.push(this.respChart(p("#polar-chart-example"), "PolarArea", n, {
                scale: {
                    ticks: {
                        backdropColor: "transparent"
                    },
                    angleLines: {
                        color: "rgba(150, 150, 150, 0.1)"
                    }
                }
            }))
        }
        if (0 < p("#radar-chart-example").length) {
            var l, i, c = {
                labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                datasets: [{
                    label: "Desktops",
                    backgroundColor: hexToRGB((i = (l = p("#radar-chart-example").data("colors")) ? l.split(",") : e.concat())[0], .3),
                    borderColor: i[0],
                    pointBackgroundColor: i[0],
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: i[0],
                    data: [65, 59, 90, 81, 56, 55, 40]
                }, {
                    label: "Tablets",
                    backgroundColor: hexToRGB(i[1], .3),
                    borderColor: i[1],
                    pointBackgroundColor: i[1],
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: i[1],
                    data: [28, 48, 40, 19, 96, 27, 100]
                }]
            };
            a.push(this.respChart(p("#radar-chart-example"), "Radar", c, {
                maintainAspectRatio: !1,
                scale: {
                    ticks: {
                        backdropColor: "transparent"
                    },
                    angleLines: {
                        color: "rgba(150, 150, 150, 0.1)"
                    }
                }
            }))
        }
        return a
    }, a.prototype.init = function() {
        var e = this;
        Chart.defaults.global.defaultFontFamily = "Nunito,sans-serif", e.charts = this.initCharts(), p(window).on("resize", function(a) {
            p.each(e.charts, function(a, e) {
                try {
                    e.destroy()
                } catch (a) {}
            }), e.charts = e.initCharts()
        })
    }, p.ChartJs = new a, p.ChartJs.Constructor = a
}(window.jQuery),
function() {
    "use strict";
    window.jQuery.ChartJs.init()
}();