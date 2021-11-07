import { Component, OnInit } from '@angular/core';
import { ProjectionData } from '../models/projection-data';
import { ProjectionService } from '../services/projection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projections: ProjectionData[] = [];
  projectionNumber: number = 0;

  constructor(private _projectionsService: ProjectionService) { }

  ngOnInit(): void {
    this.getProjections();
  }

  private getProjections(): void {
    this._projectionsService.getProjections()
        .subscribe((res: ProjectionData[]) => {
          this.projections = res;
        });
  }
}
