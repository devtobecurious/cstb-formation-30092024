import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiscoverObsComponent } from './discover-obs/discover-obs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DiscoverObsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ludo';
}
