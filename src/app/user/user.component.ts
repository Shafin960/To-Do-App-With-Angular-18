import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../model/dummy_user';

const randomIndex= Math.floor(Math.random() *DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: {
    id: string;
    avatar: string;
    name: string;
  };
  @Input() selected!: boolean;
  @Output() select =new EventEmitter<string>();


  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
