import { Component, OnInit } from '@angular/core';
import {IpsService} from '../services/ips.service';
import {Ips} from '../models/ips';
import { from } from 'rxjs';
@Component({
  selector: 'app-list-ips',
  templateUrl: './list-ips.component.html',
  styleUrls: ['./list-ips.component.css']
})
export class ListIpsComponent implements OnInit {
  ipss: Ips[];
  constructor( private ipsService: IpsService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.ipsService.getAll().subscribe(ipss=> this.ipss=ipss);
  }
}
