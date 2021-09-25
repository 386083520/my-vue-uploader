import Vue from 'vue'
import uploader from '../src'
import App from './App.vue'

Vue.use(uploader)

new Vue({
    render(createElement) {
        return createElement(App)
    }
}).$mount('#app')
