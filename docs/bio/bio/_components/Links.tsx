import React from 'react';

type LinkType = {
    label: string
    url: string
    tooltipText?: string
}

export const linkSeparator = `\u00A0\u00A0|\u00A0\u00A0` as const;

const linksContainerStyle: React.CSSProperties = {
    fontSize: 'smaller'
}

const Links: React.FC<{links: LinkType[]}> = ({links}) => {
    console.log(links);
    return (
        <div style={linksContainerStyle}>
            {
                links.map(({ label, url, tooltipText }) => <a href={url} title={tooltipText}>{label}</a>).reduce((a, b) => [a, linkSeparator, b])
            }
        </div>
    );
};

export default Links;