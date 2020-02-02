import Toast from './toast'
export default {
    install(Vue,options){
        Vue.prototype.$toast = function (message,newsoptions) {
            //console.log("I am toast plugin");
            let Constructor = Vue.extend(Toast);
            console.log(newsoptions);
            let toast = new Constructor({
                propsData:{
                    closeButton:newsoptions.closeButton
                }
            });
            toast.$slots.default = [message];
            toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}