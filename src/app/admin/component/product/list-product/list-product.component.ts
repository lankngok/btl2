import { ProductService } from './../../../../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listPro:any =[]

  constructor(private proService:ProductService) { }

  ngOnInit(): void {
    this.getAllFromService();
  }
  getAllFromService():void{
    this.proService.getAll().subscribe((data)=>{
      this.listPro = data;
    })
  }
}

