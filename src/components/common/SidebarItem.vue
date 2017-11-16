<template>
    <li>
        <a v-if="ifFirst" href="javascript:void(0)"><i :class="'fa '+data.iconCls+' fa-lg'"></i> <span class="nav-label">{{data.name}}</span><span v-if="data.children.length>0" class="fa arrow"></span></a>
        <a v-if="!ifFirst" :href="this.path"><i :class="'fa '+data.iconCls+' fa-lg'"></i>{{data.name}}<span v-if="data.children.length>0" class="fa arrow"></span></a>
        <ul class="nav collapse nav-second-level" :class="{'nav-third-level':!second}" v-if="data.children.length>0">
            <SidebarItem v-for="item in data.children" :key="item.id" :data="item" :ifFirst="false" :path="path+'/'+item.path"></SidebarItem>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'SidebarItem',
    props: {
        data: {
            type: Object
        },
        ifFirst: {
            type: Boolean,
            default: true
        },
        path: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            // data: data
        }
    },
    computed:{
        second: function(){
            return this.data.depth <= 0
        }
    },
    mounted() {
        // console.log(this.path)
    },
}
</script>

<style scoped></style>