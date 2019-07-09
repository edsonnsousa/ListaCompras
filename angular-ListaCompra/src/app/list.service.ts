import { Injectable } from '@angular/core';
import { List } from './list';
import {Lista} from './mock-lists'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private messageService: MessageService){}

  getHeroes(): Observable<List[]>{
    this.messageService.add('ListService: fetched lists');
    return of(Lista);
  }
}
