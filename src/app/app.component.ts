import { Component } from '@angular/core';

interface ILog {
  action: string;
  datetime: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .textColor {
      color: white;
    }
  `]
})
export class AppComponent {
  title = 'test3';
  contentDisplay = false;
  logs:ILog[] = [];

  toggleContent() {
    this.contentDisplay = !this.contentDisplay

    const action = this.contentDisplay ? 'show' : 'hide';
    const log = {
      action,
      datetime: Date.now()
    };
    console.log(log);
    this.logs.push(log);
  }

  getBackgroundColor(index: number) {
    return index >= 5 ? 'blue' : 'white'
  }
}
