import ChartCard from './ChartCard';
import AddChartCard from './AddChartCard'
import charts from '../store/createCharts';

const Dashboard = () => {
    return (
        <>
            {charts.charts().map((el)=>
                <ChartCard chartData={el.chartData} chartType={el.chartType} chartSize={el.chartSize}/>)
            }
            <AddChartCard/>
        </>
    );
}

export default Dashboard;