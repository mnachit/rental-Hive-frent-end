import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../Equipmentclass';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private baseUrl = "http://localhost:8081/api/equipment";

  constructor(private http: HttpClient) { }

  getEquipmentAvailable(eequipment: Equipment): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`${this.baseUrl}/available?startDate=${eequipment.startDate}&endDate=${eequipment.endDate}`);
  }
}
