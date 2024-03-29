import { createRouter, createWebHashHistory } from "vue-router";
import HomeView         from "@/views/HomeView.vue";
import JobResultsView   from "@/views/JobResultsView.vue";
import JobView					from "@/views/JobView.vue";
import TeamsViewVue from "@/views/TeamsView.vue";

const routes = [
    {
        path        :   "/",
        name        :   "Home",
        component   :   HomeView,
    },
    {
        path        :   "/jobs/results",
        name        :   "JobResults",
        component   :   JobResultsView,
    },
		{
			name	:	"JobListing",
			path	:	"/jobs/results/:id",
			component	:	JobView,
		},
		{
			name	: "Teams",
			path	:	"/teams",
			component	:	TeamsViewVue,
		}
];

const router = createRouter({
    history : createWebHashHistory(),
    routes,
		scrollBehavior() {
			return { top : 0, left : 0, behavior : "smooth"};
		}
});

export default router;
