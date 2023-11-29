declare module '*.glb' {
    const content: {
        scene: object;
        animations: object;
        nodes: object;
    };
    export default content;
}
