import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserInputAppComponent } from "./user-input-app/user-input-app.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, UserInputAppComponent]
})
export class AppComponent {
  title = 'classrom_angular';
}
