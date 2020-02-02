import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Toast from './toast';
import plugin from './plugin';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-toast', Toast);
Vue.use(plugin);
new Vue({
    el: "#app",
    created() {
    },
    data: {
        loading1: false,
        message: "zhang666"
    },
    methods: {
        showToast() {
            this.$toast("消息发送成功", {
                position:"middle",
                closeButton: {
                    text: "知道了",
                    callback() {
                        console.log("用户说他知道了");
                    }
                },
                autoClose:false,
                autoCloseDelay: 1
            });
        }
    }
})