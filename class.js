class  PenDrive{
    constructor(capacity,color,price){
        this.capacity = capacity;
        this.color = color;
        this.price=price;
    }
}

const ignite = new PenDrive('36GB','blue',500);
console.log(ignite);

const hp = new PenDrive("12 GB",'Black',1200)
console.log(hp);


