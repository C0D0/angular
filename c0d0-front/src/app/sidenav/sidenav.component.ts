import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'sidenav-autosize-example',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
  standalone: true,
  imports: [MatSidenavModule, NgIf, MatButtonModule],
})
export class SidenavAutosizeExample {
  showFiller = false;
}
