/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import { Form, HasError, AlertError } from "vform";
import ReadMore from "vue-read-more";
import moment from "moment";
import swal from "sweetalert2";
window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
});

window.toast = toast;

Vue.use(ReadMore);

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.prototype.$userId = document
    .querySelector("meta[name='user-id']")
    .getAttribute("content");

window.Form = Form;

window.Fire = new Vue();

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

Vue.component(
    "form-component",
    require("./components/FormComponent.vue").default
);
Vue.component(
    "post-component",
    require("./components/post/PostComponent.vue").default
);
Vue.component(
    "feed-component",
    require("./components/post/FeedComponent.vue").default
);
Vue.component(
    "skills-component",
    require("./components/SkillsComponent.vue").default
);
Vue.component("comment-list", require("./components/CommentList.vue").default);
Vue.component(
    "connect-component",
    require("./components/timeline/ConnectComponent.vue").default
);
Vue.component(
    "unconnect-component",
    require("./components/timeline/UnConnectComponent.vue").default
);
Vue.component("feed", require("./components/Feed.vue").default);
Vue.component("like", require("./components/Like.vue").default);
Vue.component(
    "app-notification",
    require("./components/AppNotification.vue").default
);
Vue.component("notification", require("./components/Notification.vue").default);

Vue.filter("myDate", function(created) {
    return moment(created)
        .startOf("hour")
        .fromNow();
});
Vue.component("post-details", require("./components/PostDetails.vue").default);
Vue.component("user-avatar", require("./components/UserAvatar.vue").default);
Vue.component(
    "overview-component",
    require("./components/timeline/OverviewComponent.vue").default
);
Vue.component(
    "experience-component",
    require("./components/timeline/Experience.vue").default
);
Vue.component(
    "activities-component",
    require("./components/timeline/ActivitiesComponent.vue").default
);
Vue.component(
    "education-component",
    require("./components/timeline/Education.vue").default
);
Vue.component(
    "skills-component",
    require("./components/timeline/Skills.vue").default
);
Vue.component(
    "location-component",
    require("./components/timeline/Location.vue").default
);
Vue.component("init-component", require("./components/init.vue").default);
Vue.component(
    "connection-component",
    require("./components/Connection.vue").default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import { store } from "./store";
import router from "./Router/router.js";

const app = new Vue({
    el: "#app",
    store: store,
    router
});
