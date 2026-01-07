<template lang="html">
    <div class="authLayout">
        <div class="authLayout__bg">
            <video loop muted autoplay src="./assets/glowing.webm"></video>
            <div class="authLayout__bg-effect"></div>
        </div>
        <div class="authLayout__container">
            <div class="authLayout__content">
                <slot />
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.authLayout {
    &__container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ad-clamp(32, 60);
    }

    &__content {
        position: relative;
        display: flex;
        justify-content: center;
        padding: ad-clamp(50, 100) ad-clamp(16, 32) ad-clamp(30, 60);
        background-color: $color-bg;
        border-radius: 10px;
        max-width: ad-clamp(430, 860);
        min-height: ad-clamp(380, 780);
        width: 100%;
    }

    &__bg {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 100%;

        &-effect {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 1;
            background: black;
            opacity: .4;
        }

        video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>