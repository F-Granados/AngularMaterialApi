import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestService } from '../rest.service';
 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {
  id = '';
  constructor(private fb: FormBuilder, private RestService: RestService,
    private route: ActivatedRoute,
   ) { }
  profileForm = this.fb.group({

    Nombre1: [''],
    Nombre2: [''],
    ApPaterno: [''],
    ApMaterno: [''],
    FchNac: [''],
    FchIngreso:[''],
    Dni: ['']
  });
  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap
     if(params.id>0){
       this.cargarData(params.id);
     }
      

    });

  }

  cargarData(id: string): void{
    this.RestService.get("https://localhost:44380/api/persona/ListarId/"+id).subscribe((res: any) =>{
    console.log(res);
    const returnjson: any[] = Array.of(res);
        this.profileForm.patchValue({
          Nombre1:res.Nombre1,
          Dni:res.Dni
          
        });
    

    })

  }
  onSubmit() {
   
    // alert('sadasd');
    console.log('form data is ', this.profileForm.value);
    if (this.profileForm.valid) {

      this.RestService.post("https://localhost:44380/api/persona/Registrar",JSON.stringify(this.profileForm.value)).subscribe((res: any) =>{
        console.log("resultado");
      console.log(res.resultado);
      

      })
    }
    else {
      alert('Complete los campos');
    }
  }

}
