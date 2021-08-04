import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultasService } from '../../services/consultas.service';



@Component({
  selector: 'app-capitulo',
  templateUrl: './capitulo.component.html',
  styles: [
  ]
})
export class CapituloComponent implements OnInit {

  resultadoPeticion:any[] =[];
  url:any;

  constructor(private _activatedRoute : ActivatedRoute,
              private _consultasService : ConsultasService) {

      //Captura de parametros Url
      this._activatedRoute.params.subscribe( params =>{
      this.url = params['url'];
    })

    this.capturaDatos(this.url)
  }

  ngOnInit(): void {
  }

  capturaDatos(url:any){
    this._consultasService.getCapitulo(url).subscribe((res:any)=>{
      this.resultadoPeticion = res;
      console.log("datos= ", this.resultadoPeticion);
    })


  }


}
