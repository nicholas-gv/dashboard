import { createSignal } from "solid-js";
import sectionsIcon from "../assets/sections-icon.png"
import tutorialIcon from "../assets/question-mark-icon.png"
import dashboardIcon from "../assets/dashboard-icon.png"
import sections from "../common/createSections"
import SidebarItem from "./SidebarItem";
import { type JSX } from "solid-js";

const Sidebar = () => {
    const [showSections, setShowSections] = createSignal<boolean>(false);
    const [sectionOptionalCSS, setSectionOptionalCSS] = createSignal<string>("w-12");
    
    const handleSectionClick: JSX.EventHandler<HTMLLIElement, MouseEvent> = () => {
        setShowSections(!showSections());
        setSectionOptionalCSS(showSections() ? "w-44" : "w-12");
    }

    const handleSubItemClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (e) => {
        const keyAttribute = e.currentTarget.getAttribute("my-key");
        if (keyAttribute !== null) {
            sections.setActiveSection(parseInt(keyAttribute))
        }
    }

    return (
        <nav class={`${sectionOptionalCSS()} transition-all bg-slate-800 h-[100vh] fixed left-0 flex pl-1`}>
            <ul class="[&>*]:mb-5 [&>*]:w-10 [&>:first-child]:mb-12 [&>:first-child]:mt-4">
                <SidebarItem
                    sidebarItemName="Dashboard"
                    sidebarIcon={dashboardIcon}
                    handleSidebarClick={handleSectionClick}
                    handleSubItemClick={handleSubItemClick}
                    showSidebar={showSections()}/>
                <SidebarItem 
                    sidebarItemName="Sections"
                    sidebarIcon={sectionsIcon}
                    subItems={sections.sections()} 
                    handleSidebarClick={handleSectionClick}
                    handleSubItemClick={handleSubItemClick}
                    showSidebar={showSections()}/>
                <SidebarItem
                    sidebarItemName="Tutorial"
                    sidebarIcon={tutorialIcon}
                    handleSidebarClick={handleSectionClick}
                    handleSubItemClick={handleSubItemClick}
                    showSidebar={showSections()}/>
            </ul>
        </nav>
    );
}

export default Sidebar;