import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/Index.vue';
import Deployments from '../components/Deployments.vue';
import Services from '../components/Services.vue';
import Pods from '../components/Pods.vue';
import View from '../components/View.vue';
import Nodes from '../components/Nodes.vue';


Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'Index',
            component: Index,
        },
        {
            path:'/Deployments',
            name:'Deployments',
            component: Deployments,
        },
        {
            path:'/Services',
            name:'Services',
            component: Services,
        },
        {
            path:'/Pods',
            name:'Pods',
            component: Pods,
        },
        {
            path:'/View/:pod_name',
            name:'View',
            component: View,
        },
        {
            path:'/Nodes',
            name:'Nodes',
            component: Nodes,
        },
    ],
})
