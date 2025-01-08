import { Component,Input,input,computed ,Output, EventEmitter,output} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);

interface User {
  id:string;
  avatar:string;
  name:string
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
// selectedUser = signal(DUMMY_USERS[randomIndex]);
// imagePath = computed(()=>'assets/users/'+this.selectedUser().avatar)
// @Input({required:true}) id!:string;
// @Input({required:true}) avatar!:string;
// @Input({required:true}) name!:string;
@Input({required:true}) user!:User;
@Output() select = new EventEmitter();
//select = output<string>();
// avatar = input.required<string>();
// name = input.required<string>();

//  imagePath= computed(()=>{
//   return 'assets/users/'+ this.avatar();
// });
get imagePath(){
  return 'assets/users/'+ this.user.avatar;
}

onSelectUser(){
 // const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
//  this.selectedUser = DUMMY_USERS[randomIndex];
//this.selectedUser.set(DUMMY_USERS[randomIndex]);

this.select.emit(this.user.id);
}
}
