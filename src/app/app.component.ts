import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public secretPassword = 'mariam';
  public displayPassword = false;
  public servers = ["T1", "T2"];
  loadedFeatures = 'recipe';

  public displayDetails() {
    this.servers.push("serverAdd");
    this.displayPassword = !this.displayPassword;
  }

  onNavigate(feature: string) {
    this.loadedFeatures = feature;
  }
}
