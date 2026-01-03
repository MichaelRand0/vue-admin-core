<script setup lang="ts">
import { Input, type InputProps } from 'ant-design-vue';

defineOptions({
    inheritAttrs: false,
})

interface MyInputProps extends InputProps {
    label?: string;
}

const props = withDefaults(defineProps<MyInputProps>(), {

})
</script>

<template>
    <div :is="label">{{ label }}</div>
    <Input v-bind="{ ...$props, ...$attrs }" placeholder="lala" />
</template>

<style lang="scss" scoped>
@use "@styles/variables.scss" as *;
</style>
