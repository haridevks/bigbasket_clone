import { Component, OnInit  } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { LoginComponent } from '../login/login.component';


import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit  {
  constructor(public dialog:MatDialog,private router:Router) { }
  
  ngOnInit(): void {
  }
  openDialog(){
  let dialogRef=  this.dialog.open(DialogComponent);
  dialogRef.afterClosed().subscribe(result=>{
    console.log('Dialog result:${result}');
  });
  }

  onCreate(){
    let dialogRef= this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result=>{
      console.log('Dialog result:${result}');
    });
  }
  
   
  

}
