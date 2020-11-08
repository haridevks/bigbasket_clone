import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homekitchen',
  templateUrl: './homekitchen.component.html',
  styleUrls: ['./homekitchen.component.css']
})
export class HomekitchenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedValue:String='';
  selectChangeHandler(event:any){
    this.selectedValue=event.target.value;
    if(this.selectedValue=="6 pcs - to Rs 250.00"){
      this.selectedValue="RS 250";
    }
    else if(this.selectedValue=='2 pcs - to Rs 75.60')
    {
      this.selectedValue="Rs 75.60";
    }
    else{
      this.selectedValue="Rs 159";
    }
    
    
  }
  selectedItem:String='';
  selectChange(event:any){
    this.selectedItem=event.target.value;
    if(this.selectedItem=="4 pcs - to Rs 144.00"){
      this.selectedItem="RS 144";
    }
    else if(this.selectedItem=='6 pcs - to Rs 250.00')
    {
      this.selectedItem="Rs 250";
    }
    else if(this.selectedItem=="2 pcs - to Rs 75.60"){
      this.selectedItem="Rs 75.60";
    }
    else{
      this.selectedItem="Rs 292";
    }
      
    }
    
  }
  


