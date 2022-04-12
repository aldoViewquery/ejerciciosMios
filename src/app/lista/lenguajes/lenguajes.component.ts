import { Component } from "@angular/core";
import { Form } from '@angular/forms';

interface Lenguajes{
    nombreLenguaje:string,
    descripcionLenguaje:string
}

@Component({
    selector:'app-lenguajes',
    templateUrl:'./lenguajes.component.html'
})

export class lenguajesComponent{
    
    lenguaje:Lenguajes[]=[
        {
           nombreLenguaje:'Php',
           descripcionLenguaje:'especializado para web' 
        },
        {
            nombreLenguaje:'java',
            descripcionLenguaje:'se usa en todo'
        },
        {
            nombreLenguaje:'python',
            descripcionLenguaje:'se usa  en todo'
        }
    ];
    nuevoLenguaje:Lenguajes={
        nombreLenguaje:'',
        descripcionLenguaje:''
    }
    agregar(){
        this.lenguaje.push(this.nuevoLenguaje);
        this.nuevoLenguaje={
            nombreLenguaje:'',
            descripcionLenguaje:''
        }
    }
}