import { type ChartData } from "chart.js";

export const supportedTypes = ["line", "bar", "doughnut"] as const;
export const supportedChartDimensions = ["1x1", "1x2", "2x2"] as const;

// the following is the same as "type ChartType = 'line' | 'bar' | 'doughnut'", but supportedTypes array is needed for reference.
export type ChartType = typeof supportedTypes[number]; 

export type ChartSize = typeof supportedChartDimensions[number]; 

export interface CustomChart {
    chartData: ChartData
    chartType: ChartType
    chartSize: ChartSize
}
