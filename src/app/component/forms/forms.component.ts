import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {

  globalForm: any;
  @Input() formLabel: any;
  @Input() selectLables: any;
  @Input() radioLables: any;
  @Input() checkLables: any;
  @Input() rangeLables: any;
  @Input() formDatas: any;

  constructor() { }

  ngOnInit() {
    console.log(this.formDatas, 'formNAme')
     this.globalForm  = new FormGroup({
        texts : new FormControl(''),
        file : new FormControl(''),
        email : new FormControl(''),
        password : new FormControl(''),
        color : new FormControl(''),
        select : new FormControl(''),
        radio : new FormControl(''),
        checkbox : new FormControl(''),
        range : new FormControl('')
    })

    console.log(this.formLabel, 'lables')
  }

  submitData() {
    console.log(this.globalForm)
  }

}
