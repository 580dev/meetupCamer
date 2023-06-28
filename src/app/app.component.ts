import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {firebaseConfig} from "../firebase-config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meetupCamer';

  constructor() {

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
  }

}
