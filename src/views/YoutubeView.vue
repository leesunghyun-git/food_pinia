<template>
    <div class="container">
        <div class="row">
            <input type="text" size=20 class="input-sm" v-model="title" @keyup.enter="find()"/>
            <button type="button" class="btn btn-sm btn-warning" @click="find()">검색</button>
        </div>
        <div class="row">
            <div class="col-md-6" v-for="(vo,index) in data" :key="index">
                <div class="thumbnail">
                    <iframe :src="`https://youtube.com/embed/${vo.id.videoId}`" style="width:440px;height:360px"></iframe>
                    <div class="caption">
                        <p v-html="vo.snippet.title"></p>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>
<script setup>
import {ref,onMounted} from 'vue';

const title = ref('부산')
const data = ref([])
const find = async()=>{
    console.log(title.value)
    try{
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${title.value}&type=video&key=AIzaSyCZWV9UA3sN3BNqHig5EvKkwmDOIfCjOmY`
        )
        const result=await response.json()
        console.log(result.items)
        data.value=result.items
    }catch(error)
    {
        console.log("error",error)
    }
}

onMounted(()=>{
    find('부산')
})
</script>
<style scoped>
    .row {
	margin: 0px auto;
	width: 960px;
    }
    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .a-link{
        cursor:pointer;
    }
</style>