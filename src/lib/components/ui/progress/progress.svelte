<script lang="ts">
	import { Progress as ProgressPrimitive } from "bits-ui";
	import { Color, type ColorStrings } from "$lib/enums/color.enum";

	type $$Props = ProgressPrimitive.Props & {
		color?: Color | ColorStrings;
	};

	let className: $$Props["class"] = undefined;
	export let max: $$Props["max"] = 100;
	export let value: $$Props["value"] = undefined;
	export let color: $$Props["color"] = Color.Neutral;
	export { className as class };
</script>

<progress
	class="progress {className}"
	class:progress-primary={color == Color.Primary}
	class:progress-secondary={color == Color.Secondary}
	class:progress-accent={color == Color.Accent}
	class:progress-info={color == Color.Info}
	class:progress-warning={color == Color.Warning}
	class:progress-error={color == Color.Error}
	max={max}
	value={value}
>
</progress>


