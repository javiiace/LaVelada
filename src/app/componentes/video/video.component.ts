import {Component, Input} from '@angular/core';
import {NgxLiteYoutubeModule} from "ngx-lite-video";
@Component({
  selector: 'app-video',
  standalone: true,
  imports: [
    NgxLiteYoutubeModule
  ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  @Input() idVideo:string="";

}
