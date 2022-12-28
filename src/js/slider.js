import store from "@/store";
export  default {
    slide(id){
        const width =  document.querySelector('.for_image').clientWidth
        document.getElementById('id' + id).style.transform = 'translate(-' + width * store.state.photosCount + 'px'
        store.state.photosCount ++
        if(store.state.photosCount === 3) {
            store.state.photosCount = 0
        }
    }
}