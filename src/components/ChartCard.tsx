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
        console.log(props);
        
    })

    return (
        <div class={`${props.chartSize==="large" ? "w-[530px] max-w-[530px] h-[490px] col-span-2 row-span-2" : " col-span-1 row-span-1 w-[250px] max-w-[250px] h-[230px]"} bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow; flex items-center`}>
            <div class={`${props.chartSize==="large" ? "" : "max-w-[200px] max-h-[150px]"} mx-auto`}>
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