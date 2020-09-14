import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appShopRecipe';
  loadedFeature = 'recipe';

  onNavigate(feature:string){
    //console.log('lala'+feature)
    this.loadedFeature = feature;
  }
}
