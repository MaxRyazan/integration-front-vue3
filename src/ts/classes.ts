class Shop {
    public id: number;
    public closingTime: string;
    public grade: number;
    public location: string;
    public openTime: string;
    public shopTitle: string
    public imagePath: string[]

    constructor(id: number, closingTime: string, grade: number, location: string, openTime: string, shopTitle: string, imagePath: string[]) {
        this.id = id
        this.closingTime = closingTime
        this.grade = grade
        this.location = location
        this.openTime = openTime
        this.shopTitle = shopTitle
        this.imagePath = imagePath
    }
}

export default Shop