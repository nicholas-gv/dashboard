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
    {
        id: 2,
        name: "Default 3"
    }
]

function createSections() {
    const [sections, setSections] = createSignal<Array<Section>>(defaultSections);
    const addSection = (section: Section) => setSections([...sections(), section])
    const removeSection = (id: number) => setSections(sections().filter((val, i) => i === id))
    return { sections, addSection, removeSection };
}

export default createRoot(createSections);