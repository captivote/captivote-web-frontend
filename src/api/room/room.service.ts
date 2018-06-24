import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { parseDates } from '../shared';
import { IRoom } from './room.interfaces';


@Injectable()
export class RoomService {
  public rooms: Map<string, IRoom> = new Map();

  constructor(private http: HttpClient) {
  }

  create(room: IRoom): Observable<IRoom> {
    return this.http
      .post<IRoom>(`/api/room/${room.name}`, room)
      .pipe(map(parseDates));
  }

  read(room: IRoom): Observable<IRoom> {
    return this.http
      .get<IRoom>(`/api/room/${room.name}_${room.owner}`)
      .pipe(map(parseDates));
  }

  /*
  update(user: IRoom, user_id?: string): Observable<IRoom> {
    return this.http
      .put<IRoom>(`/api/room${user_id == null ? '' : '/' + user_id}`, user)
      .pipe(map(parseDates));
  }

  destroy(user_id: string): Observable<{}> {
    return this.http
      .delete(`/api/room/${user_id}`);
  }
  */

  getAll(): Observable<IRoom[]> {
    return this.http
      .get<{ rooms: IRoom[] }>('/api/rooms')
      .pipe(map(rooms => rooms.rooms));
  }
}
