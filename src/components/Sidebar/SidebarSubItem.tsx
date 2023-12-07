import { type JSX } from "solid-js"
import charts from "../../common/createCharts"
import sections from "../../common/createSections"
import XIcon from "../../assets/X-icon.png"

interface SidebarSubItemProps {
    id: number 
    children: string
    handleSubItemClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>
}

const SidebarSubItem = (props: SidebarSubItemProps) => {
    const handleSubItemDeleteButton = () => {
        console.log("happen?");
        
        try {
            charts.removeAllChartsBasedOnSectionID(props.id)
            sections.removeSection(props.id)
            sections.setActiveSection(sections.getSectionIDs()[0])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <li class="text-white text-sm font-sans font-semibold inline-flex items-center mb-1">
            <button 
                class={`${sections.activeSection()===props.id ? "bg-slate-700" : ""} hover:bg-slate-700 w-44 text-left py-2 pl-4 rounded`} 
                onClick={props.handleSubItemClick} 
                my-key={props.id}>
                {props.children}
            </button>
            <button class="text-red-600 font-sans font-semibold ml-2 w-10 h-8" onClick={handleSubItemDeleteButton}>
                <img src={XIcon.src} alt="x-icon" width="12"/>
            </button>
        </li>
    );
}

export default SidebarSubItem;