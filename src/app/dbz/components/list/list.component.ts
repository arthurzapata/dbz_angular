import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() public charact : Character[] = [
    { name:'Trunks', power:1900  }
  ];

  @Output()
  public onIndex: EventEmitter<number>= new EventEmitter();

  onDelete(index:number):void{
      console.log(index);
      this.onIndex.emit(index);
  }
}
