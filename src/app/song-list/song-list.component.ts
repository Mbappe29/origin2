import { Component, OnInit, Input} from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
    @Input() preno: Album[];
    selectedA : Album[];
  constructor() { }

  ngOnInit() {
  }

 /* onClick(p : Album)
    {
        this.selectedA= p;
    }*/


}