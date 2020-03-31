import { Component, OnInit } from '@angular/core';
import { InstaApiService } from 'src/app/shared/insta-api.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  private errorMessage: string;
  public photos: any;
  private grid;
  constructor(public instaAPI: InstaApiService) {
  }

  onSetGrid(e) {
    this.grid = true;
  }

  onSetList(e) {
    this.grid = false;
  }

  ngOnInit() {
    this.grid = true;
    this.getInstaPhotos();
  }

  getInstaPhotos() {
    this.instaAPI.getPosts().subscribe((res) => {
      //  console.log(res.data.user.edge_owner_to_timeline_media.edges);
      this.photos = res.data.user.edge_owner_to_timeline_media.edges;
    });
  }


}
