<template>
    <div v-for="(shop, index) in getShops" :key="index">
        <div v-if="shop.id >=0">
            <shop-card :shop="shop" :index="index"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import {computed, onMounted} from "vue";
import ShopCard from '@/components/ShopCard.vue'

onMounted(async () => { state.shops = await store.dispatch('getShopsFromAPI') })

const store = useStore()
const state = store.state
const getShops = computed(() => {
    return state.shops
})


</script>
