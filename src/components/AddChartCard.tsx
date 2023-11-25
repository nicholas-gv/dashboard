import { createSignal } from "solid-js";
import charts from "../store/createCharts";
import type { ChartSize, ChartType } from "../types/customChart";
import chartIconPieSquare1x1 from "../assets/chart-logo-square-pie-1x1.png"
import chartIconPieSquare1x2 from "../assets/chart-logo-dimensions-pie-1x2.png"
import chartIconPieSquare2x2 from "../assets/chart-logo-pie-square-2x2.png"

const AddChartCard = () => {
    const [editModeAllowed, setEditModeAllowed] = createSignal(false)
    const [editVisible, setEditVisible] = createSignal(false)
    const [showAPIInputElement, setShowAPIInputElement] = createSignal(false)
    const [checkedChartDimension, setCheckedChartDimension] = createSignal<ChartSize>("1x1")
    let chartTypeSelectRef: HTMLSelectElement | undefined;

    const handleClick = () => {
        if (!editVisible()) setEditModeAllowed(true)
    }

    const handleSubmit = (e: Event) => {
        e.preventDefault()
        if (chartTypeSelectRef) {
            charts.addRandomChart(chartTypeSelectRef.value as ChartType, checkedChartDimension())
        }
    }

    return (
        <div class="w-[250px] max-w-[250px] bg-white rounded-xl h-[230px] transition-all bg-gradient-to-tl
         from-slate-700 via-gray-700 to-slate-500 bg-[length:300%] bg-[0%] hover:bg-[100%]">
            <button class="relative w-[250px] h-[230px] animate-easeIn" onClick={handleClick}>
                {editModeAllowed() ? 
                    <form action="" class="grid grid-cols-2 gap-2 max-w-[230px] mx-auto" onSubmit={handleSubmit}>
                        
                        <select id="chartTypes" class="col-span-2 font-sans" ref={chartTypeSelectRef}>
                            <option value="bar">Bar</option>
                            <option value="doughnut">Doughnut</option>
                            <option value="line">Line</option>
                        </select>
                        <div class="col-span-2 [&>*]:inline [&>*]:mr-5 h-20 flex justify-center pt-3">
                            <div class="mx-auto">
                                <input 
                                    id="data-chart-dimension-1x1"
                                    name="data-chart-dimenison" 
                                    onChange={() => setCheckedChartDimension("1x1")}
                                    type="radio" />
                                <label for="data-chart-dimension" class="flex items-center">
                                    <img src={chartIconPieSquare1x1.src} alt="chart-icon" width="20" height="20"/>
                                </label>
                            </div>
                            <div class="mx-auto">
                                <input 
                                    id="data-chart-dimension-1x1"
                                    name="data-chart-dimenison" 
                                    onChange={() => setCheckedChartDimension("1x2")}
                                    type="radio" />
                                <label for="data-chart-dimension" class="flex items-center">
                                    <img src={chartIconPieSquare1x2.src} alt="chart-icon" width="40" height="20"/>
                                </label>
                            </div>
                            <div class="mx-auto">
                                <input 
                                    id="data-chart-dimension-1x1"
                                    name="data-chart-dimenison"
                                    onChange={() => setCheckedChartDimension("2x2")}
                                    type="radio" />
                                <label for="data-chart-dimension" class="flex items-center">
                                    <img src={chartIconPieSquare2x2.src} alt="chart-icon" width="40" height="40"/>
                                </label>
                            </div>
                        </div>
                        {showAPIInputElement() && <input type="text" class="col-span-2" placeholder="Your API"></input>}
                        <button type="submit" class="bg-green-500 text-white font-bold font-sans p-3 rounded-md">Create Chart</button>
                        <button type="button" class="bg-white p-3 rounded-md font-bold font-sans" onClick={()=> setEditModeAllowed(false)}>Cancel</button>
                    </form>
                    : 
                    <>
                        <div class="bg-white w-[5%] h-[55%] rounded-md absolute top-[22.5%] left-[47.5%]"/>
                        <div class="bg-white w-[55%] h-[5%] rounded-md absolute top-[47.5%] left-[22.5%]"/>
                    </>
                }
                
            </button>
        </div>
    );
}

export default AddChartCard;