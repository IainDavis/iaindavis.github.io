import React from "react";
import { useEffect } from "react";

// apply a data attribute ('data-theme') at the root element of the
// Storybook preview iframe so that Docusaurus styles are applied
// within the preview
export default (Story, context) => {
    const { theme='light' } = context?.globals;
    useEffect(() => {
        const themeRoot = document.querySelector('html');
        themeRoot && themeRoot.setAttribute('data-theme', theme);
    }, [theme])

    return <Story />
}