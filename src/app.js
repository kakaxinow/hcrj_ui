import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
// import Col from './col'
import Toast from './toast';
import plugin from './plugin';
import Tabs from './tabs';
import TabsHeader from './tabs-header'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPanel from './tabs-panel'
import Collapse from './collapse'
import CollapseItem from './collapse-item'


Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
// Vue.component('g-col', Col);
Vue.component('g-toast', Toast);
Vue.component('g-tabs',Tabs);
Vue.component('g-tabs-header',TabsHeader);
Vue.component('g-tabs-body',TabsBody);
Vue.component('g-tabs-item',TabsItem);
Vue.component('g-tabs-panel',TabsPanel);
Vue.component('g-collapse',Collapse);
Vue.component('g-collapse-item',CollapseItem);


Vue.use(plugin);
new Vue({
    el: "#app",
    created() {
    },
    data: {
        loading1: false,
        message: "zhang666",
        selectedTab:'finance'
    },
    methods: {
        yyy(data){
            //console.log(data);
        },
        showToast() {
            this.$toast("消息发送成功", {
                position:"bottom",
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