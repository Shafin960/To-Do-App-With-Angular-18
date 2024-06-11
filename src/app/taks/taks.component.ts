import { Component, Input } from '@angular/core';
import { SingletaskComponent } from '../singletask/singletask.component';
import { NewTaskComponent } from '../new-task/new-task.component';

type NewTask={
  title: string,
  summary: string,
  date: string,
}

@Component({
  selector: 'app-taks',
  standalone: true,
  imports: [SingletaskComponent, NewTaskComponent],
  templateUrl: './taks.component.html',
  styleUrl: './taks.component.css'
})

export class TaksComponent {
  @Input() id!:string;
  @Input() name ?: string;
  isAddingTask =false;
  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selecteduserTaks(){
    return this.dummyTasks.filter((task)=> task.userId === this.id);
  }

  onCompleteTask(id: string){
    this.dummyTasks=this.dummyTasks.filter((task) => task.id !== id );
  }

  onStartAddTask(){
    this.isAddingTask=true;
  }

  onCancelTask(){
    this.isAddingTask=false;
  }
  onAddTask(taskData: NewTask){
    console.log(taskData);
    this.dummyTasks.push({
      id: new Date().toString(),
      userId: this.id,
      title: taskData.title,
      summary:
        taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask=false;
  }
}
