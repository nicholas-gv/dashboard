import { onMount } from 'solid-js'
import { Chart, Title, Tooltip, Legend, Colors, Filler } from 'chart.js'
import { Line, Bar, Doughnut } from 'solid-chartjs'
import { type ChartOptions } from 'chart.js'
import { type ChartData } from 'chart.js'
import { type ChartType } from '../types/customChart'
import { type ChartSize } from '../types/customChart'

const supportedChartComponents = {
    "line": Line,
    "bar": Bar,
    "doughnut": Doughnut
}

interface ChartCardProps {
    chartData: ChartData
    chartType: ChartType
    chartSize: ChartSize
}

const ChartCard = (props: ChartCardProps) => {
    const ChartComponent = supportedChartComponents[props.chartType]

    const chartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        devicePixelRatio: 2,
    }

    const chartSizeCSSContainers = {
        "1x1": "col-span-1 row-span-1 w-[250px] max-w-[250px] h-[230px]",
        "1x2": "col-span-2 row-span-1 w-[530px] max-w-[530px] h-[230px] max-[640px]:col-span-1 max-[640px]:max-w-[250px]",
        "2x2": "col-span-2 row-span-2 w-[530px] max-w-[530px] h-[490px] max-[640px]:col-span-1 max-[640px]:row-span-1 max-[640px]:max-w-[250px] max-[640px]:max-h-[230px]"
    }
    
    const chartSizeCSSInner = {
        "1x1": "max-w-[200px] max-h-[150px]",
        "1x2": "max-w-[400px] max-h-[150px] max-[640px]:max-w-[200px]",
        "2x2": "max-w-[400px] max-h-[300px] max-[640px]:max-w-[200px] max-[640px]:max-h-[150px]"
    }

    onMount(() => {
        if (props.chartType!=="doughnut") {
            chartOptions.scales = {x: { grid: {display: false}}}
        }
        Chart.register(Title, Tooltip, Legend, Colors, Filler)
    })

    return (
        <div class={`${chartSizeCSSContainers[props.chartSize]} bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow; flex items-center`}>
            <div class={`${chartSizeCSSInner[props.chartSize]} mx-auto relative`}>
                <ChartComponent data={props.chartData} options={chartOptions} width={400} height={230} /> 
            </div>
        </div>
    )

}

export default ChartCard;