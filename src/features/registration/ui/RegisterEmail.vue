<template lang="html">
    <Input :label='$t("auth.email")' />
    <ButtonCheckbox class="form__checkbox">
        <LinkSmart :links="{ terms: 'https://www.google.com/', policy: 'https://www.youtube.com/' }"
            path="auth.policy" />
    </ButtonCheckbox>
    <Button class="form__submit-btn" variant="default">{{ $t("auth.register") }}</Button>
</template>
<script setup lang="ts">
import { Button } from '@ui/Button';
import { ButtonCheckbox } from '@ui/ButtonCheckbox';
import { Input } from '@ui/Input';
import { LinkSmart } from '@ui/LinkSmart';

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