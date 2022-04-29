import { Component, Input, OnInit } from '@angular/core';
import { SymbolIcon } from 'src/app/models/symbol-icon.model';

@Component({
  selector: 'app-card-symbol',
  templateUrl: './card-symbol.component.html',
  styleUrls: ['./card-symbol.component.scss']
})
export class CardSymbolComponent implements OnInit {

  private iconsPath = '/VOW-Symbols/assets/symbols/';

  @Input()
  public symbol: SymbolIcon;

  constructor() { }

  ngOnInit(): void {
  }

  public get iconPath(): string {
    return this.iconsPath + this.symbol.icon;
  }

}
