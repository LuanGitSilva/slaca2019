import { Component } from '@angular/core';
import { Topico } from './topico';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ts';
  listItems = ['Apresentação', 'Comitês', 'Autores', 'Eixos temáticos', 'Trabalhos', 'Contato']; 

  showText = false;
  toggleShowText() {
    this.showText = !this.showText;
  }

  newTopic = false;
  handleNewTopic() {
    this.newTopic = !this.newTopic;
    this.sendTopic = false;
  }

  sendTopic = false;
  handleSendTopic() {
    this.sendTopic = !this.sendTopic;
    this.newTopic = false;
  }

  seeResponse = false;
  handleSeeResponse() {
    this.seeResponse = !this.seeResponse;
  }

  topico = [
    new Topico('Adriano da Silva', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat obcaecati quas dolor sunt in ipsum esse voluptatibus! Similique fugit harum asperiores dicta, voluptatum cumque ipsa labore fuga cum dignissimos nam.', 'Autor', '#eef'),
    new Topico('Carlos Henrique Santos', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat obcaecati quas dolor sunt dignissimos nam.', 'leitor', '#fff'),
    new Topico('Camila Ferreira Andrade', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat obcaecati quas dolor sunt dignissimos nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat obcaecati quas dolor sunt dignissimos nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat obcaecati quas dolor sunt dignissimos nam.', 'Coautor', '#eef'),
    new Topico('Ana Carolina', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat obcaecati quas dolor sunt dignissimos nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat obcaecati quas dolor sunt dignissimos nam.', 'Coautor', '#eef'),
  ]

  get useTopico() {
    return this.topico.map(item => item);
  }
}
