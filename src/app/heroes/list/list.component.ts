import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
 

})
export class ListComponent {


      public heroNames: string[] = ['Hulk', 'Iron Man', 'Naruto', 'FedeLobo', 'Franco'];
      public deletedHeroe?: string;


      removeLastHeroe():void {

        this.deletedHeroe  =  this.heroNames.pop();

      }

}
