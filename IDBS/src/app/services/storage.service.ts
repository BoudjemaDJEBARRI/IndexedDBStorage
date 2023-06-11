import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage1: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  // Initialise le service de stockage
  async init() {
    const storage = await this.storage.create(); // Crée une instance de stockage
    this.storage1 = storage; // Assigne l'instance de stockage à la propriété privée storage1
  }

  // Stocke une valeur avec une clé dans le stockage
  async set(key: string, value: any) {
    await this.storage1?.set(key, value);
  }

  // Récupère la valeur associée à une clé dans le stockage
  async get(key: string): Promise<any> {
    return await this.storage1?.get(key);
  }

  // Supprime une valeur associée à une clé dans le stockage
  async remove(key: string) {
    await this.storage1?.remove(key);
  }

  // Supprime toutes les données du stockage
  async clear() {
    await this.storage1?.clear();
  }

  // Récupère toutes les clés stockées dans le stockage
  async keys(): Promise<string[] | undefined> {
    return await this.storage1?.keys();
  }

  // Récupère le nombre de paires clé/valeur stockées dans le stockage
  async length(): Promise<number | undefined> {
    const keys = await this.keys(); // Récupère toutes les clés du stockage
    return keys?.length; // Retourne la longueur du tableau des clés
  }
}
