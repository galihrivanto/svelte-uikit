<script lang="ts">
    import type { Select as SelectPrimitive } from "bits-ui";
    import { Select,  SelectTrigger, SelectContent, SelectValue } from ".";
    import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

    type $$Props = SelectPrimitive.TriggerProps & {
        color?: Color | ColorStrings;
		size?: Size | SizeStrings;
		bordered?: boolean;
		ghost?: boolean;
		error?: boolean;
        placeholder?: string;
        value?: string;
        disabled?: boolean;
    };
    type $$Events = SelectPrimitive.TriggerEvents;
    interface Selected {
        value: string;
        label: string;
        disabled: boolean;
    }

    let selected: Selected | undefined = undefined;
    let className: $$Props["class"] = undefined;
	export let color: $$Props["color"] = Color.Neutral;
	export let size: $$Props["size"] = Size.Md;
	export let bordered: $$Props["bordered"] = false;
	export let ghost: $$Props["ghost"] = false;
	export let error: $$Props["error"] = false;
    export let value: $$Props["value"] = undefined;
    export let placeholder: $$Props["placeholder"] = "";
    export let disabled: $$Props["disabled"] = false;
	export { className as class };

    $: if (selected) {
        value = selected.value;
    }
</script>

<Select
    bind:selected={selected}
>
    <SelectTrigger
        color={color}
        size={size}
        bordered={bordered}
        ghost={ghost}
        error={error}
        class={className}
        {disabled}
    >
        <SelectValue placeholder={value ? value : placeholder}  />
    </SelectTrigger>
    <SelectContent>
        <slot />
    </SelectContent>
</Select>
