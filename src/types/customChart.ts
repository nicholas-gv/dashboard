import { type ChartData } from "chart.js";

export const availableTypes = ["line", "bar", "doughnut"] as const;

// the following is the same as "type ChartType = 'line' | 'bar' | 'doughnut'", but availableTypes is needed for reference.
export type ChartType = typeof availableTypes[number]; 

export interface CustomChart {
    chartData: ChartData
    chartType: ChartType
    chartSize: "1x1" | "1x2" | "2x2"
}
