import { Component, OnInit } from '@angular/core';
import {IpsService} from '../services/ips.service';
import {Ips} from '../models/ips';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-ips',
  templateUrl: './add-ips.component.html',
  styleUrls: ['./add-ips.component.css']
})
export class AddIpsComponent implements OnInit {

  constructor(private ipsService: IpsService) { }
  ips: Ips;
  ngOnInit() {
    this.ips= {id:0, vHospitalizacion: 0, salario: 0, liquidacion: 0 };

  }

  add(){
    this.ipsService.addIps(this.ips)
    .subscribe(ips => { alert ('Se agrego un nuevo dato')
  });
}
  
  }


