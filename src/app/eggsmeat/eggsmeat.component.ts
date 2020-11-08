import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eggsmeat',
  templateUrl: './eggsmeat.component.html',
  styleUrls: ['./eggsmeat.component.css']
})
export class EggsmeatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedValue:String='';
  selectChangeHandler(event:any){
    this.selectedValue=event.target.value;
    if(this.selectedValue=="6 pcs Rs 54.00"){
      this.selectedValue="Rs 54 ";
    }
    if(this.selectedValue=="5X6 pcs Multipack - Rs 270.00"){
      this.selectedValue="Rs 270";
    }
    else if(this.selectedValue=="4X6 pcs Multipack - Rs 216.00"){
      this.selectedValue="Rs 216 ";
    }
    
  }
}
