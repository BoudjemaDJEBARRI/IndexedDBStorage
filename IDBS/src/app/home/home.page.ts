//   constructor(private storage: Storage, private router: Router, private storageService : StorageService) {}

import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private storageService: StorageService) {}


     // Tableau pour stocker les données du stockage
storageData: { key: string; value: any }[] = [];

// Méthode pour stocker des données dans le stockage
async storeData() {
  await this.storageService.set('name', 'John');
  await this.storageService.set('age', 30);
  await this.storageService.set('city', 'New York');
  this.getData(); // Met à jour le tableau storageData après chaque stockage
}

// Méthode pour récupérer les données du stockage
async getData() {
  const keys = ['name', 'age', 'city'];
  this.storageData = [];

  for (const key of keys) {
    const value = await this.storageService.get(key);
    if (value) {
      this.storageData.push({ key, value });
    }
  }
}

  async removeData() {
    await this.storageService.remove('key');
  }

  async clearStorage() {
    await this.storageService.clear();
  }

  async getKeys() {
    const keys = await this.storageService.keys();
    console.log(keys);
  }

  async getCount() {
    const count = await this.storageService.length();
    console.log(count);
  }
}
