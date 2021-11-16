import vue from 'vue'
import router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Link from '@/components/Link.vue'
import Login from '@/components/Login.vue'
import Registrasi from '@/components/registrasi.vue'
import Navbar from '@/components/Navbar.vue'

vue.use(router)

function configRoutes() {
    return [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/registrasi',
            name: 'Registrasi',
            component: Registrasi
        },
        {
            path: '/link',
            name: 'Link',
            component: Link
        },
        {
            path: '/Navbar',
            name: 'Navbar',
            component: Navbar
        }
    ]
}

const link = new router({
    mode: "history",
    routes: configRoutes(),
});
export default link;