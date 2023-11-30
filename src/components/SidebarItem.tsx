import { For, type JSX } from "solid-js";
import SidebarSubItem from "./SidebarSubItem";
import SidebarHeader from "./SidebarHeader";
import { type Section } from "../types/section";
import type { ImageMetadata } from "astro";
import sections from '../common/createSections'

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
    let newSectionInputRef: HTMLInputElement | undefined;

    const handlePlusInputSubmit = () => {
        if (newSectionInputRef && newSectionInputRef.value.length!==0) {
            sections.addSection(
                {
                    id: sections.sections()[sections.sections().length-1].id+1, 
                    name: newSectionInputRef.value
                })
            newSectionInputRef.value = ""
        }
    }

    return (
        <li class="flex flex-col" onClick={props.handleSidebarClick}>
            <SidebarHeader sidebarIcon={props.sidebarIcon} showSidebar={props.showSidebar} sidebarItemName={props.sidebarItemName}/>
            {props.showSidebar && 
                <ul class="w-36 pl-7 [&>:first-child]:mt-2">
                    <For each={props.subItems}>{(section, i) => 
                        <SidebarSubItem handleSubItemClick={props.handleSubItemClick} id={sections.getSectionIDs()[i()]}>{section.name}</SidebarSubItem>}
                    </For>
                    {props.hasAddFunctionality && 
                        <li class="text-white text-sm font-sans font-semibold inline-flex items-center justify-center">
                            <input 
                                type="text" 
                                placeholder="Section Name..." 
                                class="rounded w-28 p-1 ml-3 text-xs mt-2 bg-slate-700 "
                                ref={newSectionInputRef}/>
                            <button 
                                type="submit" 
                                onClick={handlePlusInputSubmit} 
                                class="font-sans text-2xl ml-1">+</button>
                        </li>
                    }
                </ul>
            }
        </li>
    );
}

export default SidebarItem;