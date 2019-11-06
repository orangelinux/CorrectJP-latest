import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../anima/index';
import { MatSnackBar } from '@angular/material/snack-bar';

declare var jquery:any;  // 追加
declare var $: any;
var OUT = "";
var isn = "";
var msg = "";

@Component({
  moduleId: module.id.toString(),
  selector: 'app-alien',
  templateUrl: './alien.component.html',
  styleUrls: ['./alien.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' } 
})
export class AlienComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) { }

  message = "";
  OUTE = "ここにテギヌトが出力されゑ！";
  res = "";
  maxCount = 100;
  restCount = this.maxCount;
  alertStyle = {};
  //old = [/多/g, /鳥/g, /雨/g, /両/g, /並/g, /メルカリ/g, /AQUOS/g, /aquos/g, /Aquos/g, /huaweimk/g, /あなた/g, /貴/g, /し/g, /ぶ/g, /で/g, /応/g, /ス/g, /雑/g, /貨/g, /見/g, /潰/g, /め/g, /キ/g, /ぞ/g, /舐/g, /絶/g, /対/g, /得/g, /溜/g, /達/g, /jp/g, /NHK/g, /XPERIA/g, /円/g, /LINEpay/g, /PayPay/g, /Twitter/g, /ツイッター/g, /instagram/g, /インスタ/g, /ライン/g, /LINE/g, /line/g, /風/g, /なさい/g, /強/g, /東京/g, /シリコンバレー/g, /google/g, /グーグル/g, /Google/g, /スカイツリー/g, /SKY TREE/g, /TOKYO/g, /ハ/g, /amazon/g, /アマゾン/g, /乘/g, /黑/g, /snapdragon/g, /SD/g, /PUBG/g, /労働/g, /東/g, /ラーメン/g, /🇯🇵/g, /🇰🇷/g, /🇺🇸/g, /🇬🇧/g, /🇷🇺/g, /🇩🇪/g, /🇮🇳/g, /🇿🇦/g, /🇧🇷/g, /オ/g, /愛/g, /語/g, /ぬ/g, /る/g, /iphone/g, /アイフォン/g, /だ/g, /変/g, /榮/g, /強/g, /う/g, /ハ/g, /応/g, /偉/g, /義/g, /結/g, /協/g, /調/g, /剤/g, /様/g, /セ/g, /動/g, /評/g, /ファーウェイ/g, /HUAWEI/g];
//nw = ["乡", "乌", "丽", "两", "业", "淘宝網", "HUAWEI", "HUAWEI", "HUAWEI", "ファーウェイウェイ", "貴様", "贵", "レ", "ふ", "て", '应', 'ヌ', '杂', "货", "见", "溃", "ぬ", "ギ", "そ", "舐", "绝", "对", "慧", "贮", "们", "cn", "CCTV", "HUAWEI", "人民元", "alipay", "WechatPay", "weibo", "ウェイボ", "Tiktok", "Tiktok", "wechat", "wechat", "wechat", "风", "(しなさい)", "强", "北京", "深圳", "百度", "百度", "百度", "上海中心", "shanghai tower", "上海", "八゜", "亚马逊", "亚马逊", "乘", "黑", "Kirin", "NM", "荒野行動", "極度勞動", "东", "うーメソ", "🇨🇳", "🇨🇳", "🇨🇳", "🇨🇳", "🇨🇳", "🇨🇳", "🇨🇳", "🇨🇳", "🇨🇳", "才", "爱", "语", "ゐ", "ゑ", "HUAWEI", "ファーウェイ", "た", "變", "荣", "强", "ラ", "八", "应", "伟", "义", "结", "协", "调", "剂", "樣", "乜", '动', "评", "华为技术有限公司", "华为技术有限公司"];
 // len = this.old.length;
  // TextAreaにテキストが入力されたときのハンドラ
  copyToClipboard(item) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }
  checkTXT() { 
    if (this.OUTE == '') {
      var MJ = "N";
      } else {
      var MJ = "Y";  
    }
    if (MJ == "Y") {
      if (this.OUTE == "ここにテギヌトが出力されゑ！") {
        return "F"
      } else {
        return "T"
      }
    }
    }
  tweet() {
    var turl = "https://twitter.com/intent/tweet?text=" + this.OUTE + "&url=https://correctjp.work/&hashtags=怪しい日本語ジェネレーター";
    var GE = this.checkTXT();
    if (GE == "T") {
      window.open(turl);
    } else { 
      console.log("NOT INPUTTED");
      this._snackBar.open("テキストが入力されていません。", "閉じる", {
        duration: 2000,
      });
    }
  }
  copy() {
    console.log(this.OUTE);
    var GEF = this.checkTXT();
    if (GEF == "T") {
      this.copyToClipboard(this.OUTE);
      this._snackBar.open("コピーされました: " + this.OUTE, "閉じる", {
        duration: 2000,
      });
    } else { 
      console.log("NOT INPUTED");
      this._snackBar.open("テキストが入力されていません。", "閉じる", {
        duration: 2000,
      });
    }
  }

  clear() { 
    console.log("clear");
    this.message = "";
    this.OUTE = "";

  }
  inputText() {
    function curl(MES) {
      $.ajax({
        type: "GET",
        url: "//teem.pythonanywhere.com/ALIEN",
        data: "text=" + MES,
        async: false
      }).done(function (msg) {
        console.log("CURL: " + msg);
        OUT = msg;
      });
      return OUT
    }

    if (this.message) {
      OUT = curl(this.message);
      console.log("OUT:" + OUT);
      if (!OUT) {
        console.log("OUT EMPTY");
        OUT = curl(this.message);
        console.log("EMP: " + OUT);
        this.OUTE = OUT;
        console.log("OUT EMPTY2");
        OUT = curl(this.message);
        console.log("EMP2: " + OUT);
        this.OUTE = OUT;
      } else {
        this.OUTE = OUT;
      }
    } else {
      this.OUTE = "テキストが入力されていません。";
    }
  }


  ngOnInit() {
  }

}
