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
export class AppComponent {
  items = [
    { isEmpty: false, svgURL: 'assets/rectangle-example.svg' },
    { isEmpty: false, svgURL: 'assets/rectangle-example.svg' },
    { isEmpty: true, svgURL: 'assets/empty-rectangle.svg' },
    { isEmpty: false, svgURL: 'assets/rectangle-example.svg' },
    { isEmpty: false, svgURL: 'assets/rectangle-example.svg' },
    { isEmpty: false, svgURL: 'assets/rectangle-example.svg' },
    { isEmpty: false, svgURL: 'assets/rectangle-example.svg' },
    { isEmpty: false, svgURL: 'assets/rectangle-example.svg' },
    { isEmpty: false, svgURL: 'assets/rectangle-example.svg' },
    { isEmpty: false, svgURL: 'assets/rectangle-example.svg' },
    { isEmpty: false, svgURL: 'assets/rectangle-example.svg' },
    { isEmpty: false, svgURL: 'assets/rectangle-example.svg' },
    { isEmpty: false, svgURL: 'assets/rectangle-example.svg' },
    { isEmpty: true, svgURL: 'assets/empty-rectangle.svg' },
  ];

  triangleURL = 'assets/triangle.svg';
}
