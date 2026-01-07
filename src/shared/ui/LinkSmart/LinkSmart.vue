<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import parseTranslation from '../../lib/helpers/parseTranslation';
import { Link } from '@ui/Link';
import { Text } from '@ui/Text';

const props = defineProps<{
    path: string;
    links: Record<string, string>;
}>();

const { t } = useI18n();
const parts = computed(() => parseTranslation(t(props.path)));
</script>

<template>
    <span>
        <template v-for="(part, index) in parts" :key="index">
            <slot v-if="part.isMatch && part.key" name="link" :text="part.text">
                <Link :href="links[part.key] ?? '#'">{{ part.text }}</Link>
            </slot>
            <Text tag="span" v-else size="16" font="Roboto-400">{{ part.text }}</Text>
        </template>
    </span>
</template>