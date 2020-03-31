import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  public instagramPost: string = 'https://www.instagram.com/p/';
  @Input() link: string;
  @Input() caption: string;
  @Input() thumbnailAndlikes: any;
  constructor() { }

  ngOnInit() {
    //  console.log(this.thumbnailAndlikes);
  }

}
