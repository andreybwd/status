import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import {AlertComponent} from 'ng2-bootstrap';

import {AlertService} from './common/alert/alert.service';
import {Alert} from './common/alert/alert.model';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

}
