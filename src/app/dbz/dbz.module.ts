import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './page/main-page.component';
import { ListaComponent } from './component/lista/lista.component';
import { AddCharacterComponent } from './component/addcharacter/add-character.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [MainPageComponent, ListaComponent, AddCharacterComponent],
  exports:[
      MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
