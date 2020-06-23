import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer =false;
  serverCreation ='no server was created'
  private serverName: string;

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreation ='Server created'
  }
  onUpdateServerName(event:Event){
   this.serverName =(<HTMLInputElement>event.target).value;
  }

}
