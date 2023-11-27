import { For, type JSX } from "solid-js";
import SidebarSubItem from "./SidebarSubItem";
import SidebarHeader from "./SidebarHeader";
import { type Section } from "../types/section";
import type { ImageMetadata } from "astro";


interface SidebarItemProps {
    handleSidebarClick: JSX.EventHandler<HTMLLIElement, MouseEvent>
    handleSubItemClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>
    sidebarIcon: ImageMetadata
    showSidebar: boolean
    sidebarItemName: string
    subItems?: Array<Section>
}

const SidebarItem = (props: SidebarItemProps) => {

    return (
        <li class="flex flex-col" onClick={props.handleSidebarClick}>
            <SidebarHeader sidebarIcon={props.sidebarIcon} showSidebar={props.showSidebar} sidebarItemName={props.sidebarItemName}/>
            {props.showSidebar && 
                <ul class="w-36 pl-7 [&>:first-child]:mt-2">
                    <For each={props.subItems}>{(section, i) => 
                        <SidebarSubItem handleSubItemClick={props.handleSubItemClick} id={i()}>{section.name}</SidebarSubItem>}
                    </For>
                </ul>
            }
        </li>
    );
}

export default SidebarItem;