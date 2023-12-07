import { createSignal } from "solid-js";
import charts from "../common/createCharts";
import type { ChartSize, ChartType } from "../types/customChart";
import chartIconPieSquare1x1 from "../assets/chart-logo-square-pie-1x1.png"
import chartIconPieSquare1x2 from "../assets/chart-logo-dimensions-pie-1x2.png"
import chartIconPieSquare2x2 from "../assets/chart-logo-pie-square-2x2.png"
import XIcon from "../assets/X-icon.png"
import checkmarkIcon from "../assets/checkmark-green.png"
import sections from "../common/createSections"

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
            charts.addRandomChart(sections.activeSection(), chartTypeSelectRef.value as ChartType, checkedChartDimension())
            setEditModeAllowed(false)
        }
    }

    return (
        <div class="w-[250px] max-w-[250px] bg-white rounded-xl h-[230px] transition-all bg-gradient-to-tl
         from-slate-700 via-gray-700 to-slate-500 bg-[length:300%] bg-[0%] hover:bg-[100%]">
            <button class="relative w-[250px] h-[230px] animate-easeIn" onClick={handleClick}>
                {editModeAllowed() ? 
                    <form action="" class="grid grid-cols-2 gap-2 max-w-[230px] mx-auto pt-4 animate-easeIn" onSubmit={handleSubmit}>
                        <span class="text-white font-sans font-semibold mb-[1px] text-left ml-3">Chart Type:</span>
                        <select id="chartTypes" class="col-span-2 font-sans w-[205px] justify-self-center" ref={chartTypeSelectRef}>
                            <option value="bar">Bar</option>
                            <option value="doughnut">Doughnut</option>
                            <option value="line">Line</option>
                        </select>
                        <span class="text-white font-sans font-semibold text-left ml-4 mt-2">Size:</span>
                        <div class="col-span-2 [&>*]:inline [&>*]:mx-auto [&>*]:mr-5 h-12 flex justify-center">
                            <div>
                                <input 
                                    id="data-chart-dimension-1x1"
                                    name="data-chart-dimenison" 
                                    onChange={() => setCheckedChartDimension("1x1")}
                                    type="radio" />
                                <label for="data-chart-dimension-1x1" class="flex items-center">
                                    <img src={chartIconPieSquare1x1.src} alt="chart-icon" width="20" height="20"/>
                                </label>
                            </div>
                            <div>
                                <input 
                                    id="data-chart-dimension-1x2"
                                    name="data-chart-dimenison" 
                                    onChange={() => setCheckedChartDimension("1x2")}
                                    type="radio" />
                                <label for="data-chart-dimension-1x2" class="flex items-center">
                                    <img src={chartIconPieSquare1x2.src} alt="chart-icon" width="40" height="20"/>
                                </label>
                            </div>
                            <div>
                                <input 
                                    id="data-chart-dimension-2x2"
                                    name="data-chart-dimenison"
                                    onChange={() => setCheckedChartDimension("2x2")}
                                    type="radio" />
                                <label for="data-chart-dimension-2x2" class="flex items-center">
                                    <img src={chartIconPieSquare2x2.src} alt="chart-icon" width="40" height="40"/>
                                </label>
                            </div>
                        </div>
                        {showAPIInputElement() && <input type="text" class="col-span-2" placeholder="Your API"></input>}
                        <div class="col-span-2 mt-2 h-10 flex items-center mx-auto">
                            <button 
                                type="submit" 
                                class="p-2 rounded-md bg-slate-600 w-10 h-10 mr-3 border-slate-500 border-2 border-solid"
                                ><img src={checkmarkIcon.src} alt="checkmark-icon"/>
                            </button>
                            <button 
                                type="button" 
                                class="p-2 rounded-md bg-slate-600 w-10 h-10 border-slate-500 border-2 border-solid" 
                                onClick={()=> setEditModeAllowed(false)}
                                ><img src={XIcon.src} alt="X-icon"/>
                            </button>
                        </div>
                    </form>
                    : 
                    <>
                        <div class="bg-white w-[5%] h-[55%] rounded-md absolute top-[22.5%] left-[47.5%] animate-easeIn"/>
                        <div class="bg-white w-[55%] h-[5%] rounded-md absolute top-[47.5%] left-[22.5%] animate-easeIn"/>
                    </>
                }
                
            </button>
        </div>
    );
}

export default AddChartCard;