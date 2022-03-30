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
    alert('Oh no! The cat is mad!');
    audio.src = 'images/hiss.mp3';
    audio.load();
    audio.play();
  }

  pat() {
    let audio = new Audio();
    alert('Awww, its so cute!');
    audio.src = 'images/cat.mp3';
    audio.load();
    audio.play();
  }
}
