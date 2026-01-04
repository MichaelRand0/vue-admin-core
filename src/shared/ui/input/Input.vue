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
    <div class="field">
        <div class="field__label" :is="label">{{ label }}</div>
        <Input class="field__input" v-bind="{ ...$props, ...$attrs }" :bordered="true" />
    </div>
</template>

<style lang="scss" scoped>
.field {
    &__input {
        padding: ad-clamp(6, 9) ad-clamp(9, 12);
        font-size: ad-clamp(14, 16);
    }

    &__label {
        font-size: ad-clamp(16, 20);
        color: white;
        margin-bottom: ad-clamp(4, 8);
    }
}
</style>
