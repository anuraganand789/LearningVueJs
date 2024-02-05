<template>
    <h1 class="text-6xl font-bold">Job Results</h1>
    <button @click="goToHome">Go To Home</button>
</template>

<script>
export default {
    name    :   "JobResultsView",
    computed : {
        experiment() {
            console.log("this.$route");
            return "Irrelevant"; 
        },
    },
    methods : {
        goToHome() {
            this.$router.push({ name : "Home" });
        },
    },
}
</script>