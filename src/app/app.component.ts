import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meetupCamer';

  constructor() {
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);
  }

}
