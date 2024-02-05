<template>
    <form 
        action="#" 
        class="flex h-12 w-full items-center rounded-3xl border border-solid border-brandGray3"
				@submit.prevent="searchForJobs"
    >
        <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3"/>
        <div 
            class="flex flex-1 flex-nowrap h-full text-base font-light"
        >
            <div class="flex h-full flex-1 relative items-center pr-3">
                <label for="role" class="absolute left-0 -top-10 cursor-pointer">Role</label>
                <TextInput 
                    v-model="role" 
										id="role"
                    placeholder="Software Engineer" 
                />
            </div>
            
            <span 
                class="flex items-center h-full border-l border-r border-brandGray3 bg-brandGray2 px-3"
            >
                in
            </span>
            <div class="flex h-full flex-1 relative items-center pl-3">
                <label for="location" class="absolute left-0 -top-10 cursor-pointer">Where?</label>
                <TextInput 
                    v-model="location"
										id="location"
                    placeholder="Log Angeles"
                />
            </div>
        </div>
        <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
    </form>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import TextInput from '@/components/shared/TextInput.vue';

export default {
    name        :   "JobSearchForm",
    components  : { ActionButton, TextInput },
    data() {
        return {
            role        :   "",
            location    :   "",
        }
    },
    methods : {
        updateRole(inputValue) {
            this.role = inputValue;
        },
        updateLocation(inputValue) {
            this.location = inputValue;
        },
				searchForJobs(){
					this.$router.push({
						name : "JobResults",
						query: {
							role	:	this.role, 
							location	:	this.location,
						}
					});
				},
    },
};
</script>