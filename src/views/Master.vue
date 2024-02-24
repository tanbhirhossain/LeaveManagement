<template>
    <div>
        <nav-bar v-if="$route.name !== 'Login'"></nav-bar>
        <router-view v-if="$route.name !== 'Login'"></router-view>
        <router-view v-else></router-view>
        <nav-bottom v-if="$route.name !== 'Login'"></nav-bottom>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import NavBottom from '@/components/NavBottom.vue';
export default {
    name: 'Master',
    components: { NavBar, NavBottom }
}
</script>
