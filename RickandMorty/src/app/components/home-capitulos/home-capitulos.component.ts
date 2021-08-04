import { element } from 'protractor';
import { Component, OnInit } from '@angular/core'
import { ConsultasService } from '../../services/consultas.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-home-capitulos',
  templateUrl: './home-capitulos.component.html',
  styles: [
  ]
})
export class HomeCapitulosComponent implements OnInit {

  capitulo:string = "";
  capituloVacio:string = "";
  page_buscar=1;

  //ngx-Pagination
  resultadoPeticion=[];
  page = 1;
  total = 0;
  perPage = 20;



  constructor( private _consultasService : ConsultasService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
      //Leer los parametros de la tabla al cambiar la pagina
      this.route.queryParams.subscribe(params => {
      this.page = parseInt(params.page, 10) || 1;
      this.getAllCapitulos(this.page,this.capitulo)
      window.scrollTo(0, 0);
    });
  }

  //Funcion iniciar paginado 1
  getAll(page:number, termino)
  {
    this.page = 1;
    this.getAllCapitulos(page, termino)
  }

  getAllCapitulos(page:number, termino){

    //almacenar el nombre de la variable a buscar
    this.capitulo = termino;
    //consumo del servicio
    this._consultasService.getAllCapitulos(page, termino).subscribe((respuesta:any)=>{
      this.resultadoPeticion = respuesta.results;
      //Alamcenamos el total de capitulos
      this.total = respuesta.info.count;
    });
    //Luego de la consulta dejamos el imput vacio
    (document.getElementById("buscadorCapitulo") as HTMLInputElement).value = "";

  }

  //Se re-asigna la URL y se obtendrá la información usando la nueva página.
  pageChanged(page) {
    this.page = page;
    const queryParams: Params = {page};
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams
      }
    );
    this.getAllCapitulos(this.page, this.capitulo);
  }

}
