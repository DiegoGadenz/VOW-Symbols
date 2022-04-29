import { Component, OnInit } from '@angular/core';
import { SymbolIcon } from 'src/app/models/symbol-icon.model';

@Component({
  selector: 'app-totem',
  templateUrl: './totem.component.html',
  styleUrls: ['./totem.component.scss']
})
export class TotemComponent implements OnInit {

  public symbols: SymbolIcon[];

  public selectedSymbolIndex: number;

  public showIconPicker = false;

  constructor() { }

  ngOnInit(): void {
    this.populateSymbols();
  }

  private populateSymbols(): void {
    this.symbols = [
      { name: 'Vazio', description: '', icon: 'void.png' },
      { name: 'Vazio', description: '', icon: 'void.png' },
      { name: 'Vazio', description: '', icon: 'void.png' },
    ]
  }

  public selectIconIdx(index) {
    this.selectedSymbolIndex = index;
    this.showIconPicker = true;
  }

  public setNewSymbol(symbol) {
    this.symbols[this.selectedSymbolIndex] = symbol;
    this.showIconPicker = false;
  }

}
