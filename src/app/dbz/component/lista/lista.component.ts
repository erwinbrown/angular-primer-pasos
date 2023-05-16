import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../../interface/character.interface';


@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaComponent {

  private _characterList: Character[] = [{id:'a', name: 'xxx', power: 1}];
  
  constructor(){}


  @Input() 
  set characterList(characteres: Character[]) {
   
    this._characterList = [...characteres];
      
      
  }


  get characterListar(): Character[] { 
   
    return this._characterList;
  }

  @Output() 
  public deleteLineDbz = new EventEmitter<string>();
    
  getIndexOption(id: string){


      this.deleteLineDbz.emit(id);

  }
 


}
