import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main.components.html'  
})
export class MainComponent {
    /**
     *
     */
    constructor(public dbzService:DbzService) {

    }
}
