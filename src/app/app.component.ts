import { Component } from '@angular/core';
import { Chocolate } from 'src/Chocolate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPweb';

  chocolate : Chocolate;
  chocolates: Array<Chocolate>;

  constructor(){
    this.chocolate = new Chocolate();
    this.chocolates = new Array<Chocolate>();
    
  }

  inserirChocolate(){
    this.chocolates.push(this.chocolate);
    this.chocolate = new Chocolate();
  }

  removerChocolate(nomeChocolate: Chocolate){
    const index = this.chocolates.findIndex(
      chocolate => chocolate === nomeChocolate
    );
    this.chocolates.splice(index, 1);
  }

  // editarChocolate(choco: Chocolate): void {
  //   const index = this.chocolates.findIndex(
  //     chocolate => chocolate === this.chocolate
  //   );
  //   this.chocolates[index] = this.chocolate;
  //   this.chocolate = new Chocolate();
  // }

  editarChocolate(chocolateEditado: Chocolate){
    this.chocolate = chocolateEditado;
  }


  // editarChocolate(choco: Chocolate): void {
  //   const index = this.chocolates.findIndex(p => p.nome === choco.nome);
  //   this.chocolates[index] = choco;
  // }

  listarChocolates(){
    return this.chocolates;
  }
}
