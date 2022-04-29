import { Component } from '@angular/core';
import { SymbolIcon } from './models/symbol-icon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public symbols: SymbolIcon[];

  public ngOnInit(): void {
    this.populateSymbols();
  }

  private populateSymbols(): void {
    this.symbols = [
      { name: 'Plano Ascendente', icon: 'ascendant-plane.png' },
      { name: 'Russia', icon: 'black-garden.png' },
      { name: 'Mancha', icon: 'black-hearth.png' },
      { name: 'Coxinha', icon: 'enter.png' },
      { name: 'Pink Floyd', icon: 'commune.png' },
      { name: 'Treva', icon: 'darkness.png' },
      { name: 'Cáliçe', icon: 'drink.png' },
      { name: 'Terra', icon: 'earth.png' },
      { name: 'Frota', icon: 'fleet.png' },
      { name: 'Buraco no peito', icon: 'grieve.png' },
      { name: 'Mãos', icon: 'give.png' },
      { name: 'Guardião', icon: 'guardian.png' },
      { name: 'Savathun', icon: 'hive.png' },
      { name: 'Estaca', icon: 'kill.png' },
      { name: 'Cérebro', icon: 'remember.png' },
      { name: 'Luz', icon: 'light.png' },
      { name: 'Flor', icon: 'love.png' },
      { name: 'Piramide', icon: 'pyramid.png' },
      { name: 'DLC', icon: 'savathun.png' },
      { name: 'Renegados', icon: 'scorn.png' },
      { name: 'Quadrado', icon: 'stop.png' },
      { name: 'Torre', icon: 'tower.png' },
      { name: 'Viajante', icon: 'treveler.png' },
      { name: 'Testemunha', icon: 'witness.png' },
      { name: 'Verme', icon: 'worm.png' },
      { name: 'Braços abertos', icon: 'worship.png' },
      { name: 'Vazio', icon: 'void.png' },

    ]

  }
}
