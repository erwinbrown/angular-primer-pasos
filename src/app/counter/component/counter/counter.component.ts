import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({

     selector: 'app-counter',
     template:   `<h3>contador: {{ counter }}</h3>
     <button (click)="increaseBy(+1)">+1</button>
     <button (click)="increaseBy(-1)">-1</button>
     <button (click)="increaseBy(0)">reset</button>`,
     changeDetection: ChangeDetectionStrategy.OnPush
   
})


export class CounterComponent {



     public counter:number = 10;

  

   increaseBy(v: number): void{

       v != 0 ? this.counter += v : this.counter = 10;
    

 }
    


}

