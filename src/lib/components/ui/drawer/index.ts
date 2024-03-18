import type { EasingFunction } from "svelte/transition";
import Root from "./drawer.svelte";
import { linear } from "svelte/easing";

export enum Position {
    Left = 'left',
    Right = 'right'
}

export type PositionStrings = 'left' | 'right'; 

export type SlideTransitionConfig = {
    delay?: number;
    duration?: number;
    easing?: EasingFunction,
    axis?: 'x' | 'y'
}

export const slideTransition = (
    delay?: number,
    duration?: number,
): SlideTransitionConfig => {
    return {
        delay: delay ?? 50,
        duration: duration ?? 300,
        easing: linear,
        axis: 'x'
    }
};

export const noSlideTransition: SlideTransitionConfig = {
    axis: 'x',
    delay: 0,
    duration: 0,
}

export {
    Root,
    Root as Drawer  
}