import Vue from "vue";
import VueMq from "vue-mq";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(VueMq, {
    breakpoints: {
        mobile: 450,
        tablet: 900,
        laptop: 1250,
        desktop: Infinity
    }
});
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    BootstrapVue,
    VueMq,
    render: h => h(App)
}).$mount("#app");