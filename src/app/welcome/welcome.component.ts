import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') nameKey!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
