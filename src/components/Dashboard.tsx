import ChartCard from './ChartCard';
import charts from '../store/createCharts';

const Dashboard = () => {
    return (
        <>
            {charts.charts().map((el)=>
                <ChartCard chartData={el.chartData} chartType={el.chartType} chartSize={el.chartSize}/>)
            }
        </>
    );
}

export default Dashboard;