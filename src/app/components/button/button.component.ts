import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // Get the input props like react
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  // Output button click
  @Output() btnClick = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    // Passing the button clicked functions to called component
    this.btnClick.emit()
  }

}
