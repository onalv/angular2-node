import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {MessageInputComponent} from "./message-input.component";
import {MessageComponent} from "./message.component";
import {MessagesComponent} from "./messages.compontent";
import {MessageListComponent} from "./message-list.component";
import {MessageService} from "./message.service";

@NgModule({
    declarations: [
        MessageComponent,
        MessagesComponent,
        MessageInputComponent,
        MessageListComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        MessageService
    ]
})
export class MessageModule {

}