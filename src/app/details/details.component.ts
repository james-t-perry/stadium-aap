import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StadiumStoreService } from '../services/stadium-store.service';
import { Stadium } from '../interfaces/stadium.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
stadium: Stadium
  constructor(private actr: ActivatedRoute, private storeService:StadiumStoreService) {
   }

  ngOnInit(): void {
    this.storeService.byObjectId(this.actr.snapshot.params.detail).subscribe(val => this.stadium = val[0])

  }

}
