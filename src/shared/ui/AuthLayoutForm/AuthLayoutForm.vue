<script setup lang="ts">
import { Text } from '@ui/Text';

interface Props {
    title?: string
}

const props = defineProps<Props>();

</script>

<template lang="html">
    <div class="form">
        <div class="form__header">
            <slot name="header" />
            <Text v-if="props.title" font="Roboto-500" size="44" color="white" tag="div">{{ props.title }}</Text>
        </div>
        <div class="form__item">
            <slot />
        </div>
        <div class="form__item form__footer">
            <slot name="footer" />
        </div>
    </div>
</template>
<style lang="scss">
.form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ad-clamp(270, 540);

    &__item {
        width: 100%;

        .field {
            margin-bottom: ad-clamp(12, 16);
        }
    }

    &__footer {
        display: flex;
        justify-content: center;
    }
}
</style>