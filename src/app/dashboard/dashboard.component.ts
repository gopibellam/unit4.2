import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getRightHandedPlayers() {
    this.apiService.getRightHandedPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getRightArmMediumPlayers() {
    this.apiService.getRightArmMediumPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByRuns() {
    this.apiService.getPlayersByRuns().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByLeastRuns() {
    this.apiService.getPlayersByLeastRuns().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersHighest() {
    this.apiService.getPlayersHighest().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  DeletePlayer(data: any) {
    let body = {
      _id: data,
    };
    this.apiService.deletePlayer(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'right-handed') {
      this.getRightHandedPlayers();
    } else if (value === 'right-arm-medium') {
      this.getRightArmMediumPlayers();
    } else if (value === 'players-by-runs') {
      this.getPlayersByRuns();
    } else if (value === 'players-by-least-runs') {
      this.getPlayersByLeastRuns();
    } else if (value === 'players-highest') {
      this.getPlayersHighest();
    } else {
      this.getAllData();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
