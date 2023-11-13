import { onMount } from 'solid-js'
import { Chart, Title, Tooltip, Legend, Colors, Filler } from 'chart.js'
import { Line, Bar, Doughnut } from 'solid-chartjs'
import { type ChartOptions } from 'chart.js'
import { type CustomChart } from '../types/customChart'


const ChartCard = (props: CustomChart) => {
    const chartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        devicePixelRatio: 2,
    }

    onMount(() => {
        if (props.chartType!=="doughnut") {
            chartOptions.scales = {x: { grid: {display: false}}}
        }
        Chart.register(Title, Tooltip, Legend, Colors, Filler)
    })

    return (
        <div class="w-[250px] max-w-[250px] bg-white rounded-xl h-[230px] shadow-md hover:shadow-xl transition-shadow; flex items-center">
            <div class='max-w-[200px] max-h-[150px] mx-auto'>
                {props.chartType === "line" ?
                    <Line data={props.chartData} options={chartOptions} width={250} height={240} /> : 
                    props.chartType === "bar" ? 
                        <Bar data={props.chartData} options={chartOptions} width={250} height={240} /> : 
                        <Doughnut data={props.chartData} options={chartOptions} width={250} height={240} />}
            </div>
        </div>
    )

}

export default ChartCard;