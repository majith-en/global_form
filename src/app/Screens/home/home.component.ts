import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  labelDatas: any[];
  selectDatas: any[];
  radioDatas: any[];
  checkDatas: any[];
  rangeDatas: any[];
  formDatas: any;
  formName: any;

  constructor() { }

  ngOnInit(): void {
    this.labelDatas = [
      {labels: 'First Name', type: 'text'}, 
      {labels: 'Last Name', type: 'text'},
      {labels: 'File Upload', type: 'file'},
      {labels: 'Email', type: 'email'},
      {labels: 'Password', type: 'password'},
      {labels: 'Select Color', type: 'color'}
    ]

      this.selectDatas = [
        {lables: 'Select Cars', lists: [{data: 'car1', value: 'car1'}, {data: 'car2', value: 'car2'}, {data: 'car3', value: 'car3'}, {data: 'car4', value: 'car4'}]},
        {lables: 'Select Bikes', lists: [{data: 'bike1', value: 'bike1'}, {data: 'bike2', value: 'bike2'}, {data: 'bike3', value: 'bike3'}, {data: 'bike4', value: 'bike4'}]}
      ]

      this.radioDatas = [
        {labels: 'Male', value: 'male', checked: true},
        {labels: 'Female', value: 'female', checked: false},
        {labels: 'Others', value: 'others', checked: false}
      ]

      this.checkDatas = [
        {labels: 'Checkbox1', value: 'checkbox1', checked: true},
        {labels: 'Checkbox1', value: 'checkbox1', checked: false}
      ]

      this.rangeDatas = [
        {labels: 'Price', minValue: '5', maxValue: '100'}
      ]

      this.formName= 'personalForm'

  }

}
