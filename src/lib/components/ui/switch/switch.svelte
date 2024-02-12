<script lang="ts">
	import { Switch as SwitchPrimitive } from "bits-ui";
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;

	type $$Props = SwitchPrimitive.Props;

	let className: $$Props["class"] = undefined;
	export let checked: $$Props["checked"] = undefined;
	export { className as class };
</script>

<input 
	type="checkbox"
	bind:checked
	class="toggle {className}" 
	class:toggle-primary={color == Color.Primary}
	class:toggle-secondary={color == Color.Secondary}
	class:toggle-accent={color == Color.Accent}
	class:toggle-info={color == Color.Info}
	class:toggle-success={color == Color.Success}
	class:toggle-warning={color == Color.Warning}
	class:toggle-error={color == Color.Error}
	class:toggle-xs={size == Size.Xs}
	class:toggle-sm={size == Size.Sm}
	class:toggle-md={size == Size.Md}
	class:toggle-lg={size == Size.Lg}
	{...$$restProps}
/> 
