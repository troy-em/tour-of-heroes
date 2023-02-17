import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void{
    this.getHeroes()
  }

  onSelected(hero: Hero): void {
    this.messageService.add(`You selected hero with id of ${hero.id} and name ${hero.name}`)
    console.log(`Hero ${hero.id} selected`);
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(x => {
        console.log(x);
        this.heroes =x;
      })
  }

}
