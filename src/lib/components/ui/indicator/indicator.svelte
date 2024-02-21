<script lang="ts">
    import { Color, type ColorStrings } from "$lib/enums/color.enum";
    import { Horizontal, type HorizontalStrings} from "$lib/enums/horizontal.enum";
    import { Vertical, type VerticalStrings} from "$lib/enums/vertical.enum";
 
    export let color: Color | ColorStrings = Color.Default;
    export let horizontal: Horizontal | HorizontalStrings = Horizontal.End;
    export let vertical: Vertical | VerticalStrings = Vertical.Top;
    export let avatar: boolean = false;
</script>

<div class="indicator"
    class:avatar={avatar}
>
    <span class="indicator-item badge"
        class:badge-neutral={color == Color.Neutral}
        class:badge-primary={color == Color.Primary}
        class:badge-secondary={color == Color.Secondary}
        class:badge-info={color == Color.Info}
        class:badge-accent={color == Color.Accent}
        class:badge-warning={color == Color.Warning}
        class:badge-error={color == Color.Error}
        class:indicator-start={horizontal == Horizontal.Start}
        class:indicator-center={horizontal == Horizontal.Center}
        class:indicator-end={horizontal == Horizontal.End}
        class:indicator-top={vertical == Vertical.Top}
        class:indicator-middle={vertical == Vertical.Middle}
        class:indicator-bottom={vertical == Vertical.Bottom}
    >
        <slot name="badge" />
    </span> 
    <slot />
</div>