import { Component,Input,input,computed ,Output, EventEmitter,output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import {User} from './user.model'
const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
// selectedUser = signal(DUMMY_USERS[randomIndex]);
// imagePath = computed(()=>'assets/users/'+this.selectedUser().avatar)
// @Input({required:true}) id!:string;
// @Input({required:true}) avatar!:string;
// @Input({required:true}) name!:string;;
@Input({required:true}) user!:User;
@Input({required:true})selected!:boolean;
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
