import { createSignal, createRoot } from "solid-js";
import { type ChartData, type ChartOptions } from "chart.js";
import { type CustomChart, type ChartType, availableTypes } from "../types/customChart";
import { chartLabels } from "./randomDataLabels";

function getRandomIndex(max: number, min?: number): number {
    if (min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * max);
    }
}

function compareLastToFirst(array: Array<number>) {
    return array[array.length-1] > array[0]
}

function getChartBGColor(numbersArray: Array<number>, chartType: ChartType) {
    if (chartType === "doughnut") {
        return ["#020617", "#1e293b", "#475569", "#94a3b8", "#cbd5e1"]
    } else if (chartType === "bar") {
        return compareLastToFirst(numbersArray) ? "rgba(34, 197, 94)" : "rgba(224, 97, 83)"
    } else if (chartType === "line") {
        return compareLastToFirst(numbersArray) ? "rgba(34, 197, 94, 0.3)" : "rgba(224, 97, 83, 0.3)"
    } else {
        console.error("Error: Invalid ChartType")
    }
}

function getChartBorderColor(numbersArray: Array<number>, chartType: ChartType) {
    if (chartType === "doughnut") {
        return 
    } else {
        return compareLastToFirst(numbersArray) ?  "rgb(34, 197, 94)" : "rgba(224, 97, 83)"
    }
}

function getAllowedLabels(chartType: ChartType) {
    const allowedLabels = [];

    for (let i = 0; i < chartLabels.length; i++) {
        if (!chartLabels[i].disallowedFor?.includes(chartType)) {
            allowedLabels.push(chartLabels[i])
        }
    }
    return allowedLabels;
}

function getRandomChartData(chartType: ChartType): ChartData {
    const randomNumbersArray: Array<number> = []
    const allowedLabels = getAllowedLabels(chartType)
    const randomLabel = allowedLabels[getRandomIndex(allowedLabels.length)]

    for (let i = 0; i < randomLabel.labels.length; i++) {
        randomNumbersArray.push(getRandomIndex(100, 20));
    }

    if (chartType === "doughnut") {
        randomNumbersArray.sort((a:number,b:number)=> b-a)
    }

    return {
        labels: randomLabel.labels, 
        datasets: [
            {
                label: 'Data', 
                data: randomNumbersArray,
                fill: true, 
                borderColor: getChartBorderColor(randomNumbersArray, chartType),
                backgroundColor: getChartBGColor(randomNumbersArray, chartType),
            }
        ]
    }
}

function getRandomChartType(): ChartType {
    return availableTypes[getRandomIndex(availableTypes.length)];
}

function getRandomChart(chosenChartType: ChartType, chartSize: "1x1" | "1x2" | "2x2" = "1x1"): CustomChart {
    const randomChartData = getRandomChartData(chosenChartType)
    return {chartData: randomChartData, chartType: chosenChartType, chartSize: chartSize}
}

const defaultCharts: Array<CustomChart> = Array.from(
    { length: 8 },
    (_:number, i:number) => i===0 ? 
        getRandomChart(getRandomChartType(), "2x2") : getRandomChart(getRandomChartType()))

function createCharts() {
    const [charts, setCharts] = createSignal(defaultCharts);
    const addChart = (chart: CustomChart) => setCharts([...charts(), chart])
    const addRandomChart = (chosenChartType: ChartType, chartSize: "1x1" | "1x2" | "2x2") => {
        setCharts([...charts(), getRandomChart(chosenChartType, chartSize)])
    }
    const removeChart = (id: number) => setCharts(charts().filter((val, i) => i === id))
    return { charts, addChart, addRandomChart, removeChart };
}

export default createRoot(createCharts);