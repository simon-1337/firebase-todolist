import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item: Observable<any>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'items');
    this.item = collectionData(itemCollection);
  }
}
