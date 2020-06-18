import {Component} from "@angular/core";

@Component({
  selector :'app-server',
  templateUrl:'./server.componnent.html',
  styleUrls:['./server.component.css']
})

export class ServerComponent{
  serverID =10;
  serverStatues ='offline';

  getServerStaues(){
    return this.serverStatues;
  }

}

