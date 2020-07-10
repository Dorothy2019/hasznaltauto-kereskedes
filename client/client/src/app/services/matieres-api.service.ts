import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent} from '@angular/common/http';
import { IMatiere } from '../models/models';
import { Observable } from 'rxjs';

@Injectable()
export class MatiereApiService {
  constructor(private http: HttpClient, 
              private toastr: ToastrService, 
              private router: Router) { }
  
  url = 'http://localhost:3000';

  
  getMatieres() : Observable<IMatiere[]> {
    return this
      .http
      .get<IMatiere[]>(`${this.url}/matieres`, {
        headers: new HttpHeaders({
        'Cache-Control':  'no-cache,no-store, must-revalidate, post-check=0, pre-check=0',
        'Pragma': 'no-cache',
        'Expires': '0'
        })
      });
      
  }
  getMatiereById(id:number) : Observable<IMatiere>{
    let obs = this
    .http.get<IMatiere>(`${this.url}/matieres/${id}`);
    obs.subscribe(
      res => {
        console.log(res);
        this.toastr.success('Id szerint az elemek megvannak.', 'Success');
        // this.router.navigateByUrl('/matiere');
      },
      err => {
        console.log('Error occured:' , err);
        this.toastr.error(err.message, 'Error occured');
      }
    );
    return obs;
  }


 

  createMatiere(data : IMatiere) {
    this.http.post(`${this.url}/matieres`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre matière a été créer avec succès.', 'Success');
          this.router.navigateByUrl('/matiere');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }

  updateMatiere(data: IMatiere){
    this.http.put(`${this.url}/matieres/${data.id}`,data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Sikeresen frissítesre került az elem.', 'Success');
          this.router.navigateByUrl('/matiere');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }

  deleteMatiere(id : number){
    let obs =  this.http.delete(`${this.url}/matieres/${id}`);
    obs.subscribe(
        res => {
          console.log(res);
          this.toastr.success('Sikeresen törölve az adatbázisból.', 'Success');
          // this.router.navigateByUrl('/matiere');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
      return obs;
  }
}
