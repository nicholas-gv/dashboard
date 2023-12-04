import { createSignal, createRoot } from "solid-js";

function createSidebar() {
    const [isEnlarged, setIsEnlarged] = createSignal<boolean>(false);
    return { isEnlarged, setIsEnlarged};
}

export default createRoot(createSidebar);