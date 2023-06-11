// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage1 : Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.storage1 = storage;
  }

  async set(key: string, value: any) {
    await this.storage1?.set(key, value);
  }

  async get(key: string): Promise<any> {
    return await this.storage1?.get(key);
  }

  async remove(key: string) {
    await this.storage1?.remove(key);
  }

  async clear() {
    await this.storage1?.clear();
  }

  async keys(): Promise<string[] | undefined> {
    return await this.storage1?.keys();
  }

  async length(): Promise<number | undefined> {
    const keys = await this.keys();
    return keys?.length;
  }
}
