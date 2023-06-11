

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class IndexedDBService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // Vérifier si le storage a déjà été initialisé
    if (this._storage === null) {
      // Créer le storage
      const storage = await this.storage.create();
      this._storage = storage;
    }
  }

  // Méthode pour définir une valeur associée à une clé
  async setItem(key: string, value: any): Promise<void> {
    await this._storage?.set(key, value);
  }

  // Méthode pour obtenir la valeur associée à une clé
  async getItem(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  // Méthode pour supprimer une valeur à partir de sa clé
  async removeItem(key: string): Promise<void> {
    await this._storage?.remove(key);
  }

  // Méthode pour effacer tous les éléments stockés
  async clear(): Promise<void> {
    await this._storage?.clear();
  }

  // Méthode pour obtenir toutes les clés stockées
  async getKeys(): Promise<string[] | undefined> {
    return await this._storage?.keys();
  }

  // Méthode pour obtenir la quantité d'éléments stockés
  async getLength(): Promise<number> {
    const keys = await this._storage?.keys();
    return keys ? keys.length : 0;
  }

  // Méthode pour énumérer tous les éléments stockés avec leurs clés et valeurs
  async enumerate(): Promise<{ key: string, value: any }[]> {
    const keys = await this._storage?.keys();
    const results: { key: string, value: any }[] = [];
    if (keys) {
      for (const key of keys) {
        const value = await this._storage?.get(key);
        results.push({ key, value });
      }
    }
    return results;
  }
}
