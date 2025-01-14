import { Component } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
  providers: [SubscribeService],
})
export class TopMenuComponent {
  constructor(private subscribeService: SubscribeService) {}
  OnSubscribeClicked() {
    this.subscribeService.OnSubscribeClicked();
  }
}
