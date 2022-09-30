import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input() listOfServers;
  server:string;

  // @ViewChild('changecolor') changecolor!: ElementRef;

  @Output() myInputMessage:EventEmitter<string>= new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  addServer(){
    if(this.server){
    this.myInputMessage.emit(this.server);
  }
}

}