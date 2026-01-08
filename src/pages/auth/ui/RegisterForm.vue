<template lang="html">
    <div class="form">
        <BarSteps :value="2" :steps="steps" />
        <Text font="Roboto-500" size="44" color="white" tag="div">{{ $t("auth.register_title") }}</Text>
        <div class="form__item">
            <Input :label='$t("auth.email")' />
            <Input :label='$t("auth.password")' />
            <Button variant="only-text">{{ $t("auth.password_forget") }}</Button>
            <ButtonCheckbox class="form__checkbox">
                <LinkSmart :links="{ terms: 'https://www.google.com/', policy: 'https://www.youtube.com/' }"
                    path="auth.policy" />
            </ButtonCheckbox>
            <Button class="form__submit-btn" variant="default">{{ $t("auth.login") }}</Button>
        </div>
        <div class="form__item form__footer">
            <Text color="white" size="21" font="Roboto-400">{{ $t("auth.have_account") }}&nbsp;</Text>
            <RouterLink to="login">
                <Text hover color-preset="primary" size="21">{{ $t("auth.login") }}</Text>
            </RouterLink>
        </div>
    </div>
</template>
<script setup lang="ts">
import { BarSteps } from '@ui/BarSteps';
import { Button } from '@ui/Button';
import { ButtonCheckbox } from '@ui/ButtonCheckbox';
import { Input } from '@ui/Input';
import LinkSmart from '@ui/LinkSmart/LinkSmart.vue';
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ad-clamp(270, 540);

    &__checkbox {
        margin-top: ad-clamp(16, 24);
    }

    &__submit-btn {
        width: 100%;
        margin-top: ad-clamp(24, 32);
    }

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

    .steps {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: ad-clamp(20, 36);
    }
}
</style>