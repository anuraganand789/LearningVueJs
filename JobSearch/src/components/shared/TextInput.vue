<template>
    <input  
        type="text" 
        :value="modelValue" 
        @input="handleInput"
        class="w-full text-lg font-normal focus:outline-none cursor-pointer"
    >
</template>

<script>
export default {
    name    :   "TextInput",
    emits   : ["update:modelValue", ],
    props   : {
        modelValue   :   {
            type        :   String,
            required    :   true,
        },
    },
    methods :   {
        handleInput($event){
            this.$emit("update:modelValue", $event.target.value);
        },
    }
}
</script>