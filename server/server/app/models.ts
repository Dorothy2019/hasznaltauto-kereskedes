export interface Matiere{
    id: number;
    type: String;
    licensePlate: String;
    carImg: String;
  }

export interface Repair{
    id: number;
    carId: number;
    repairType: string;
    repairCost: number;
    repairDate: Date;
}