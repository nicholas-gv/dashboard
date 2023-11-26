interface SidebarSubItemProps {
    children: string
}

const SidebarSubItem = (props: SidebarSubItemProps) => {
    const handleSubItemClick = (e: Event) => {
        e.preventDefault()
    }

    return (
        <li class="text-white text-sm font-sans font-semibold">
            <button class="hover:bg-slate-700 w-32 text-left p-1 pl-4" onClick={handleSubItemClick}>
                {props.children}
            </button>
        </li>
    );
}

export default SidebarSubItem;