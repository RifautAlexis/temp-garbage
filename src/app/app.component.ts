import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'test-position';

  meetingRooms = signal('green');
  openSpaceRooms = signal('green');
  waitingRooms = signal('green');
  laboRooms = signal('green');

  ngOnInit(): void {
    setInterval(() => {
      this.meetingRooms.set(this.chooseColor(Math.floor(Math.random() * 3) + 1));
      this.openSpaceRooms.set(this.chooseColor(Math.floor(Math.random() * 3) + 1));
      this.waitingRooms.set(this.chooseColor(Math.floor(Math.random() * 3) + 1));
      this.laboRooms.set(this.chooseColor(Math.floor(Math.random() * 3) + 1));
    }, 5000);
  }

  chooseColor(randomNumber: number): string {
    switch (randomNumber) {
      case 1:
        return 'green';
      case 2:
        return 'yellow';
      case 3:
        return 'red';

      default:
        return 'green';
    }
  }
}
