import {Component} from "@angular/core";

@Component({
  selector :'app-server',
  templateUrl:'./server.componnent.html',
  styleUrls:['./server.component.css']
})

export class ServerComponent{
  serverID =10;
  serverStatues ='offline';

  constructor() {
    this.serverStatues =Math.random()>0.5?'online':'offline'
  }
  getServerStaues(){
    return this.serverStatues;
  }

  getColor(){
    return this.serverStatues ==='online'?'green':'red'
  }


}

