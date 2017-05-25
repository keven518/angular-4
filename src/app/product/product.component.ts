import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {

    this.products = [
      new Product(1,'第一个商品',1.99,3.5,'这是第一个商品,我是柯文1',['电子产品','硬件设备']),
      new Product(2,'第二个商品',1.99,2.5,'这是第一个商品,我是柯文 ',['电子产品','硬件设备']),
      new Product(3,'第三个商品',1.99,4.5,'这是第一个商品,我是柯文3',['音响']),
      new Product(4,'第四个商品',1.99,1.5,'这是第一个商品,我是柯文4',['电子产品','硬件设备']),
      new Product(5,'第五个商品',1.99,3.5,'这是第一个商品,我是柯文5',['家具']),
      new Product(6,'第六个商品',1.99,1.5,'这是第一个商品,我是柯文6',['图书'])
    ]

    this.products.push(new Product(7,'第7个商品',1.99,1.5,'这是第一个商品,我是柯文7',['图书']))

  }

}

export class Product {
  
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}