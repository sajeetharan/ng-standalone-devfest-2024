import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VoteServiceService } from '../vote-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {

  votes = 0;
  @Input() name!: string;

  @Output()
  removeSafnaj = new EventEmitter<string>();

  constructor(private voteService : VoteServiceService) { }

  ngOnInit() {
  }

  jumpForCoins() {
    this.votes = this.voteService.getVotes();
  }
  jump() {
    alert(this.name + ' has jumped');
  }

  crushSafnaj(goombaId: any) {
    this.removeSafnaj.next(goombaId);
    this.votes = +1;
  }

}
