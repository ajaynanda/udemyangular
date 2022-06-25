import { Component } from "@angular/core";
@Component({
    selector:'[app-warn]',
    template:`
    <div>
        <h1 class="m-5">Warning alert made</h1>   
        <p class="m-5">user is {{serverStatus}} with id {{serverid}}
    </div>
    `,
    styles:[`h1{
        color:red;
    }`]
})
export class WarningAlert{
serverid:Number=10
serverStatus:String='offline'
}