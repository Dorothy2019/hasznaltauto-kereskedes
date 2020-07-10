import { Component, OnInit } from '@angular/core';
import { MatiereApiService } from 'src/app/services/matieres-api.service';
import { IMatiere } from 'src/app/models/models';



@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.css']
})
export class AddMatiereComponent implements OnInit {

  matieres: IMatiere= {
    id: null,
    type: '',
    licensePlate: '',
    carImg:''
  };


  constructor(private matApiSvc: MatiereApiService) {}

  createMatiere(data: IMatiere){
    this.matApiSvc.createMatiere(data);
  }

  ngOnInit() {
   }
}


