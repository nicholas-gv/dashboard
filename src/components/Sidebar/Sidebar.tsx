import { createSignal } from "solid-js";
import sectionsIcon from "../../assets/sections-icon.png"
import tutorialIcon from "../../assets/question-mark-icon-v2.png"
import leftArrowIcon from "../../assets/left-arrow.png"
import dashboardIcon from "../../assets/dashboard-icon.png"
import sections from "../../common/createSections"
import sidebar from "../../common/createSidebar"
import SidebarItem from "./SidebarItem";
import { type JSX } from "solid-js";

const Sidebar = () => {
    const minimalSidebarSize = "w-12"
    const enlargedSidebarSize = "w-64"
    const [showSections, setShowSections] = createSignal<boolean>(false);
    const [sectionOptionalCSS, setSectionOptionalCSS] = createSignal<string>(minimalSidebarSize);
    
    const handleSectionClick: JSX.EventHandler<HTMLLIElement, MouseEvent> = () => {
        if (!sidebar.isEnlarged()) {
            setShowSections(true);
            setSectionOptionalCSS(enlargedSidebarSize);
            sidebar.setIsEnlarged(true)
        }
    }

    const handleCollapseButtonClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = () => {
        if (sidebar.isEnlarged()) {
            setShowSections(false);
            setSectionOptionalCSS(minimalSidebarSize);
            sidebar.setIsEnlarged(false)
        }
    }

    const handleSubItemClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (e) => {
        const keyAttribute = e.currentTarget.getAttribute("my-key");
        if (keyAttribute !== null) {
            sections.setActiveSection(parseInt(keyAttribute))
        }
    }

    return (
        <nav class={`${sectionOptionalCSS()} transition-all bg-slate-800 h-[100vh] fixed left-0 flex pl-1`}>
            <ul class="[&>*]:mb-4 [&>*]:w-10 [&>:first-child]:mb-12 [&>:first-child]:mt-4">
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
                    showSidebar={showSections()}
                    hasAddFunctionality={true}/>
                <SidebarItem
                    sidebarItemName="Tutorial"
                    sidebarIcon={tutorialIcon}
                    handleSidebarClick={handleSectionClick}
                    handleSubItemClick={handleSubItemClick}
                    showSidebar={showSections()}/>
            </ul>
            {sidebar.isEnlarged() && 
                <button class="inline-flex translate-x-44 translate-y-5" onClick={handleCollapseButtonClick}>
                    <img src={leftArrowIcon.src} alt="left-arrow-icon" width="25"/>
                </button>
            }
        </nav>
    );
}

export default Sidebar;