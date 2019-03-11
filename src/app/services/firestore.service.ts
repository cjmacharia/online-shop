import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(public db: AngularFirestore) { }

  getCategories() {
    return  this.db.collection('categories').valueChanges();
  }

  getProducts() {
    return this.db.collection('products').valueChanges();
  }

}
