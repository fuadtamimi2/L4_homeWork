import { useEffect, useState } from "react";

function useScroll() {
    const [endScreen, setEndScreen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollTop = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight;

            if (windowHeight + scrollTop >= pageHeight - 2) {
                setEndScreen(true);
            } else {
                setEndScreen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return endScreen;
}

export default useScroll;
