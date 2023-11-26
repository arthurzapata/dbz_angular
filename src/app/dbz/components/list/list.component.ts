import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() public charact : Character[] = [
    { id:'', name:'Trunks', power:1900  }
  ];

  @Output()
  // public onIndex: EventEmitter<number>= new EventEmitter();
  public onIndex: EventEmitter<string>= new EventEmitter();

  // onDelete(index:number):void{
  //     console.log(index);
  //     this.onIndex.emit(index);
  // }

    onDelete(id:string):void{
      console.log(id);
      this.onIndex.emit(id);
  }
}
