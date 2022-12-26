<template>
    <div v-for="shop in getShops" :key="shop.id">
        <div v-if="shop.id >=0">
            <shop-card  :shop="shop" />
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
