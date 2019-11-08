import { Component, OnInit } from '@angular/core';
import {imagen} from '../imagen';
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  constructor() { }

  imagenes : imagen[] = [];

  ngOnInit() {

    this.imagenes.push(new imagen('https://i.blogs.es/aa1b9a/luna-100mpx/450_1000.jpg','prueba'));
  }

}
