import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteServiceService {
   votes = 0;
  constructor() { }

  getVotes() {
    return this.votes;
  }

  setVoters(vote : number){
     this.votes = +1;
  }
}
