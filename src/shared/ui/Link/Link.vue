<script setup lang="ts">
import { Text, type TextProps } from '@ui/Text';

interface Props {
    href: string;
    textProps?: TextProps
}

const props = withDefaults(defineProps<Props>(), {
    href: "#",
    textProps: () => ({
        tag: "span",
        size: "16",
        font: "Roboto-400",
    })
})
</script>

<template>
    <a :href="props.href" target="_blank" class="link">
        <Text v-bind="textProps" color-preset="primary">
            <slot />
        </Text>
    </a>
</template>

<style lang="scss" scoped>
.link {
    &:hover {
        .text {
            color: white;
        }
    }
}
</style>
