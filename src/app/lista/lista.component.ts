import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


 

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent implements OnInit {

  constructor(private restService: RestService) { }
  displayedColumns: any[] = ['Dni','NombreCompleto','FchNac','FchIngreso'];
  dataSource =[];
  ngOnInit(): void {
    this.cargarLista();
  }
  // ApMaterno: "Villarte"
  // ApPaterno: "Ortuño"
  // Dni: "95342888"
  // FchIngreso: "03/03/2021"
  // FchNac: "03/03/1987"
  // IdPersonal: 1
  // Nombre1: "Johnny"
  // Nombre2: "Alejandro"
  // NombreCompleto: null
  cargarLista(): void {
    this.restService.get("https://localhost:44380/api/persona/Listar").subscribe((res:any)=>{
      this.dataSource =res;
    })

  }

  
}
 
