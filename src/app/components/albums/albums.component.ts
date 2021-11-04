import { Component, OnInit } from '@angular/core';
import { AlbumsphService } from 'src/app/services/albumsph.service';
import { Albumsinterface } from './albumsinterface';

@Component({
  selector: 'unimi-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
albums:Albumsinterface[];
  constructor(private AlbumService:AlbumsphService) { }

  ngOnInit(): void {
    this.AlbumService.getalbum().subscribe(data =>{this.albums=data;
       console.log(this.albums)});
  }
}
