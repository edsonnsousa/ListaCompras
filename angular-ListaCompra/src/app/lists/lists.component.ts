import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service';
import { Lista } from '../mock-lists';

@Component({
  selector: 'app-heroes',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})

export class ListsComponent implements OnInit {
  lista: List[];
  selectedProduto: List;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(list: List): void{
    this.selectedProduto = list;
  }

  getHeroes(): void{
    this.listService.getHeroes().subscribe(lists => this.lista = lists);
  }

}
