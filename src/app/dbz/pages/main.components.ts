import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main.components.html'
})
export class MainComponent {

    constructor(private dbzService:DbzService) {}

    get characters() : Character[]{
        return [...this.dbzService.characters]
    }

    NewCharacter(character:Character):void{
        this.dbzService.NewCharacter(character);
    }

    DeleteCharacterById(id:string):void{
      this.dbzService.DeleteCharacterById(id);
    }
}
