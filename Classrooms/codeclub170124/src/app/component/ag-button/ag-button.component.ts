import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ag-button',
  standalone: true,
  imports: [],
  templateUrl: './ag-button.component.html',
  styleUrl: './ag-button.component.scss'
})
export class AgButtonComponent {
  @Input() ButtonText: string = '';
onClick() {
;
}

}
