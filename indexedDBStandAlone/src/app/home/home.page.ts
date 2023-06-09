import { AppStorageService } from './../services/app-storage.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  value:any="";

  constructor(private appStorageService : AppStorageService) {}

  async setValue() {
    await this.appStorageService.set('Country', 'France');
  }
  
  async getValue() {
    this.value = await this.appStorageService.get('Country');
  }
 
  async removeValue() {
    await this.appStorageService.remove('Country');
  }

  async clearStorage() {
    await this.appStorageService.clear();
  }

}
