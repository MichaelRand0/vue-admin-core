<template lang="html">
    <AuthLayoutForm :title="$t('auth.register_title')">
        <template #header>
            <BarSteps :value="0" :steps="steps" />
        </template>
        <Input :label='$t("auth.email")' />
        <template #footer>
            <Text color="white" size="21" font="Roboto-400">{{ $t("auth.have_account") }}&nbsp;</Text>
            <RouterLink to="login">
                <Text hover color-preset="primary" size="21">{{ $t("auth.login") }}</Text>
            </RouterLink>
        </template>
    </AuthLayoutForm>
</template>
<script setup lang="ts">
import { AuthLayoutForm } from '@ui/AuthLayoutForm';
import { BarSteps } from '@ui/BarSteps';
import { Input } from '@ui/Input';
import { Text } from '@ui/Text';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const steps = [
    {
        id: `email`,
        label: t('auth.email_short')
    }, {
        id: `verification`,
        label: t('auth.email_verification')
    },
    {
        id: `data`,
        label: t('auth.data')
    },
    {
        id: `finish`,
        label: t('auth.finish')
    }]

</script>
<style lang="scss">
.form {
    .steps {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: ad-clamp(10, 20);
    }
}
</style>