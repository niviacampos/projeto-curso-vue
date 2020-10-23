<template>
    <div>
        <div
            v-if="condition"
            class="text-center"
        >
            <v-progress-circular
                indeterminate
                color="green"
                width="5"
            />
        </div>
        <div v-if="!condition">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        props: {
            condition: { type: Boolean, requered: true },
        },
    };
</script>
