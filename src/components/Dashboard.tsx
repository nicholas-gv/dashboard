import ChartCard from './ChartCard';
import AddChartCard from './AddChartCard'
import charts from '../common/createCharts';
import sections from "../common/createSections"
import sidebar from "../common/createSidebar"

const Dashboard = () => {
    return (
        <div class={`${sidebar.isEnlarged() ? "translate-x-20" : ""} relative transition-all grid grid-cols-4 gap-x-[30px] w-[1100px] pt-10 mx-auto gap-y-[30px] pb-56 max-[1110px]:grid-cols-2 max-[1110px]:w-[520px]`}>
            {charts.getChartsBasedOnSection(sections.activeSection()).map( (el) =>
                <ChartCard chartData={el.chartData} chartType={el.chartType} chartSize={el.chartSize}/>)
            }
            <AddChartCard/>
        </div>
    );
}

export default Dashboard;