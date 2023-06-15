import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
//  productForm !: FormGroup;
  // formBuilder: any;


  constructor() { }

  ngOnInit(): void {
    // this.productForm = this._formBuilder.group({
    //   titre : ['', Validators.required],
    //   description : ['', Validators.required],
    //   price : ['', Validators.required],
    //   category : ['', Validators.required],
    //   quantite : ['', Validators.required],


    // })
  }
  
  // onSubmit(){
  //   if(this.reactiveForm.valid){
  //   this.api.postProduct(this.reactiveForm.value).subscribe({
  //   next : (res)=>{
  //     alert("product added ")
  //     this.reactiveForm.reset();
  //   },
  //   error : ()=> {
  //     alert("error while adding")
  //   }
    
  //   })
    
  //   }
  //     }

}
