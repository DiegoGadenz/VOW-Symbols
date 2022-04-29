import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SymbolIcon } from 'src/app/models/symbol-icon.model';

@Component({
  selector: 'app-symbol-picker',
  templateUrl: './symbol-picker.component.html',
  styleUrls: ['./symbol-picker.component.scss']
})
export class SymbolPickerComponent implements OnInit {

  public symbols: SymbolIcon[];

  private config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'center-modal modal-lg modal-dialog-centered'
  };

  @ViewChild('template', { static: true }) public elementView: ElementRef;


  public symbolSelected: SymbolIcon;

  @Output()
  public close = new EventEmitter<SymbolIcon>();

  public modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) { }

  public ngOnInit(): void {
    this.populateSymbols();
    this.modalRef = this.modalService.show(this.elementView, this.config);
  }

  private populateSymbols(): void {
    this.symbols = [
      { name: 'Piramide', icon: 'pyramid.png', description: 'Logo depois da queda inicial' },
      { name: 'Mãos', icon: 'give.png', description: 'Logo antes do primeiro encontro' },
      { name: 'Treva', icon: 'darkness.png', description: 'A esquerda no primeiro encontro' },
      { name: 'Viajante', icon: 'treveler.png', description: 'Na Sala chamada "Coleção". Antes do segundo encontro' },
      { name: 'Braços abertos', icon: 'worship.png', description: 'Ultimo andar do segundo encontro. Após matar o boss. Cristal na esquerda, sala na direita' },
      { name: 'Luz', icon: 'light.png', description: 'Primeira sala com o cristal que ativa os jump puzzles. Direita' },
      { name: 'Quadrado', icon: 'stop.png', description: 'Terceira sala com o cristal das plataformas. Abaixo do bau secreto' },
      { name: 'Guardião', icon: 'guardian.png', description: 'Após o terceiro encontro. Cristal escondido na esquerda entre as estatuas' },
      { name: 'Estaca', icon: 'kill.png', description: 'Area final onde tem varias plataformas e rampas. Sala na Direita' },
      { name: 'Vazio', icon: 'void.png', description: '' },
    ]
  }

  public closeModal() {
    this.close.emit(this.symbolSelected);
    this.modalRef.hide();
  }

  public iconSelected(symbol) {
    this.symbolSelected = symbol;
    this.closeModal();
  }


  private iconsPath = '/VOW-Symbols/assets/symbols/';

  public iconPath(symbol): string {
    return this.iconsPath + symbol.icon;
  }


}
