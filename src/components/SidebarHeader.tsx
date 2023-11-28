import type { ImageMetadata } from "astro";

interface SidebarHeaderProps {
    sidebarIcon: ImageMetadata
    showSidebar: boolean
    sidebarItemName: string
}

const SidebarHeader = (props: SidebarHeaderProps) => {
    return (
        <div class="flex flex-row w-44 items-center">
            <button class="bg-slate-800 hover:bg-slate-700 w-10 h-8" >
                <img src={props.sidebarIcon.src} alt="sidebar-icon"  width="26" class="mx-auto"/>
            </button>
            {props.showSidebar && 
                <p class="text-white text-xl ml-2 font-sans font-bold">{props.sidebarItemName}</p>
            }
        </div>
    );
}

export default SidebarHeader;