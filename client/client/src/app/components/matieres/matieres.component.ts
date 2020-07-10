import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { IMatiere } from 'src/app/models/models';
import { MatiereApiService } from 'src/app/services/matieres-api.service';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})



export class MatieresComponent implements OnInit {

  matieres: IMatiere[];

  constructor(private matApiSvc: MatiereApiService, private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    console.log('refresh');
    this.matApiSvc
      .getMatieres()
      .subscribe((data:IMatiere[]) =>{
        this.matieres = data;
        console.log(data);
      });
  }

  goToAddMatiere(){
    
    this.router.navigateByUrl('/add-matiere');
  }

  goToAddRepair(repair: IMatiere){
    this.router.navigateByUrl('/add-repair/'+repair.id);
  }

  goToUpdateMatiere(data: IMatiere){
    this.matApiSvc.getMatiereById(data.id);
    this.router.navigateByUrl('/update-matiere/'+data.id);
  }
  
  // goToEditRepair(data: Repair){
  //   this.router.navigateByUrl('/edit-repair/'+data.ID);  
  // }
 

  deleteRepair(id: number) {
    this.deleteRepair(id)
    /* .subscribe(() => {
      this.refresh();
    });
    */
  } 

  deleteMatiere(id: number) {
    this.matApiSvc.deleteMatiere(id).subscribe(() => {
      this.refresh();
    }); 
  }

 getMatiereById(id: number){
  this.matApiSvc
   .getMatiereById(id)
   /*
   .subscribe((data: Matiere[])=>{
      this.matieres= data;
      console.log(data);
    })
  */
 }

}


