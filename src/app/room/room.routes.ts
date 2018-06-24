import { Routes } from '@angular/router';

import { RoomComponent } from './room.component';
import { RoomCreateComponent } from './room-create.component';


export const roomRoutes: Routes = [
  { path: 'create', component: RoomCreateComponent },
  { path: ':name_owner', component: RoomComponent }
];
