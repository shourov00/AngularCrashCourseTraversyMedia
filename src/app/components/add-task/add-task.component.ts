import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../../Task"
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription

  constructor(private uiService: UiService) {
    // setting a subscription to watch value changes
    this.subscription = this.uiService.onToggle()
      .subscribe((value) => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // emit form data to parent task component
    this.onAddTask.emit(newTask)

    this.text = "";
    this.day = "";
    this.reminder = false;

  }

}