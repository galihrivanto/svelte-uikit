import Root from "./drawer.svelte";

export enum Position {
    Left = 'left',
    Right = 'right'
}

export type PositionStrings = 'left' | 'right'; 

export {
    Root,
    Root as Drawer  
}