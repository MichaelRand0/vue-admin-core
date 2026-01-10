<template lang="html">
    <AuthLayoutForm :title="$t('auth.login_title')">
        <Input :label='$t("auth.email")' />
        <Input :label='$t("auth.password")' />
        <Button variant="only-text">{{ $t("auth.password_forget") }}</Button>
        <ButtonCheckbox class="form__checkbox">
            <LinkSmart :links="{ terms: 'https://www.google.com/', policy: 'https://www.youtube.com/' }"
                path="auth.policy" />
        </ButtonCheckbox>
        <Button class="form__submit-btn" variant="default">{{ $t("auth.login") }}</Button>
        <template #footer>
            <Text color="white" size="21" font="Roboto-400">{{ $t("auth.no_account") }}&nbsp;</Text>
            <RouterLink to="/registration">
                <Text hover color-preset="primary" size="21">{{ $t("auth.register") }}</Text>
            </RouterLink>
        </template>
    </AuthLayoutForm>
</template>
<script setup lang="ts">
import { AuthLayoutForm } from '@ui/AuthLayoutForm';
import { Button } from '@ui/Button';
import { ButtonCheckbox } from '@ui/ButtonCheckbox';
import { Input } from '@ui/Input';
import LinkSmart from '@ui/LinkSmart/LinkSmart.vue';
import { Text } from '@ui/Text';

</script>
<style lang="scss">
.form {
    &__checkbox {
        margin-top: ad-clamp(16, 24);
    }

    &__submit-btn {
        width: 100%;
        margin-top: ad-clamp(24, 32);
    }
}
</style>