import {
    createApp
} from 'vue'
import Base from './Base.vue'
import router from './router'
import store from './store'
import {
    Quasar
} from 'quasar'
import quasarUserOptions from './quasar-user-options'

const base = createApp(Base)

base.use(Quasar, quasarUserOptions).use(store).use(router)

base.mount('#app')