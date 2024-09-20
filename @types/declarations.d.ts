declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element;
    export default MDXComponent;
}

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}