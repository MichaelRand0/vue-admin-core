<template lang="html">
    <div class="form">
        <Text font="Roboto-500" size="44" color="white" tag="div">{{ $t("auth.login_title") }}</Text>
        <div class="form__item">
            <Input :label='$t("auth.email")' />
            <Input :label='$t("auth.password")' />
            <Button variant="only-text">{{ $t("auth.password_forget") }}</Button>
            <ButtonCheckbox>

            </ButtonCheckbox>
        </div>
        <div class="form__item">

        </div>
    </div>
</template>
<script setup lang="ts">
import { Button } from '@ui/Button';
import { ButtonCheckbox } from '@ui/ButtonCheckbox';
import { Input } from '@ui/Input';
import { Text } from '@ui/Text';


</script>
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
}
</style>