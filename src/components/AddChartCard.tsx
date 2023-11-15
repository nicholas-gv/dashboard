import { createSignal } from "solid-js";
import charts from "../store/createCharts";

const AddChartCard = () => {
    const [editModeAllowed, setEditModeAllowed] = createSignal(false)
    const [editVisible, setEditVisible] = createSignal(false)
    const [showAPIInputElement, setShowAPIInputElement] = createSignal(false)
    let randomDataOptionRef: HTMLInputElement | undefined;
    let customDataOptionRef: HTMLInputElement | undefined;
    let ChartTypeSelectRef: HTMLSelectElement | undefined;

    const handleClick = () => {
        if (!editVisible()) setEditModeAllowed(true)
    }

    const handleDataOptionChange = () => {
        if (customDataOptionRef && customDataOptionRef.checked) {
            setShowAPIInputElement(true)
        } else if ((randomDataOptionRef && randomDataOptionRef.checked)) {
            setShowAPIInputElement(false)
        } else {
            console.error("Error while choosing the chart data origin")
        }
    }

    const handleSubmit = (e: Event) => {
        e.preventDefault()
        if (randomDataOptionRef && randomDataOptionRef.checked && ChartTypeSelectRef) {
            charts.addRandomChart(ChartTypeSelectRef.value as ("line" | "bar" | "doughnut"))
        }
    }

    return (
        <div class="w-[250px] max-w-[250px] bg-white rounded-xl h-[230px] transition-all bg-gradient-to-tl
         from-slate-700 via-gray-700 to-slate-500 bg-[length:300%] bg-[0%] hover:bg-[100%]">
            <button class="relative w-[250px] h-[230px] animate-easeIn" onClick={handleClick}>
                {editModeAllowed() ? 
                    <form action="" class="grid grid-cols-2 gap-2 max-w-[230px] mx-auto" onSubmit={handleSubmit}>
                        <div class="col-span-2 flex">
                        <div class="">
                                <input 
                                    id="data-origin-custom" 
                                    type="radio" 
                                    class="" 
                                    name="data-origin" 
                                    ref={customDataOptionRef} 
                                    onChange={handleDataOptionChange}>
                                </input>
                                <label for="data-origin-custom" class="text-white text-lg font-extrabold">API</label>
                            </div>
                            <div class="">
                                <input 
                                    id="data-origin-random" 
                                    type="radio" 
                                    class="" 
                                    name="data-origin"
                                    ref={randomDataOptionRef}
                                    onChange={handleDataOptionChange}>
                                </input>
                                <label for="data-origin-random" class="text-white text-lg font-extrabold">Random</label>
                            </div>
                        </div>
                            <select id="chartTypes" class="" ref={ChartTypeSelectRef}>
                                <option value="bar">Bar</option>
                                <option value="doughnut">Doughnut</option>
                                <option value="line">Line</option>
                            </select>
                        <div class="col-span-2"></div>
                        {showAPIInputElement() && <input type="text" class="col-span-2" placeholder="Your API"></input>}
                        <button type="submit" class="bg-white p-3 rounded-md">Create Chart</button>
                        <button type="button" class="bg-white p-3 rounded-md" onClick={()=> setEditModeAllowed(false)}>Cancel</button>
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