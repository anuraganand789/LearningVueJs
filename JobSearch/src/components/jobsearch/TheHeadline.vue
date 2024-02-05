<template>
    <section class="mb-16">
        <h1 class="mb-14 text-8xl font-bold tracking-tighter"> 
            <span :class="['Word', actionClasses]"> {{ action }} </span> <br/>
            for everyone</h1>
        <h2 class="text-3xl font-light">Find your next job at Bobo Corp.</h2>
    </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";

export default {
    name    :   "TheHeaderLine",
    data() {
        return {
            action      : "build",
            interval    :   0,
            actions     :   ["build", "create", "design", "code"],
        };
    },
    computed    : {
        actionClasses() {
            return this.action
        }
    },
    created() {
        this.changeTitle();
    },
    beforeUnMount() {
        console.log("before unMount called", this.interval);
        clearInterval(this.interval);
    },
    methods : {
        changeTitle() {
            this.interval = setInterval(() => {
                this.action = nextElementInList(this.actions, this.action);
            }, 3000);
        }
    }
}
</script>

<style scoped>

.Word {
    text-transform: capitalize;
}
.build {
    color : #1a73e8;
}

.create {
    color : #34a853;
}

.design {
    color : #f9ab00;
}

.code {
    color : #d93025;
}
</style>