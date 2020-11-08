import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['../../assets/uploads/banner1.png','../../assets/uploads/banner3.png','../../assets/uploads/banner4.png','../../assets/uploads/banner5.png'];
  image = ['../../assets/uploads/organic.jpg','../../assets/uploads/ganesh.png','../../assets/uploads/healthy.jpg','../../assets/uploads/hardin.jpg','../../assets/uploads/payment.jpg'];
  img = ['../../assets/uploads/NNP3945-1130x400-13thaug.png','../../assets/uploads/NNP3946-1130x400-13thaug.png','../../assets/uploads/NNP3947-1130x400-13thaug.png','../../assets/uploads/NNP3948-1130x400-13thaug.png','../../assets/uploads/NNP3949-1130x400-13thaug.png','../../assets/uploads/NNP3950-1130x400-13thaug.png'];
  

}

