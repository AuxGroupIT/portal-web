<template>
<div id="wrapper" >

    <!-- left bar-->
    <Sidebar ref="dom"></Sidebar>
    <!-- main page--> 

    <div id="page-wrapper" class="gray-bg">
        <Topbar></Topbar>
        <router-view></router-view>
    </div>

</div>
</template>

<script>
import Sidebar from './common/Sidebar.vue';
import Topbar from './common/Topbar.vue';

export default {

    components: {
        Sidebar,
        Topbar
    },
    computed:{
        
    },
    methods:{
        SmoothlyMenu() {
            if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
                $('#side-menu').hide();
                setTimeout(
                    function () {
                        $('#side-menu').fadeIn(400);
                    }, 200);
            } else if ($('body').hasClass('fixed-sidebar')) {
                $('#side-menu').hide();
                setTimeout(
                    function () {
                        $('#side-menu').fadeIn(400);
                    }, 100);
            } else {
                $('#side-menu').removeAttr('style');
            }
        }
    },
    mounted(){
        $('.navbar-minimalize').on('click', (event) => {
            event.preventDefault();
            $("body").toggleClass("mini-navbar");
            this.SmoothlyMenu();
        });
        $('#side-menu').metisMenu();
    }
}
</script>

<style scoped></style>