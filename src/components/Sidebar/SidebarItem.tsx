import { For, type JSX } from "solid-js";
import SidebarSubItem from "./SidebarSubItem";
import SidebarHeader from "./SidebarHeader";
import { type Section } from "../../types/section";
import type { ImageMetadata } from "astro";
import sections from '../../common/createSections'
import SidebarAddSubItem from "./SidebarAddSubItem";

interface SidebarItemProps {
    handleSidebarClick: JSX.EventHandler<HTMLLIElement, MouseEvent>
    handleSubItemClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>
    sidebarIcon: ImageMetadata
    showSidebar: boolean
    sidebarItemName: string
    subItems?: Array<Section>
    hasAddFunctionality?: boolean
}

const SidebarItem = (props: SidebarItemProps) => {
    return (
        <li class="flex flex-col" onClick={props.handleSidebarClick}>
            <SidebarHeader sidebarIcon={props.sidebarIcon} showSidebar={props.showSidebar} sidebarItemName={props.sidebarItemName}/>
            {props.showSidebar && 
                <ul class="pl-7 [&>:first-child]:mt-6 [&>:last-child]:mb-4">
                    <For each={props.subItems}>{(section, i) => 
                        <SidebarSubItem handleSubItemClick={props.handleSubItemClick} id={section.id}>{section.name}</SidebarSubItem>}
                    </For>
                    {props.hasAddFunctionality && 
                        <SidebarAddSubItem/>
                    }
                </ul>
            }
        </li>
    );
}

export default SidebarItem;