<template lang="html">
    <div>
        <AuthLayout>
            <Text font="Roboto-500" size="44" tag="div">{{ $t("shared.hello") }}</Text>
        </AuthLayout>
    </div>
</template>
<script setup lang="ts">
import Text from '@ui/text/Text.vue';
import AuthLayout from './AuthLayout.vue';

</script>
<style lang="scss"></style>