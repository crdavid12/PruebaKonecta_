import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../services/consultas.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxPaginationModule, PaginatePipe, PaginationControlsComponent, PaginationControlsDirective } from 'ngx-pagination';




@Component({
  selector: 'app-home-personajes',
  templateUrl: './home-personajes.component.html',
  styles: [
  ]
})
export class HomePersonajesComponent implements OnInit {

  personaje:string = "";
  personaje_vacio: string = "";
  page_buscar=1;


  //ngx-Pagination
  resultadoPeticion=[];
  page = 1;
  total = 0;
  perPage = 20;

  constructor( private _consultasService : ConsultasService,
              private route: ActivatedRoute,
              private router :Router) {
  }

  ngOnInit(): void {
    //Leer los parametros de la tabla al cambiar la pagina
    this.route.queryParams.subscribe(params => {
      this.page = parseInt(params.page, 10) || 1;
      this.getAllPersonajes(this.page, this.personaje)
      window.scrollTo(0, 0);
    });


  }


  //Funcion iniciar paginado 1
  getAll(page:number, termino)
  {
    this.page = 1;
    this.getAllPersonajes(page, termino)
  }



  getAllPersonajes(page:number, termino){

    //almacenar el nombre de la variable a buscar
    this.personaje = termino;
    //consumo del servicio
      this._consultasService.getAllPersonajes(page, termino).subscribe((res: any)=>{
        this.resultadoPeticion = res.results;
        //Alamcenamos el total de capitulos
        this.total = res.info.count;
    });
    //Reset campo buscar
    (document.getElementById("buscadorPersonaje") as HTMLInputElement).value = "";

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
    this.getAllPersonajes(this.page, this.personaje);
  }



}
