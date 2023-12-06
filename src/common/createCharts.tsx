import { createSignal, createRoot } from "solid-js";
import { type ChartData, type ChartOptions } from "chart.js";
import { type CustomChart, type ChartType, supportedTypes, type ChartSize } from "../types/customChart";
import { chartLabels } from "./randomDataLabels";
import { compareLastToFirst, getRandomIndex } from "./utils";


function getChartBGColor(numbersArray: Array<number>, chartType: ChartType): string | string[] {
    const chartTypeBGColorMap = {
        "doughnut": ["#020617", "#1e293b", "#475569", "#94a3b8", "#cbd5e1"],
        "bar": compareLastToFirst(numbersArray) ? "rgba(34, 197, 94)" : "rgba(224, 97, 83)",
        "line": compareLastToFirst(numbersArray) ? "rgba(34, 197, 94, 0.3)" : "rgba(224, 97, 83, 0.3)"
    }
    return chartTypeBGColorMap[chartType]
}

function getChartBorderColor(numbersArray: Array<number>, chartType: ChartType): string | undefined {
    if (chartType !== "doughnut") {
        return compareLastToFirst(numbersArray) ?  "rgb(34, 197, 94)" : "rgba(224, 97, 83)"
    }
}

function getAllowedLabels(chartType: ChartType) {
    return chartLabels.filter(label => !label.disallowedFor?.includes(chartType));
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
                label: randomLabel.mainLabel, 
                data: randomNumbersArray,
                fill: true, 
                borderColor: getChartBorderColor(randomNumbersArray, chartType),
                backgroundColor: getChartBGColor(randomNumbersArray, chartType),
            }
        ]
    }
}

function getRandomChartType(): ChartType {
    return supportedTypes[getRandomIndex(supportedTypes.length)];
}

function getRandomChart(sectionID: number, chosenChartType: ChartType, chartSize: ChartSize = "1x1"): CustomChart {
    const randomChartData = getRandomChartData(chosenChartType)
    return {sectionID, chartData: randomChartData, chartType: chosenChartType, chartSize}
}

const defaultCharts: Array<CustomChart> = [
    getRandomChart(0, getRandomChartType(), "2x2"),
    getRandomChart(0, getRandomChartType(), "1x1"),
    getRandomChart(0, getRandomChartType(), "1x1"),
    getRandomChart(0, getRandomChartType(), "1x2"),
    getRandomChart(0, getRandomChartType(), "1x1"),
    getRandomChart(0, getRandomChartType(), "1x1"),
    getRandomChart(1, getRandomChartType(), "1x1"),
    getRandomChart(1, getRandomChartType(), "2x2"),
    getRandomChart(1, getRandomChartType(), "1x1"),
    getRandomChart(1, getRandomChartType(), "1x1"),
    getRandomChart(1, getRandomChartType(), "1x1"),
]

function createCharts() {
    const [charts, setCharts] = createSignal(defaultCharts);
    const addChart = (chart: CustomChart) => setCharts([...charts(), chart])
    const addRandomChart = (sectionID: number, chosenChartType: ChartType, chartSize: ChartSize) => {
        setCharts([...charts(), getRandomChart(sectionID, chosenChartType, chartSize)])
    }
    const getChartsBasedOnSection = (sectionID: number) => charts().filter((val, i) => val.sectionID === sectionID)
    const removeChart = (id: number) => setCharts(charts().filter((val, i) => i === id))
    const removeAllChartsBasedOnSectionID = (sectionID: number) => setCharts(charts().filter((val, i) => val.sectionID !== sectionID))
    return { charts, addChart, addRandomChart, removeChart, getChartsBasedOnSection, removeAllChartsBasedOnSectionID };
}

export default createRoot(createCharts);