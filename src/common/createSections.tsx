import { createSignal, createRoot } from "solid-js";
import { type Section } from "../types/section";

const defaultSections = [
    {
        id: 0,
        name: "Default 1"
    },
    {
        id: 1,
        name: "Default 2"
    },
]

function createSections() {
    const [activeSection, setActiveSection] = createSignal<number>(0);
    const [sections, setSections] = createSignal<Array<Section>>(defaultSections);
    const addSection = (section: Section) => setSections([...sections(), section])
    const removeSection = (id: number) => setSections(sections().filter((val, i) => val.id !== id))
    const getSectionIDs = () => [...new Set(sections().map(section => section.id))];
    return { sections, addSection, removeSection, activeSection, setActiveSection, getSectionIDs};
}

export default createRoot(createSections);