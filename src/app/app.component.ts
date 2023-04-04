import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc } from '@angular/fire/firestore';
import { setDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$: Observable<any>;  //updates automatically
  firestore: Firestore = inject(Firestore);

  todos:Array<any>;
  todoText: string = '';

  constructor() {
    const coll = collection(this.firestore, 'todos');
    this.todos$ = collectionData(coll);

    //To subscribe the updates -> every time something in todos changes this function is called
    this.todos$.subscribe( (newTodos) =>  {  
      this.todos = newTodos;
    });
  }

  addTodo() {
    const coll = collection(this.firestore, 'todos');
    setDoc(doc(coll), {name: this.todoText})
  }

}
