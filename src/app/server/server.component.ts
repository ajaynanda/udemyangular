import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
@Output() serverCreated= new EventEmitter<{ serverName: string, serverContent: string }>()
@Output('bpCreated') blueprintCreated= new EventEmitter<{ serverName: string, serverContent: string }>()
newserverName:any
newserverContent:any
  constructor() { }
  ngOnInit(): void {
  }
onserverAdded(name:any){
this.serverCreated.emit({
  serverName:name.value,
  serverContent:this.newserverContent
})
}
onblueprintAdded(name:any){
  this.blueprintCreated.emit({
    serverName:name.value,
    serverContent:this.newserverContent
  })
}
}
