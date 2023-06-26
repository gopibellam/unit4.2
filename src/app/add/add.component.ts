import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  data: any = [];
  constructor(private routes: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  registerPlayer(
    Name: string,
    BattingStyle: string,
    BowlingStyle: string,
    Runs: number,
    Highest: number
  ) {
    this.apiService
      .addPlayer({
        Name: Name,
        BattingStyle: BattingStyle,
        BowlingStyle: BowlingStyle,
        Runs: Runs,
        Highest: Highest,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log('registerPlayer', this.data);
      });
    this.routes.navigate(['/dashboard']);
  }
  Register(
    Name: string,
    BattingStyle: string,
    BowlingStyle: string,
    Runs: number,
    Highest: number
  ) {
    this.registerPlayer(Name, BattingStyle, BowlingStyle, Runs, Highest);
  }
}
