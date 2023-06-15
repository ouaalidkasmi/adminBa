import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { DialogProductService } from '../dialog-product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Categ {
  value: string;
  viewValue: string;
}

interface typ {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  categories: Categ[] = [
    {value: '1', viewValue: 'arabic Food'},
    {value: '2', viewValue: 'indian Food'},
    {value: '3', viewValue: 'iranian Food'},
  ];

  types: typ[] = [
    {value: '1', viewValue: 'Legume'},
    {value: '2', viewValue: 'Meat'},
    {value: '3', viewValue: 'Products'},
  ];

  reactiveForm!: FormGroup ;
  actionBtn : string = "save";

  constructor(private formBuilder : FormBuilder, private api : DialogProductService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<DialogComponent>) { }
  


  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      titre : ['', Validators.required],
      id : ['', Validators.required],
      type : ['', Validators.required],
      price : ['', Validators.required],
      category : ['', Validators.required],
      description : [],
      C1 : [],
      C2 : [],
      C3 : [],
      C4 : [],
      C5 : [],
      C6 : [],
      C7 : [],
      C8 : [],



    })
    if(this.editData){
      this.actionBtn= "Update";

      this.reactiveForm.controls['titre'].setValue(this.editData.titre);
      this.reactiveForm.controls['id'].setValue(this.editData.id);

      this.reactiveForm.controls['type'].setValue(this.editData.type);
      this.reactiveForm.controls['price'].setValue(this.editData.price);
      this.reactiveForm.controls['category'].setValue(this.editData.category);
      this.reactiveForm.controls['description'].setValue(this.editData.description);
      this.reactiveForm.controls['C1'].setValue(this.editData.C1);
      this.reactiveForm.controls['C2'].setValue(this.editData.C2);
      this.reactiveForm.controls['C3'].setValue(this.editData.C3);
      this.reactiveForm.controls['C4'].setValue(this.editData.C4);
      this.reactiveForm.controls['C5'].setValue(this.editData.C5);
      this.reactiveForm.controls['C6'].setValue(this.editData.C6);
      this.reactiveForm.controls['C7'].setValue(this.editData.C7);
      this.reactiveForm.controls['C8'].setValue(this.editData.C8);



    }
   
  }
 onSubmit(){
if(!this.editData){
  if(!this.reactiveForm.valid){
    this.api.postProduct(this.reactiveForm.value).subscribe({
    next : (res)=>{
      alert("product added ");
      this.reactiveForm.reset();
      this.dialogRef.close();
    
    },
    error : ()=> {
      alert("error while adding")
    }
    
    })
    
    }
}else{
  this.updateProduct()
}
  }
  updateProduct(){
    this.api.putProduct(this.reactiveForm.value, this.editData.ik)
    .subscribe({

      next:(res)=>{
        
        // for(let i in this.reactiveForm.value){
        alert("Product Updated Successfuly");
        this.reactiveForm.reset();
        this.dialogRef.close('update');
      // }
    },
      error:()=>{
        
        alert('update Failed');
      }
    })
  }

}
