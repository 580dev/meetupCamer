import { Component, OnInit } from '@angular/core';

export interface Speaker {image: string, name:string, role: string, description: string}

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {
  speakers!: Speaker[]

  ngOnInit(): void {
    this.speakers = []
  } 
}
