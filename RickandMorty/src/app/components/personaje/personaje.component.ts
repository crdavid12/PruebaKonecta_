import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultasService } from '../../services/consultas.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styles: [
  ]
})
export class PersonajeComponent implements OnInit {

  url:any;
  resultadoPeticion:any[] =[];

  constructor(private _activatedRoute : ActivatedRoute,
              private _consultasService : ConsultasService) {
      //Captura de parametros Url
      this._activatedRoute.params.subscribe(paramas =>{
        this.url = paramas['url'];
      });

      this.capturaDatos(this.url)
  }

  ngOnInit(): void {
  }

  capturaDatos(url:any){
    this._consultasService.getPersonaje(url).subscribe((res:any)=>{
      this.resultadoPeticion = res;
      console.log("datos= ", this.resultadoPeticion);
    })
  }

}
