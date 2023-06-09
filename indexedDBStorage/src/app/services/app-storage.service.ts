import { Injectable } from '@angular/core';
// Ajouter les modules nécesseres  
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class AppStorageService {
  
  // Mettre à jour le constructeur 
  constructor(private storage: Storage) {}

}
