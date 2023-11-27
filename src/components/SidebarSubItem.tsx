import { type JSX } from "solid-js"

interface SidebarSubItemProps {
    id: number 
    children: string
    handleSubItemClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>
}

const SidebarSubItem = (props: SidebarSubItemProps) => {
    return (
        <li class="text-white text-sm font-sans font-semibold">
            <button class="hover:bg-slate-700 w-32 text-left p-1 pl-4" onClick={props.handleSubItemClick} my-key={props.id}>
                {props.children}
            </button>
        </li>
    );
}

export default SidebarSubItem;