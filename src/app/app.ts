import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogSearch } from './components/log-search/log-search';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogSearch],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('vehicle-diagnostics-dashboard');
}
