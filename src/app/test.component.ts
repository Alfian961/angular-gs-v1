import { Component, Input } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  name = 'Ryan';

  hiss() {
    let audio = new Audio();
    alert('Bully the cat');
    audio.src = 'images/hiss.mp3';
    audio.load();
    audio.play();
  }
}
