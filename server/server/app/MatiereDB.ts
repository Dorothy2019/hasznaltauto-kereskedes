import { queryCallback } from 'mysql';
import { connection } from './db';
import { Matiere } from './models';

export function createMatiereFromRow(row : any) {
 let mat : Matiere;
 mat = {
    carImg : row['Car_img'],
    id: row["ID"],
    licensePlate: row["License_plate"],
    type: row["Type"]
 };
 return mat;
}

export function getMatieres(callback: queryCallback) {
    return connection.query('SELECT * from car', callback);
}
 
export function getMatieresbyId(id: number,callback: queryCallback){
        console.log(id);
         return connection.query('Select * from car where ID=?',[id],callback);
}

export function createMatiere(matiereInst: Matiere, callback: queryCallback) {
        return connection.query('Insert into car(Type, License_plate) values(?,?)',[matiereInst.type,matiereInst.licensePlate], callback);
 }  

export function updateMatiere(id: number, type: string, callback: queryCallback){
        return connection.query("Update car SET Type=? WHERE Id=?",[type, id],callback);    
}
export function deleteMatiere(id: number, callback: queryCallback){
        connection.query('Delete from repair WHERE car_ID=?',id);
        return connection.query('Delete from car WHERE Id = ?', id,callback);
}


