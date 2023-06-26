import { Component, OnInit } from '@angular/core';
import { collection, getFirestore, onSnapshot, query } from 'firebase/firestore';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  
  talks!: any[]

  ngOnInit(): void {
    this.getTalks().then(value => {
      console.log(value)
      this.talks = value
    })
  } 

  getTalks():Promise<any[]>{
    return new Promise((resolve, reject)=>{
      const db = getFirestore();
      const q = query(collection(db, "talks"));
      onSnapshot(q, (doc) => {
        const talk:any[] = [];
        console.log(doc)
        doc.forEach(doc => {
          talk.push(doc.data())
        })
        resolve(talk);
      });
    })
  }
  

}
