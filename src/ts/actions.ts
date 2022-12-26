
export default {
    async getShopsFromAPI(){
        const response = await fetch('http://localhost:8080/flowers/api/v1/flower_shops')
        return response.json()
    }
}
