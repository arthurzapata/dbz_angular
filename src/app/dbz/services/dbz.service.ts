import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    
    public characters : Character[] = [
        { name:'Goku', power:10000  },
        { name:'Vegeta', power:9000  },
        { name:'Krilin', power:1400  },
      ];
  
      NewCharacter(character:Character):void{
        this.characters.push(character);
        console.log(character);
      }
  
      DeleteCharacter(index:number):void{
        this.characters.splice(index,1);
        console.log('eliminando: '+ index);
      }

    constructor() { }
}