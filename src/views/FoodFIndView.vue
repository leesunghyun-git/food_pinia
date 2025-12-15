<template>
    <div class="container">
        <div class="row">
            <select class="input-sm" v-model="column">
                <option value="all">전체목록</option>
                <option value="address">주소</option>
                <option value="name">맛집명</option>
                <option value="type">음식종류</option>
            </select>
            <input type="text" size="20" class="input-sm" v-model="ss" @keyup.enter="find()"/>
            <button type="button" class="btn btn-sm btn-danger" @click="find()">검색</button>
        </div>
        <div class="row" style="margin-top:20px;">
            <div class="col-md-3" v-for="(vo, index) in find_data.list" :key="index">
                <div class="thumbnail">
                    <router-link class="a-link" :to="{name:'food_detail',params:{fno:vo.fno}}">
                        <img :src="vo.poster" style="width:240px;height:180px" :title="vo.address">
                        <div class="caption">
                            <p>{{ vo.name }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="row text-center" style="margin-top:20px;">
            <ul class="pagination">
                <li v-if="find_data.startPage != 1">
                    <a class="a-link" @click="pageChange(1)">&laquo;</a>
                </li>
                <li v-if="find_data.startPage > 1">
                    <a class="a-link" @click="pageChange(find_data.startPage-1)">&lt;</a>
                </li>
                <li v-for="i in range(find_data.startPage, find_data.endPage)"
                    :class="find_data.curPage == i ? 'active' : ''" :key="i">
                    <a class="a-link" @click="pageChange(i)">{{ i }}</a>
                </li>
                <li v-if="find_data.endPage < find_data.totalPage">
                    <a class="a-link" @click="pageChange(find_data.endPage+1)">&gt;</a>
                </li>
                <li v-if="find_data.endPage != find_data.totalPage">
                    <a class="a-link" @click="pageChange(find_data.totalPage)">&raquo;</a>
                </li>   
            </ul>
        </div>
    </div>
</template>
<script setup>
// 1. Route(전송된 값 얻기) / Router(이동)
// 2. store : state(데이터 저장) :storeToRefs
// 3. useFoodStore를 얻어와서 actions에 있는 함수
// 4. onMounted() : 한번 실행
//      => useEffect()
import { useFoodStore } from '@/stores/food';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { ref } from 'vue';
const foodStore=useFoodStore()
const {find_data} = storeToRefs(foodStore)
const foodFindData = async(column,page,ss)=>{
    await foodStore.foodFindData({column,page,ss})
    console.log(find_data)
}
const column = ref("all")
const ss = ref("")
onMounted(()=>{
    foodFindData('all',1,null)
})
const pageChange = (page)=>{
    foodFindData(column.value,page,ss.value)
}
const range = (start,end)=>{
    let arr = []
    let len = end-start
    for (let i=0;i<=len;i++)
    {
        arr.push(start)
        start++
    }
    return arr
}
const find = ()=>{
    foodFindData(column.value,1,ss.value)
}
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