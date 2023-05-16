import { Component } from '@angular/core';
import { DbzService } from '../servicio/dbz.service';
import { Character } from '../interface/character.interface';



@Component({
    selector: 'app-dbz-main',
    templateUrl: 'main-page.component.html',
})

export class MainPageComponent {
    

 constructor(private dbzService: DbzService){


   

 }


 get characters(): Character[] {
    

    return  [...this.dbzService.characters];


}

deletebyId(id: string):void{

   
    this.dbzService.reciveForDelete(id);


}


addnewCharacter(character: Character):void {


   this.dbzService.reciveNewCharacter(character);

}

    
} 