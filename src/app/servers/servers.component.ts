import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  listOfServers= ["test server", "dev server", "prod server", "my server"]

  constructor() { }

  ngOnInit() {
  }

  GetServerInput(data){
    console.log(data)
    this.listOfServers.push(data)
  }

}