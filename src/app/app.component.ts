import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  server=[{type:'Server',name:'test server',content:'on load testing'}]
  title = 'udemyAngular';

  onserverAdded(eventdata:{serverName:string,serverContent:string}){
    this.server.push({
      type:'Server',
      name:eventdata.serverName,
      content:eventdata.serverContent
    })
  }
  onblueprintAdded(blueeventdata:{serverName:string,serverContent:string}){
    this.server.push({
      type:'BluePrint',
      name:blueeventdata.serverName,
      content:blueeventdata.serverContent
    })
  }
}
