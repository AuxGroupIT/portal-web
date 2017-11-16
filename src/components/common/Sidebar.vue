<template>
    <nav class="navbar-default navbar-static-side">
        <div class="sidebar-collapse">
            <ul class="nav metismenu" id="side-menu">
                <li class="nav-header">
                    <div class="dropdown profile-element">
                        <span>
                            <img alt="image" class="img-circle" src="static/profile_small.jpg"></span>
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="clear">
                                <span class="block m-t-xs"> <strong class="font-bold">游客</strong>
                                </span>
                                <span class="text-muted text-xs block">
                                    快捷操作 <b class="caret"></b>
                                </span>
                            </span>
                        </a>
                        <ul class="dropdown-menu animated fadeInRight m-t-xs">
                            <li>
                                <a href="#/portal">登出</a>
                            </li>
                        </ul>
                    </div>
                    <div class="logo-element">AUX</div>
                </li>

                
                <li>
                    <router-link to="/portal">
                        <i class="fa fa-files-o"></i>
                        <span class="nav-label">门户页</span>
                    </router-link>
                    <ul></ul>
                </li>
                
                <li>
                    <router-link to="/dashboard">
                        <i class="fa fa-pie-chart"></i>
                        <span class="nav-label">展示页</span>
                    </router-link>
                    <ul></ul>
                </li>
                <!-- <SidebarItem :data="data"></SidebarItem> -->
                <SidebarItem v-for="item in data.children" :key="item.id" :data="item" :path="'#'+ item.path"></SidebarItem>
            </ul>

        </div>
    </nav>

</template>

<script>
import data from './siderbar.json'
import SidebarItem from './SidebarItem'
export default {
    components: {
        SidebarItem
    },
    data() {
        return {
            data: data[0]
        }
    },
    mounted() {
    }
}
</script>

<style scoped></style>