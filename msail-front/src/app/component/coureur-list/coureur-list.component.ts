import { Component, OnInit } from '@angular/core';
import { Coureur } from '../../model/coureur';
import { CoureurServiceService } from '../../services/coureur-service.service';

@Component({
  selector: 'app-coureur-list',
  templateUrl: './coureur-list.component.html',
  styleUrls: ['./coureur-list.component.scss']
})
export class CoureurListComponent implements OnInit {

  coureurs: Coureur[];
  constructor(private coureurService: CoureurServiceService) {
    console.log('CoureurListComponent constructeur');
  }

  ngOnInit() {
    console.log('CoureurListComponent ngOnInit. chargement des coureurs');
    this.coureurService.findAll().subscribe(data => {
      this.coureurs = data;
      console.log(data.length);
    });
    console.log('  nb coureur',this.coureurs.length);
  }

}
