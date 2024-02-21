import "@/index.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import router from "@/router";
import App from './App.vue';


library.add(faSearch);

createApp(App)
		.use(createPinia())
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app');
