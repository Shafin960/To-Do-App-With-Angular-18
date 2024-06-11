import { Component, EventEmitter, Input, Output } from '@angular/core';

type Task ={
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-singletask',
  standalone: true,
  imports: [],
  templateUrl: './singletask.component.html',
  styleUrl: './singletask.component.css'
})
export class SingletaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete= new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }
}
