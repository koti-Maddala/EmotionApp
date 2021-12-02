var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
type: "line",
data: {
    labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    ],
    datasets: [
    {
        label: "Point 1",
        data: [2, 9, 3, 17, 6, 3],
        fill: false,
        borderColor: "rgb(153,205,1)",
    },
    {
        label: "Point 2",
        data: [2, 2, 5, 5, 2, 1],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
    },
    {
        label: "Point 3",
        data: [2, 5, 4, 8, 2, 10],
        fill: false,
        borderColor: "rgb(255,153,10)",
    },
    ],
},
});
var ctx2 = document.getElementById("myChart2").getContext("2d");
var myChart = new Chart(ctx2, {
type: "line",
data: {
    labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    ],
    datasets: [
    {
        label: "Point 1",
        data: [2, 9, 3, 17, 6, 3],
        fill: false,
        borderColor: "rgb(153,205,1)",
    },
    {
        label: "Point 2",
        data: [2, 2, 5, 5, 2, 1],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
    },
    {
        label: "Point 3",
        data: [2, 5, 4, 8, 2, 10],
        fill: false,
        borderColor: "rgb(255,153,10)",
    },
    ],
},
});