import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid'
import { Character } from '../interface/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public characters: Character[] = [

    {id:uuid(), name: 'Krilin', power: 1000},
    {id:uuid(), name:'Vegueta', power: 7000},
    {id:uuid(), name:'Goku', power: 9000},
    {id:uuid(), name:'Vulma', power: 100},


 ];

reciveNewCharacter(personaje: Character):void {
                 
        const newCharacter:Character = {id: uuid(), ...personaje};

   this.characters =[...this.characters, newCharacter];


}

reciveForDelete(id: string){
   
   let result  = this.characters.filter(item => item.id != id );
   this.characters = [...result];


}

  constructor() { }



}

