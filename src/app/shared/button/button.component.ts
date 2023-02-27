import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = "";
  @Output() notify = new EventEmitter();
  @Input() icon: string = "";
  @Input() class: string = "";
}
