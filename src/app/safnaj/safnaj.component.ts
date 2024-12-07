import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-safnaj',
  imports: [],
  templateUrl: './safnaj.component.html',
  styleUrl: './safnaj.component.scss'
})
export class SafnajComponent {
  @Input() id!: string;
  @Output()
  removeSafnaj = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  crushSafnaj() {
    this.removeSafnaj.emit(this.id);
    console.log("Goomba id", this.id)
  }
}
