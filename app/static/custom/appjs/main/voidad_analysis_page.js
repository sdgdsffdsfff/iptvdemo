$(function() {
    "use strict";

    var $switchAllChart = $('#switch-all-chart');

    $switchAllChart.highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '广告时长/切换率统计'
        },
        subtitle: {
            text: '2014年11月'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '14px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            max: 70,
            title: {
                text: '切换率（%）'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y} %</b>'
        },
        series: [{
            name: '新闻节目切换率',
            data: [
                ['0 ~ 15 秒钟' , 6.7 ],
                ['15 ~ 30 秒钟', 9.1 ],
                ['0.5 ~ 1 分钟', 14.2],
                ['1 ~ 2 分钟'  , 28.0],
                ['2 ~ 3 分钟'  , 32.5],
                ['3 ~ 4 分钟'  , 39.1],
                ['4 ~ 5 分钟'  , 41.8],
                ['5 ~ 6 分钟'  , 46.8],
                ['6 ~ 7 分钟'  , 51.8],
                ['7 ~ 8 分钟'  , 56.8],
                ['8 ~ 9 分钟'  , 63.8],
                ['9 ~ 10 分钟' , 68.8],
                ['10 分钟以上'  , 71.7]
            ]
        },{
            name: '电视剧切换率',
            data: [
                ['0 ~ 15 秒钟' , 5.7 ],
                ['15 ~ 30 秒钟', 6.1 ],
                ['0.5 ~ 1 分钟', 12.2],
                ['1 ~ 2 分钟'  , 27.0],
                ['2 ~ 3 分钟'  , 31.5],
                ['3 ~ 4 分钟'  , 34.1],
                ['4 ~ 5 分钟'  , 40.8],
                ['5 ~ 6 分钟'  , 43.8],
                ['6 ~ 7 分钟'  , 49.8],
                ['7 ~ 8 分钟'  , 52.8],
                ['8 ~ 9 分钟'  , 60.8],
                ['9 ~ 10 分钟' , 69.8],
                ['10 分钟以上'  , 69.7]
            ]
        }, {
            name: '综艺节目切换率',
            data: [
                ['0 ~ 15 秒钟' , 8.7 ],
                ['15 ~ 30 秒钟', 12.1 ],
                ['0.5 ~ 1 分钟', 16.2],
                ['1 ~ 2 分钟'  , 24.0],
                ['2 ~ 3 分钟'  , 36.5],
                ['3 ~ 4 分钟'  , 33.1],
                ['4 ~ 5 分钟'  , 45.8],
                ['5 ~ 6 分钟'  , 49.8],
                ['6 ~ 7 分钟'  , 56.8],
                ['7 ~ 8 分钟'  , 58.8],
                ['8 ~ 9 分钟'  , 60.8],
                ['9 ~ 10 分钟' , 64.8],
                ['10 分钟以上'  , 76.7]
            ]
        },{
            name: '生活节目切换率',
            data: [
                ['0 ~ 15 秒钟' , 3.7 ],
                ['15 ~ 30 秒钟', 5.1 ],
                ['0.5 ~ 1 分钟', 8.2],
                ['1 ~ 2 分钟'  , 15.0],
                ['2 ~ 3 分钟'  , 22.5],
                ['3 ~ 4 分钟'  , 29.1],
                ['4 ~ 5 分钟'  , 34.8],
                ['5 ~ 6 分钟'  , 39.8],
                ['6 ~ 7 分钟'  , 45.8],
                ['7 ~ 8 分钟'  , 48.8],
                ['8 ~ 9 分钟'  , 53.8],
                ['9 ~ 10 分钟' , 58.8],
                ['10 分钟以上'  , 67.7]
            ]
        }]
    });

});