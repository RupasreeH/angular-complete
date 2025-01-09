import{NgModule} from '@angular/core'
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { CardComponent } from '../shared/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
declarations:[TasksComponent,
    TaskComponent,
    NewTaskComponent],
exports:[TasksComponent],
imports:[CommonModule, FormsModule, SharedModule]
})
export class TasksModule{}