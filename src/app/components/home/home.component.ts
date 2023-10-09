import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
  ]
})
export class HomeComponent implements OnInit {
  values: string[] = ['Full Stack .Net Developer|', 'FreeLancer|',"Frontend Developer|"];
  currentIndex = 0;

  ngOnInit() {
    this.updateSpanContent();
  }

  updateSpanContent() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.values.length;
    }, 3000);
  }
}
