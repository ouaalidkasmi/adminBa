import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogProductService } from 'src/app/dialog-product.service';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  

  constructor(private dialog : MatDialog, private api : DialogProductService) { }
  openDialog() {
    this.dialog.open(DialogComponent, {
    });
  }

  getAllProducts(){
    this.api.getProduct().subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        alert("error while fetching ")
      }
    })
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

}
