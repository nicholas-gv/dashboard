import { type JSX } from "solid-js"
import charts from "../common/createCharts"
import sections from "../common/createSections"

interface SidebarSubItemProps {
    id: number 
    children: string
    handleSubItemClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>
}

const SidebarSubItem = (props: SidebarSubItemProps) => {
    const handleSubItemDeleteButton = () => {
        try {
            charts.removeAllChartsBasedOnSectionID(props.id)
            sections.removeSection(props.id)
            sections.setActiveSection(sections.getSectionIDs()[0])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <li class="text-white text-sm font-sans font-semibold inline-flex">
            <button class="hover:bg-slate-700 w-32 text-left p-1 pl-4" onClick={props.handleSubItemClick} my-key={props.id}>
                {props.children}
            </button>
            <button class="text-red-600 font-sans font-semibold ml-1" onClick={handleSubItemDeleteButton}>X</button>
        </li>
    );
}

export default SidebarSubItem;