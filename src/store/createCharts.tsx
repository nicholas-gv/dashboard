import { createSignal, createRoot } from "solid-js";
import { type ChartData, type ChartOptions } from "chart.js";
import { type CustomChart, type ChartType, availableTypes } from "../types/customChart";
import { defaultChartDataObjects } from "./defaultData";

function getRandomIndex(max: number): number {
    return Math.floor(Math.random() * max);
}

function getRandomChartData(chartDataObjects: Array<ChartData>): ChartData {
    return chartDataObjects[getRandomIndex(chartDataObjects.length)];
}

function getRandomChartType(disallowedTypes: Array<ChartType> | ChartType = []): ChartType {
    const allowedTypes = availableTypes.filter(x => !disallowedTypes.includes(x));
    return allowedTypes[getRandomIndex(allowedTypes.length)];
}

function getRandomChart(): CustomChart {
    const randomChartData = getRandomChartData(defaultChartDataObjects)
    if (randomChartData.datasets?.length>1 || randomChartData.datasets[0].data.length>6) {
        return {chartData: randomChartData, chartType: getRandomChartType("doughnut")};
    } else {
        return {chartData: randomChartData, chartType: getRandomChartType()};
    }
    // return {chartData: getRandomChartData(chartDataObjects), chartType: getRandomChartType()};
}

const defaultCharts: Array<CustomChart> = Array.from({ length: 7 }, () => (getRandomChart()))

function createCharts() {
  const [charts, setCharts] = createSignal(defaultCharts);
  const addChart = (chart: CustomChart) => setCharts([...charts(), chart])
  const addRandomChart = () => setCharts([...charts(), getRandomChart()])
  const removeChart = (id: number) => setCharts(charts().filter((val, i) => i === id))
  return { charts, addChart, addRandomChart, removeChart };
}

export default createRoot(createCharts);