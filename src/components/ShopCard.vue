<template>
    <div>
        <p>{{ shop.shopTitle }}</p>
        <p>{{ shop.openTime }} - {{ shop.closingTime }}</p>
        <p>
            {{
                shop.grade === 'JUST_BAD' ? '&#9733; &#9733;' :
                shop.grade === 'NEUTRAL' ? '&#9733; &#9733; &#9733;' :
                shop.grade === 'GOOD' ? '&#9733; &#9733; &#9733; &#9733;' :
                shop.grade === 'VERY_GOOD' ? '&#9733; &#9733; &#9733; &#9733; &#9733;' : '&#9733;'
            }}
        </p>
        <p>{{ shop.location }}</p>
        <div v-for="path in shop.imagePath" :key="path">
            <img :src="showImage(path)" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
import Shop from "@/ts/classes";
import {defineProps, PropType} from 'vue'

defineProps({
    shop:{
        type: Object as PropType<Shop>,
        required: true
    }
})
const showImage = (path: string) => require('@/photos/' + path);

</script>
