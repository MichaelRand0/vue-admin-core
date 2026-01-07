<script setup lang="ts">
import { Text } from '@ui/Text';
import type { BarStepItemType } from './types';

interface Props {
    steps: BarStepItemType[]
}

const props = withDefaults(defineProps<Props>(), {
    steps: () => []
})
</script>
<template lang="html">
    <div class="steps">
        <div v-for="(item, i) in steps" class="steps__item">
            <div class="steps__item-index">{{ i + 1 }}</div>
            <Text font="Roboto-400" size="14" color="white">{{ item.label }}</Text>
        </div>
    </div>
</template>
<style lang="scss">
.steps {}
</style>