import { useEffect } from "react";

export const useAnchorsScroll = () => {
    useEffect(() => {
        let currentLocation = window.location.href;
        const hasAnchor = currentLocation.includes("/#");
        if (hasAnchor) {
            const anchorId = `${currentLocation.substring(currentLocation.indexOf("#") + 1)}`;
            const anchor = document.getElementById(anchorId);
            if (anchor) {
                anchor.scrollIntoView();
            }
        }
    }, []);
}