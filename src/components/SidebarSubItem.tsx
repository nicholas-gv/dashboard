interface SidebarSubItemProps {
    children: string
}

const SidebarSubItem = (props: SidebarSubItemProps) => {
    return (
        <li class="text-white text-sm font-sans font-semibold mt-1">{props.children}</li>
    );
}

export default SidebarSubItem;