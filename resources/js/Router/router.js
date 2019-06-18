import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import PostDetails from "../components/PostDetails.vue";
const routes = [{ path: "/post-details", component: PostDetails }];

const router = new VueRouter({
    routes // short for `routes: routes`
});

export default router;
