<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	import type { InputEvents } from ".";
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;
	export let bordered: boolean = false;
	export let ghost: boolean = false;

	type $$Props = HTMLInputAttributes & {
		color?: Color | ColorStrings;
		size?: Size | SizeStrings;
		bordered?: boolean;
		ghost?: boolean;
	};
	type $$Events = InputEvents;

	let className: $$Props["class"] = undefined;
	export let value: $$Props["value"] = undefined;
	export { className as class };
</script>

<input
    type="file"
    class={cn(
        "file-input w-full",
        className
    )}
    bind:value
    class:file-input-primary={color == Color.Primary}
    class:file-input-secondary={color == Color.Secondary}
    class:file-input-accent={color == Color.Accent}
    class:file-input-info={color == Color.Info}
    class:file-input-success={color == Color.Success}
    class:file-input-warning={color == Color.Warning}
    class:file-input-error={color == Color.Error}
    class:file-input-xs={size == Size.Xs}
    class:file-input-sm={size == Size.Sm}
    class:file-input-md={size == Size.Md}
    class:file-input-lg={size == Size.Lg}
    class:file-input-ghost={ghost}
    class:file-input-bordered={bordered}
    on:blur
    on:change
    on:click
    on:focus
    on:focusin
    on:focusout
    on:keydown
    on:keypress
    on:keyup
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:input
    {...$$restProps}
/>
