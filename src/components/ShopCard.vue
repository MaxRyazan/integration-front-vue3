<template>
    <div class="inline">
        <div class="description_container">
            <h2>{{ shop.shopTitle }}</h2>
            <p>{{ shop.openTime.slice(0, 5) }} - {{ shop.closingTime }}</p>
            <p>
                {{
                    shop.grade === 'JUST_BAD' ? '&#9733; &#9733;' :
                    shop.grade === 'NEUTRAL' ? '&#9733; &#9733; &#9733;' :
                    shop.grade === 'GOOD' ? '&#9733; &#9733; &#9733; &#9733;' :
                    shop.grade === 'VERY_GOOD' ? '&#9733; &#9733; &#9733; &#9733; &#9733;' : '&#9733;'
                }}
            </p>
            <p>{{ shop.location }}</p>
            <button @click="nextPhoto(shop)">Листать фотографии</button>
        </div>
        <div class="slider_container">
            <div class="slider_outer">
                <div class='inline' :id=createId(shop)>
                    <div v-for="path in shop.imagePath" :key="path" class="for_image">
                        <img :src="showImage(path)" alt="" class="slider_img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Shop from "@/ts/classes";
import {defineProps, PropType} from 'vue'
import slider from '@/js/slider.js'

defineProps({
    shop:{
        type: Object as PropType<Shop>,
        required: true
    }
})
const showImage = (path: string) => require('@/photos/' + path);
const nextPhoto = (shop: Shop) => slider.slide(shop.id)
const createId = (shop: Shop) => 'id' + shop.id

</script>
