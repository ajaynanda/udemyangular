import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sucessalert',
  templateUrl: './sucessalert.component.html',
  styleUrls: ['./sucessalert.component.css']
})
export class SucessalertComponent implements OnInit {
serverid:Number=7
serverStatus:String='online'
allowserver:Boolean=false
createserver:String='No server Created'
serverName:String='This is ngmodel two way binding'
user:String='Ajay Nanda T'
arraylog:any=[]
showsecret=false
  sers: String=''
  

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.allowserver=true
    },3000)
  }
server(){
  this.allowserver=true
  this.createserver='Server Has Been Created ' + 'and Server name is ' + this.serverName
}
//event 
ser(event:any){
this.sers=event.target.value
}
//ngstyle
getcolor(){
 return this.serverStatus==='online'?'green':'red'
}
toggle(){
  this.showsecret=!this.showsecret
  this.arraylog.push(this.arraylog.length +1)
}
}
