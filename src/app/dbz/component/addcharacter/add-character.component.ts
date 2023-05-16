import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-addcharacter',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {


  public personaje: Character = {
        id: '',
        name: '',
        power: 0

  }
   
  @Output() 
  public newCharacter = new EventEmitter<Character>();

   charaterEmmiter() : void{

     let character = {...this.personaje};

     if(character.name.length == 0 ){
        return;
     }

     this.newCharacter.emit(character);


     this.personaje = {name:'', power:0};
     

   }

}
