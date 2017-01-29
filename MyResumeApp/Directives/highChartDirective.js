var highChartDirective = function () {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            title: '@',
            data: '='
        },
        link: function (scope, element) {
            scope.$watch('data', function (newValue) {
                applyChart(newValue);
            });

            var applyChart = function (newData) {
                Highcharts.chart(element[0], {
                    chart: {
                        type: 'pie',
                        options3d: {
                            enabled: true,
                            alpha: 40
                        },
                        spacingLeft:40
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    plotOptions: {
                        pie: {
                            innerSize: 100,
                            depth: 45,
                            showInLegend: true,
                            dataLables: {
                                enabled: true,
                                distance: -50,
                                style: {
                                    fontWeight: 'bold',
                                    color:'white'
                                }
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        floating: true,
                        align: 'right',
                        verticalAlign: 'top',
                        //symbolPadding: 20,
                        //symbolWidth: 10,
                        width: 200,
                        itemWidth: 80,
                        style: {'margin-left':'40px'}
                    },
                    series: [{
                        name: 'Work Experience',
                        size: '80%',
                        innerSize: '55%',
                        colors: ['#fb8c00', '#00695c', '#FF0000', '#FFC0CB', '#00FF00'],
                        data: newData
                    }],
                    tooltip: {

                    }
                });
            }
        }
    };
}