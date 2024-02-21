<script lang="ts">
    import { LoadingType, type LoadingTypeStrings } from "$lib/enums/loading.enum";
    import { Color, type ColorStrings } from '$lib/enums/color.enum';
    import { Size, type SizeStrings } from "$lib/enums/size.enum";

    export let type: LoadingType | LoadingTypeStrings = LoadingType.Spinner;
    export let color: Color | ColorStrings = Color.Neutral;
    export let size: Size | SizeStrings = Size.Md;
</script>

<span 
    class="loading {$$props.class}"
    class:loading-spinner={type == LoadingType.Spinner}
    class:loading-dots={type == LoadingType.Dots}
    class:loading-ring={type == LoadingType.Ring}
    class:loading-ball={type == LoadingType.Ball}
    class:loading-bars={type == LoadingType.Bars}
    class:loading-infinity={type == LoadingType.Infinity}
    class:text-neutral={color == Color.Neutral}
    class:text-primary={color == Color.Primary}
    class:text-secondary={color == Color.Secondary}
    class:text-accent={color == Color.Accent}
    class:text-success={color == Color.Success}
    class:text-info={color == Color.Info}
    class:text-warning={color == Color.Warning}
    class:text-error={color == Color.Error}
    class:size-xs={size == Size.Xs}
    class:size-sm={size == Size.Sm}
    class:size-md={size == Size.Md}
    class:size-lg={size == Size.Lg}
></span>

