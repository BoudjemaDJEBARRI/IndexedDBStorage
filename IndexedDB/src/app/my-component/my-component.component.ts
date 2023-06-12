import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
export class MyComponentComponent  implements OnInit {

  constructor(private storageService: StorageService) { 
    this.getData(); 
  }
  // Tableau pour stocker les données du stockage
  storageData: { key: string; value: any }[] = [];

  // Méthode pour stocker des données dans le stockage
  async storeData() {
    await this.storageService.set('Prénom', 'Elon');
    await this.storageService.set('Nom', 'Musk');
    await this.storageService.set('Ville', 'Los Angeles');
    await this.storageService.set('Age', 25);
    await this.storageService.set('Tel', '010203040506');
    
    this.getData(); // Met à jour le tableau storageData après chaque stockage
  }

// Méthode pour récupérer les données du stockage
  async getData() {
    const keys = ['Prénom', 'Nom', 'Ville', 'Age','Tel'];
    this.storageData = [];
    for (const key of keys) {
      const value = await this.storageService.get(key);
      if (value) {
        this.storageData.push({ key, value });
      }
    }
  }

  // Méthode pour supprimer les données du stockage
  async removeData() {
    await this.storageService.remove('Age');
    await this.storageService.remove('Tel');
  }

  // Méthode pour vider complètement le stockage
  async clearStorage() {
    await this.storageService.clear();
  }

  // Méthode pour obtenir la liste des clés stockées
  async getKeys() {
    const keys = await this.storageService.keys();
    console.log(keys);
  }

  // Méthode pour obtenir le nombre total de paires clé-valeur stockées
  async getCount() {
    const count = await this.storageService.length();
    console.log(count);
  }
  ngOnInit() {}

}
