import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Add this


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Now these are recognized
  templateUrl: './app.component.html',
})
export class AppComponent {}