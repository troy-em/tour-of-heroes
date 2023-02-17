import { Injectable } from '@angular/core';
import {Hero} from './hero'
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id == id)!;
    this.messageService.add(`We grabbed hero with id of ${id}`);
    return of(hero);
  }


  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES)
    this.messageService.add("The Hero Service Fetched Some Heroes")
    return heroes;
  }
}
