import { Component } from '@angular/core';
import { CharacterComponent } from '../character/character.component';
import { HomeComponent } from '../home/home.component';
import { SafnajComponent } from "../safnaj/safnaj.component";
import { CommonModule } from '@angular/common';
import { VoteServiceService } from '../vote-service.service';

@Component({
  selector: 'app-srilanka',
  imports: [CharacterComponent, SafnajComponent , CommonModule],
  templateUrl: './srilanka.component.html',
  styleUrl: './srilanka.component.scss'
})
export class SrilankaComponent {
  enemies: Array<string> = ['0', '1', '2', '3'];
  constructor(private voteService : VoteServiceService) {

   }

  ngOnInit() {
  }

  removeSafnaj(id: any) {
    const i = this.enemies.indexOf(id);
    if (i !== -1) {
      this.enemies.splice(i, 1);
    }
    this.voteService.setVoters(1);    
 
  }
}
