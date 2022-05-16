import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-jyoti',
  templateUrl: './jyoti.component.html',
  styleUrls: ['./jyoti.component.css']
})
export class JyotiComponent implements OnInit {
  
  title='task2';
  formdata={
    parentData: "Data is passed from parent to child",
    name: 'Jyoti',
    age: '18',
    gender: 'Female',
    designation: 'Haye',
    bio: 'Town'
  }
  constructor() { }

  ngOnInit(): void {
   
  }
  Getdata(value:any)
  {
    alert(value);
  
  }

}
