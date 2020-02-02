import Toast from './toast'

let currentToast;
export default {
    install(Vue,options){
        Vue.prototype.$toast = function (message,toastOptions) {
            //console.log("I am toast plugin");
            if(currentToast){
                currentToast.close();
            }
            currentToast = createToast({Vue,message,propsData:toastOptions,onClose:()=>{
                console.log("组件对象被移除");
            }})

        }
    }
}

function createToast({Vue,message,propsData,onClose}){
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor(propsData);
    toast.$slots.default = [message];
    toast.$mount();
    toast.$on("beforeClose",onClose);
    document.body.appendChild(toast.$el);
    return toast;
}