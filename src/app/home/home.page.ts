import { Component, Renderer2, ViewChild } from '@angular/core';
import { Animation, AnimationController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('blocks') blocks: any;
  @ViewChild('background') background: any;
  public options: Array<any> = [

    { icon: 'person-add-outline', text: "Indicar Amigos" },
    { icon: 'phone-portrait-outline', text: "Recarga do Celular" },
    { icon: 'wallet-outline', text: "Depositar" },
    { icon: 'options-outline', text: "Ajustar Limite" },
    { icon: 'help-circle-outline', text: "Me Ajuda" },
    { icon: 'barcode-outline', text: "Pagar" },
    { icon: 'lock-open-outline', text: "Bloquear Cartão" },
    { icon: 'card-outline', text: "Cartão Virtual" },

  ];

  public slidesOptions: any = { slidesPerView: 3, freeMode: true };

  public items: Array<any> = [

    { icon: 'help-circle-outline', text: 'Me Ajuda' },
    { icon: 'person-outline', text: 'Perfil' },
    { icon: 'cash-outline', text: 'Configurar Conta' },
    { icon: 'card-outline', text: 'Configurar Cartão' },
    { icon: 'phone-portrait-outline', text: 'Configuração do App' }
    
  ];

  initialStep: number = 0;
  private maxTranslate: number;
  private animation: Animation;

  constructor(
    private animationCtrl: AnimationController,
    private platform: Platform,
    private renderer: Renderer2
    ) {
      this.maxTranslate = this.platform.height() - 200;
    }

    ngAfterViewInit(){
      this.createAnimation();
    }

    toggledBlocks(){

      this.initialStep = this.initialStep === 0 ? this.maxTranslate : 0;

      this.animation.direction(this.initialStep === 0 ? 'reverse' : 'normal').play();

      this.setBackgroundPpacity();
    }

    createAnimation(){
      this.animation = this.animationCtrl.create()
      .addElement(this.blocks.nativeElement)
      .duration(300)
      .fromTo('transform', 'translateY(0)', 'translateY(${this.maxTranslate}px)');
    }

    setBackgroundPpacity(){
      this.renderer.setStyle(this.background.nativeElement, 'opacity', this.initialStep === 0 ? '0' : '1')
    }

    fixedBlocks(): boolean{
      return this.initialStep === this.maxTranslate;
    }

    //PAREI AOS 48:25 igor remas criando interface nubank

}
