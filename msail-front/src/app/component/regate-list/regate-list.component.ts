import { Component, OnInit } from '@angular/core';
import { Regate } from '../../model/regate';
import { RegateService } from '../../services/regate.service';

@Component({
  selector: 'app-regate-list',
  templateUrl: './regate-list.component.html',
  styleUrls: ['./regate-list.component.scss']
})
export class RegateListComponent implements OnInit {

  regates: Regate[];
  constructor(private regateService: RegateService) { }

  ngOnInit() {
    this.regateService.findAll().subscribe(data => {
      this.regates = data;
      console.log(data.length);
    });
  }

}
