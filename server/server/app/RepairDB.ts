import { queryCallback } from 'mysql';
import { connection } from './db';
import { Matiere } from './models';
import {Repair} from './models';



 export function getRepairs(callback: queryCallback){
        return connection.query('SELECT repair.ID, repair_type, repair_cost,repair_date, Type from repair inner join car on repair.car_ID=car.ID', callback); 
}

export function getRepairsById(id:number,callback:queryCallback){
        return connection.query('SELECT repair.ID, repair_type, repair_cost, repair_date, Type from repair inner join car on repair.car_ID=car.ID where car.ID=?',[id],callback);
}

export function createRepair(id: number,type: string,cost: number,callback:queryCallback){
        return connection.query('Insert into repair(repair_type,repair_cost,car_ID) values(?,?,?)',[type,cost,id],callback);
}

export function editRepair(id:number, description: string, cost: number, callback: queryCallback){
        return connection.query("Update repair SET repair_type=?, repair_cost=? WHERE ID=?",[description,cost, id],callback); 
}

export function deleteRepair(id: number, callback:queryCallback){
        return connection.query('Delete from repair WHERE ID = ?', id,callback);
}

