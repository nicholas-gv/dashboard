import sections from "../../common/createSections"

const SidebarAddSubItem = () => {
    let newSectionInputRef: HTMLInputElement | undefined;

    const handlePlusInputSubmit = () => {
        if (newSectionInputRef && newSectionInputRef.value.length!==0) {
            const newID = (sections.sections().length===0) ? 
                0 
                : 
                sections.sections()[sections.sections().length-1].id+1


            sections.addSection(
                {
                    id: newID, 
                    name: newSectionInputRef.value
                })
            newSectionInputRef.value = ""
            sections.setActiveSection(newID)
        }
    }

    return (
        <li class="text-white text-sm font-sans font-semibold inline-flex items-center justify-center">
            <input 
                type="text" 
                placeholder="Section Name..." 
                class="rounded w-44 p-2 pl-4 text-xs mt-2 bg-slate-900 "
                ref={newSectionInputRef}/>
            <button 
                type="submit" 
                onClick={handlePlusInputSubmit} 
                class="font-sans text-2xl ml-1">+</button>
        </li>
    );
}

export default SidebarAddSubItem;