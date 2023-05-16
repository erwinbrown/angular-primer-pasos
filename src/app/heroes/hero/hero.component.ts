import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {


  public name: string = 'IronMan';
  public age: number = 47;
  

  get capitalizedName():string{

       return this.name.toUpperCase();

  }

  getHeroDescription():string {

      return `${this.name} - ${ this.age }`;


  }
  changesName():void {

      this.name = 'Hulk'

  }

  changesAges():void {

      this.age = 28;
  }

  resetForm():void {

    this.name = 'IronMan';

    this.age = 47;
 
 }

}


