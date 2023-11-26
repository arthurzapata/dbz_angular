import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
// console.log(uuid());
@Injectable({providedIn: 'root'})
export class DbzService {

    public characters : Character[] = [
        { id: uuid(), name:'Goku', power:10000  },
        { id: uuid(), name:'Vegeta', power:9000  },
        { id: uuid(), name:'Krilin', power:1400  },
      ];

      NewCharacter(character:Character):void{

        const obj : Character = { id:uuid(),...character};
        this.characters.push(obj);
        console.log(obj);
      }

      // DeleteCharacter(index:number):void{
      //   this.characters.splice(index,1);
      //   console.log('eliminando: '+ index);
      // }

      DeleteCharacterById(id:string):void{
        this.characters= this.characters.filter(character =>character.id !== id);
        console.log('eliminando: '+ id);
      }

    constructor() { }
}
