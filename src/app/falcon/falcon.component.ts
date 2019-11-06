import { Component, OnInit } from '@angular/core';
declare var jquery:any;  // 追加
declare var $: any;
var OUT = "";
@Component({
  selector: 'app-falcon',
  templateUrl: './falcon.component.html',
  styleUrls: ['./falcon.component.css']
})

export class FalconComponent implements OnInit {
  OUTE = "";
  inputText() {
    function curl() {
      $.ajax({
        type: "GET",
        url: "//teem.pythonanywhere.com/falcon",
        async: false
      }).done(function (msg) {
        console.log("CURL: " + msg);
        OUT = msg;
      });
      return OUT
    }
    this.OUTE = curl()
}
//  function curl() {
  constructor() { }
 // inputText() {
//    var OUT = "";
//    function curl() {
//      $.ajax({
    //        type: "GET",
//    url: "//teem.pythonanywhere.com/falcon", 
//       async: false
 //    }).done(function (msg) {
 //       console.log("CURL: " + msg);
 //       OUT = msg;
 //     });
   //   return OUT
   // }

  ngOnInit() {
}
}