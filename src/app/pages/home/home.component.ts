import { Component, OnInit } from '@angular/core';
import { SymbolIcon } from 'src/app/models/symbol-icon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public symbols: SymbolIcon[];

  public ngOnInit(): void {
    this.populateSymbols();
  }

  private populateSymbols(): void {
    this.symbols = [
      { description: '', name: 'Plano Ascendente', icon: 'ascendant-plane.png' },
      { description: '', name: 'Russia', icon: 'black-garden.png' },
      { description: '', name: 'Mancha', icon: 'black-hearth.png' },
      { description: '', name: 'Coxinha', icon: 'enter.png' },
      { description: '', name: 'Pink Floyd', icon: 'commune.png' },
      { description: '', name: 'Treva', icon: 'darkness.png' },
      { description: '', name: 'Cálice', icon: 'drink.png' },
      { description: '', name: 'Terra', icon: 'earth.png' },
      { description: '', name: 'Frota', icon: 'fleet.png' },
      { description: '', name: 'Buraco no peito', icon: 'grieve.png' },
      { description: '', name: 'Mãos', icon: 'give.png' },
      { description: '', name: 'Guardião', icon: 'guardian.png' },
      { description: '', name: 'Savathun', icon: 'hive.png' },
      { description: '', name: 'Estaca', icon: 'kill.png' },
      { description: '', name: 'Cérebro', icon: 'remember.png' },
      { description: '', name: 'Luz', icon: 'light.png' },
      { description: '', name: 'Flor', icon: 'love.png' },
      { description: '', name: 'Piramide', icon: 'pyramid.png' },
      { description: '', name: 'DLC', icon: 'savathun.png' },
      { description: '', name: 'Renegados', icon: 'scorn.png' },
      { description: '', name: 'Quadrado', icon: 'stop.png' },
      { description: '', name: 'Torre', icon: 'tower.png' },
      { description: '', name: 'Viajante', icon: 'treveler.png' },
      { description: '', name: 'Testemunha', icon: 'witness.png' },
      { description: '', name: 'Verme', icon: 'worm.png' },
      { description: '', name: 'Braços abertos', icon: 'worship.png' },
      { description: '', name: 'Vazio', icon: 'void.png' },
    ]
  }

}
