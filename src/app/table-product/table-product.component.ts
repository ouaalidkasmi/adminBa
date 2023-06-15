import { Component, OnInit, ViewChild} from '@angular/core';
import { DialogProductService } from '../dialog-product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { tables } from './tab';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs';






@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})


export class TableProductComponent implements OnInit {
  
  aaa:any=[];
  


  displayedColumns: string[] = ['id', 'titre', 'price', 'category', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  


  constructor(private api : DialogProductService, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.getAllProducts();

  }

  getAllProducts(){
    
    this.api.getProduct().pipe(map((res)=>{
      const aa: any[]=[];
      for(const key in res){
        if(res.hasOwnProperty(key)){
        aa.push({...res[key], ik:key})
      }
    }
return aa;
    })).subscribe({
      next:(aa)=>{
        console.log(aa)
       
        this.dataSource = new MatTableDataSource(aa);

          
this.dataSource.paginator= this.paginator;
this.dataSource.sort= this.sort

},
      error:(err)=>{
        alert("error while fetching ")
      }
    })
  }

 deletePro(ik : string){
  this.api.deleteProduct(ik)
  .subscribe({
    next: (res)=>{
      alert("product Deleted Successfully")
    },
    error:()=>{

      alert("error while deleting the product")
    }
  })

 }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 editProduct(row : any){
this.dialog.open(DialogComponent, {
  data : row
})
 }
 


}
