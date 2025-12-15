<template>
    <!-- View -->
    <div class="container">
        <div class="row">
            <table class="table">
                <tbody>
                    <tr>
                        <td width="30%" class="text-center" rowspan="8">
                            <img :src="vo.poster" style="width:220px;height:300px">
                        </td>
                        <td colspan="2">
                            <h3>{{ vo.name }}&nbsp;<span style="color:orange">{{ vo.score }}</span>
                            </h3>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color:gray" width="15%">주소</td>
                        <td width="55%">{{ vo.address }}</td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color:gray" width="15%">전화</td>
                        <td width="55%">{{ vo.phone }}</td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color:gray" width="15%">음식 종류</td>
                        <td width="55%">{{ vo.type }}</td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color:gray" width="15%">가격대</td>
                        <td width="55%">{{ vo.price }}</td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color:gray" width="15%">영업시간</td>
                        <td width="55%">{{ vo.time }}</td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color:gray" width="15%">주차</td>
                        <td width="55%">{{ vo.parking }}</td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color:gray" width="15%">테마</td>
                        <td width="55%">{{ vo.theme }}</td>
                    </tr>
                </tbody>
            </table>
            <table class="table">
                <tbody>
                    <tr>
                        <td>{{ vo.content }}
                        </td>
                    </tr>
                    <tr>
                        <td class="text-right"><router-link to="/"
                                class="btn btn-sm btn-primary">목록</router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
    import { onMounted } from 'vue';
    import { useFoodStore } from '@/stores/food';
    import { useRoute } from 'vue-router';
    import { storeToRefs } from 'pinia';
    const foodStore = useFoodStore()
    const route = useRoute()
    const {food_detail:vo} = storeToRefs(foodStore)
    onMounted(async()=>{
        await foodStore.foodDetailData(route.params.fno)
    })
    // Model
    // ViewModel => MVVM
    // React VS Vue

    // action => 호출 => state
    // state에 있는 데이터를 읽어서 화면에 출력
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