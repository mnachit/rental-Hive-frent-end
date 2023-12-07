import { Equipment } from './../Equipmentclass';
import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../services/equipment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  equipmentsDesponible?: Equipment;
  equipmentD?: Equipment[];
  checkEq: Boolean = false;
  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
  }

  eequipment: Equipment = new Equipment();

  getEquipmentAvailable()
  {
    this.checkEq = false;
    this.equipmentService.getEquipmentAvailable(this.eequipment).subscribe({
      next: (data: Equipment[]) => {
        this.equipmentD = data;
        this.checkEq = true;
        console.log(data)
      },
      error: (e) => console.error(e)
    });
  }

}
