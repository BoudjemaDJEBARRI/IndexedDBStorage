// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-storage',
//   templateUrl: './storage.page.html',
//   styleUrls: ['./storage.page.scss'],
// })
// export class StoragePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


// import { Component, OnInit } from '@angular/core';
// @Component({
  //   selector: 'app-storage',
  //   templateUrl: './storage.page.html',
  //   styleUrls: ['./storage.page.scss'],
  // })
  
  // import { StorageService } from './../services/storage.service';
  // import { Component, OnInit } from '@angular/core';
  // import { Router } from '@angular/router';
  // import { Storage } from '@ionic/storage-angular';
  
  // @Component({
  //   selector: 'app-storage',
  //   templateUrl: './storage.page.html',
  //   styleUrls: ['./storage.page.scss'],
  // })
  // export class StoragePage implements OnInit {
  //   storageData: { key: string; value: any }[] = [];
  
  //   constructor(private storage: Storage, private router: Router, private storageService : StorageService) {}
  
  //   ngOnInit() {}
  
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
  //     this.storageData = this.storageData.filter((item) => item.key !== 'key');
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
  
  //   navigateToOtherPage() {
  //     this.router.navigate(['/other-page']);
  //   }
  // }

import { StorageService } from '../services/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage {
  constructor(private storageService: StorageService) {}

  async storeData() {
    await this.storageService.set('key', 'value');
  }

  async getData() {
    const value = await this.storageService.get('key');
    console.log(value);
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

  