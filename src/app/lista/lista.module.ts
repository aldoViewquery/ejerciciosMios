import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { lenguajesComponent } from "./lenguajes/lenguajes.component";

@NgModule({
    declarations:[
        lenguajesComponent
    ],
    exports:[
        lenguajesComponent,
    ],
    imports:[
        CommonModule,
        FormsModule
    ]

})
export class listaModule{

}