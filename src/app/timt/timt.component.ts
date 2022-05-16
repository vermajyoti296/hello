import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-timt',
  templateUrl: './timt.component.html',
  styleUrls: ['./timt.component.css']
})
export class TIMTComponent implements OnInit {
  @Input() public parentData: any;
@Output() myOutput:EventEmitter<string>=new EventEmitter();
outputstring="Component1 is initialized";
  constructor() { }

  ngOnInit(): void {
    console.log(this.parentData);
  }
  DataSend()
  {
    this.myOutput.emit(this.outputstring);
  }

}
