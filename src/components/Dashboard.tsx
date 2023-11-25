import ChartCard from './ChartCard';
import AddChartCard from './AddChartCard'
import charts from '../store/createCharts';

const Dashboard = () => {
    return (
        <div class="grid grid-cols-4 gap-x-[30px] w-[1100px] pt-10 mx-auto gap-y-[30px] pb-56 max-[1110px]:grid-cols-2 max-[1110px]:w-[520px]">
            {charts.charts().map((el)=>
                <ChartCard chartData={el.chartData} chartType={el.chartType} chartSize={el.chartSize}/>)
            }
            <AddChartCard/>
        </div>
    );
}

export default Dashboard;