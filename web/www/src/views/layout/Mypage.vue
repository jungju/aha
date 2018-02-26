<template lang="pug">
    .wrapper
        header
            EuiHeader
        main.container
            router-view
        
</template>

<script>
    import EuiHeader from '~/views/layout/Header.vue';
    import EuiFooter from '~/views/layout/Footer.vue';
    export default {
        data() {
            return {

            };
        },
        methods: {

        },
        components: {
            EuiHeader,
            EuiFooter
        },
    }
</script>

<style lang="scss">

</style>
