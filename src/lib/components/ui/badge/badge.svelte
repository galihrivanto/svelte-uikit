<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	let className: string | undefined | null = undefined;
	export let href: string | undefined = undefined;
	export { className as class };
	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;
	export let outline: boolean = false;
	export let ghost: boolean = false;
</script>

<svelte:element
	this={href ? "a" : "span"}
	{href}
	class="badge badge-neutral {className}"
	class:badge-primary={color == Color.Primary}
	class:badge-secondary={color == Color.Secondary}
	class:badge-accent={color == Color.Accent}
	class:badge-info={color == Color.Info}
	class:badge-success={color == Color.Success}
	class:badge-warning={color == Color.Warning}
	class:badge-error={color == Color.Error}
	class:badge-xs={size == Size.Xs}
	class:badge-sm={size == Size.Sm}
	class:badge-md={size == Size.Md}
	class:badge-lg={size == Size.Lg}
	class:badge-ghost={ghost}
	class:badge-outline={outline}
	{...$$restProps}
>
	<slot />
</svelte:element>
