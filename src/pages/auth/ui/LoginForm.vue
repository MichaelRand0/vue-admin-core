<template lang="html">
    <div>
        <Text font="Roboto-500" size="44" color="white" tag="div">{{ $t("auth.login_title") }}</Text>
        <Input :disabled="true" bordered :label='$t("auth.email")' />
    </div>
</template>
<script setup lang="ts">
import { Input } from '@ui/input';
import { Text } from '@ui/text';


</script>
<style lang="scss"></style>