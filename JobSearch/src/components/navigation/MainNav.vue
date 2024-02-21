<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div 
      class="flex flex-nowrap h-full border-b border-solid border-brandGray1 px-8 mx-auto"
      >
      <RouterLink 
        :to="{ name: 'Home'}" 
        class="flex h-full items-center text-xl"
      >
        Bobo Careers
      </RouterLink>
      <nav class="ml-12 h-full">
        <ul class="flex h-full list-none">
          <li 
              v-for="menuItem, index of menuItems" 
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
            >
            <RouterLink 
              :to="menuItem.url" 
              class="flex h-full items-center py-2.5"
              >
                {{ menuItem.text }}
              </RouterLink>
          </li>
        </ul>
      </nav>
      <div class="ml-auto flex h-full items-center">
        <ProfileImage v-if="isLoggedIn" />
        <ActionButton v-else @click="loginUser" text="Sign In" type="primary"/>
      </div>
    </div>
    <TheSubnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "@/stores/user";

import ActionButton from '@/components/shared/ActionButton.vue';
import ProfileImage from '@/components/navigation/ProfileImage.vue';
import TheSubnav    from '@/components/navigation/TheSubnav.vue';

export default{
  name: "MainNav",
  components : {
    ActionButton,
    ProfileImage,
    TheSubnav,
  },
  data() {
    return {
      menuItems : [
        { text  : "Teams", url  : "/"},
        { text  : "Locations", url  : "/"},
        { text  : "Life at Bobo Corp", url  : "/"},
        { text  : "How We hire", url  : "/"},
        { text  : "Students", url : "/"},
        { text  : "Jobs", url : "/jobs/results"},
      ],
    };
  },
  computed: {
		...mapState(useUserStore, ["isLoggedIn"]),
    headerHeightClass() {
      return {
        "h-16"  : !this.isLoggedIn,
        "h-32"  : this.isLoggedIn,
      };
    },
  },
	methods	: {
		...mapActions(useUserStore, ["loginUser"]),
	}
} 
</script>