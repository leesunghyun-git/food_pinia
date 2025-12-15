import { createRouter,createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import FoodDetailView from "@/views/FoodDetailView.vue";
import FoodFIndView from "@/views/FoodFIndView.vue";
import YoutubeView from "@/views/YoutubeView.vue";
// Spring => @Controller 
const routes=[
    {
        path:'/',
        name:'home',
        component:HomeView
    },
    {
        path:'/food/detail/:fno',
        name:'food_detail',
        component:FoodDetailView
    },
    {
        path:'/food/find',
        name:'food_find',
        component:FoodFIndView
    },
    {
        path:'/youtube/find',
        name:'youtube_find',
        component:YoutubeView
    }
]


const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router