<template>
    <img
        :src="imageLink"
        class="h-8 w-8 rounded-3xl object-contain"
        alt="User Profile Image"
    />
</template>

<script>
export default {
    name : "ProfileImage",
    data() {
        return {
            imageLink : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
        };
    }
};
</script>