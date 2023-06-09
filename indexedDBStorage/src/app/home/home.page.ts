// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-home',
// //   templateUrl: 'home.page.html',
// //   styleUrls: ['home.page.scss'],
// // })
// // export class HomePage {

// //   constructor() {}

// // }
// import { IonicModule } from '@ionic/angular';
// import { Component } from '@angular/core';
// import { Storage } from '@ionic/storage-angular';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss']
// })
// export class HomePage {
//   storageData: { key: string, value: any }[] = [];

//   constructor(private storage: Storage) {}

//   async storeData() {
//     await this.storage.set('key', 'value');
//     this.getData();
//   }

//   async getData() {
//     const value = await this.storage.get('key');
//     if (value) {
//       this.storageData.push({ key: 'key', value: value });
//     }
//   }

//   async removeData() {
//     await this.storage.remove('key');
//     this.storageData = this.storageData.filter(item => item.key !== 'key');
//   }

//   async clearStorage() {
//     await this.storage.clear();
//     this.storageData = [];
//   }

//   async getKeys() {
//     const keys = await this.storage.keys();
//     console.log(keys);
//   }

//   async checkKey() {
//     const keys = await this.storage.keys();
//     const exists = keys.includes('key');
//     console.log(exists);
//   }

//   async getCount() {
//     const count = await this.storage.length();
//     console.log(count);
//   }
// }

import { Component } from '@angular/core';
import { IndexedDBService } from '../services/indexed-db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

// @Component({
//   selector: 'app-home',
//   template: `
//     <button (click)="setItem()">Set Item</button>
//     <button (click)="getItem()">Get Item</button>
//     <button (click)="removeItem()">Remove Item</button>
//     <button (click)="clear()">Clear Storage</button>
//     <button (click)="getKeys()">Get Keys</button>
//     <button (click)="getLength()">Get Length</button>
//     <button (click)="enumerate()">Enumerate</button>
//   `
// })

export class HomePage {
  constructor(private indexedDBService: IndexedDBService, private storage: Storage) {}
  storageData: { key: string, value: any }[] = [];

  async setItem() {
    await this.indexedDBService.setItem('key', 'value');
  }

  async getItem() {
    const value = await this.indexedDBService.getItem('key');
    console.log(value);
  }

  async removeItem() {
    await this.indexedDBService.removeItem('key');
  }

  async clear() {
    await this.indexedDBService.clear();
  }

  async getKeys() {
    const keys = await this.indexedDBService.getKeys();
    console.log(keys);
  }

  async getLength() {
    const length = await this.indexedDBService.getLength();
    console.log(length);
  }

  async enumerate() {
    const items = await this.indexedDBService.enumerate();
    console.log(items);
  }
}
