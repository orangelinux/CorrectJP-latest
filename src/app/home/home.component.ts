import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../anima/index';

@Component({
  selector: 'app-home',
  moduleId: module.id.toString(),
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {
  articles = [
    {
      url: '/correctjp',
      title: '怪しい日本語ジェネレーター',
      text: '極度変換（しなさい）',
      icon: 'assets/kisama.jpeg'
    },
      {
        url: '/correctjpapp',
        title: '怪しい日本語ジェネレーター(アプリ版変換）',
        text: 'アプリと同じ変換結果となる変換が可能です。',
        icon: 'assets/kisama.jpeg'
      },
    {
      url: '/totuzennosi',
      title: '突然の死ジェネレーター',
      text: '突然の死',
      icon: 'assets/totuzennosi.jpg'
    }, {
      url: '/reverse',
      title: '怪しい日本語逆変換',
      text: '怪しい日本語を通常の日本語に戻します。',
      icon: 'assets/reverse.jpg'
    },{
      url: '/ALIEN',
      title: 'ALIENジェネレーター',
      text: 'ALIEN MANGE',
      icon: 'assets/alien.jpg'
    },{
      url: '/Falcon',
      title: 'ファルコン・パンチ',
      text: 'フルチンコ・パアン',
      icon: 'assets/Falcon.jpg'
    }, 
    {
      url: '/API',
      title: 'API',
      text: 'how to use and API example',
      icon: 'assets/API.jpg'
    },
  ]  
  constructor() { }

  ngOnInit() {
  }

}
