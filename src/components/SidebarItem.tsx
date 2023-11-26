import { For, type JSX } from "solid-js";
import type { Section } from "../types/section";
import SidebarSubItem from "./SidebarSubItem";
import SidebarHeader from "./SidebarHeader";
import type { ImageMetadata } from "astro";


interface SidebarItemProps {
    sidebarIcon: ImageMetadata
    handleSidebarClick: JSX.EventHandler<HTMLLIElement, MouseEvent>
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
                    <For each={props.subItems}>
                        {(section)=> <SidebarSubItem>{section.name}</SidebarSubItem>}
                    </For>
                </ul>
            }
        </li>
    );
}

export default SidebarItem;