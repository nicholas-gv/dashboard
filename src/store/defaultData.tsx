import { type ChartData } from "chart.js"

const chartLabels = [
    ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    ['Q1', 'Q2', 'Q3', 'Q4'],
    ['Company 1', 'Company 2', 'Company 3', 'Company 4'],
]

const chartData1: ChartData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
        { label: 'Total Users', data: [45, 60, 67, 71, 76], fill: true,  backgroundColor: "#84CC16" },
    ],
}
const chartData2: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',],
    datasets: [
        { label: 'Sales', data: [156, 160, 120, 118, 110, 100, 95, 78], fill: true, backgroundColor: "#dc2626" },
    ],
}
const chartData3: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',],
    datasets: [
        { label: 'Sales', data: [66, 62, 73, 88, 87, 92, 100, 128], fill: true, },
        { label: 'Expenditures', data: [56, 60, 70, 106, 127, 119, 88, 90], fill: true, },
    ],
}
const chartData4: ChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        { label: 'Company 1', data: [87, 92, 100, 128], fill: true, },
        { label: 'Company 2', data: [127, 119, 88, 90], fill: true, },
        { label: 'Company 3', data: [147, 159, 120, 110], fill: true, },
        { label: 'Company 4', data: [127, 119, 88, 100], fill: true, },
    ],
}
const chartData5: ChartData = {
    labels: ['Company 1', 'Company 2', 'Company 3', 'Company 4'],
    datasets: [
        { label: 'Mkt. share', data: [5, 12, 23, 60], fill: true,},
    ],
}

export const defaultChartDataObjects = [chartData1, chartData2, chartData3, chartData4, chartData5];