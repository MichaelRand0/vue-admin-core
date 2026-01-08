<script setup lang="ts">
import { Text } from '@ui/Text';
import type { BarStepItemType } from './types';

interface Props {
    steps: BarStepItemType[]
    value: number;
}

const props = withDefaults(defineProps<Props>(), {
    steps: () => [],
    value: () => 1
})
</script>
<template lang="html">
    <div :style="{ width: steps.length * 120 + 'px' }" class="steps">
        <div v-for="(item, i) in steps"
            :class="['steps__item', value === i ? 'steps__item_current' : '', value > i ? 'steps__item_prev' : '']">
            <div class="steps__item-index">
                <Text :style="{ opacity: value <= i ? 1 : 0 }" font="Roboto-500" size="12">{{ i + 1 }}</Text>
                <icon-mdi:check v-if="value > i" />
            </div>
            <Text class="steps__item-label" font="Roboto-400" size="12">{{ item.label }}</Text>
        </div>
    </div>
</template>
<style lang="scss">
.steps {
    display: flex;
    align-items: baseline;

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex: 1 1;
        height: 75px;

        &-index {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            border: 2px solid $color-brand-light;
            background: $color-brand-grey;
            border-radius: 100px;
            color: white;
            line-height: 32px;
            margin-bottom: 4px;
            position: relative;

            &::after {
                content: "";
                width: ad-clamp(50, 70);
                height: 2px;
                position: absolute;
                left: 140%;
                background: white;
            }

            svg {
                position: absolute;
            }
        }

        &-label {
            color: $color-brand-grey;
        }

        &:last-child {
            .steps__item-index {
                &::after {
                    display: none;
                }
            }
        }

        &_current {
            .steps__item-index {
                background: white;
                color: $color-brand-light;
            }

            .steps__item-label {
                color: white;
            }
        }

        &_prev {
            .steps__item-index {
                background: $color-brand-light;

                &::after {
                    background: $color-brand-light;
                }
            }

            .steps__item-label {
                color: $color-brand-light;
            }
        }
    }
}
</style>