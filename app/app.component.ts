import { Component } from '@angular/core';

import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Some component?</h1>
  <ng2-modal></ng2-modal>
  `,
  directives : [
    ModalComponent
  ]
})
export class AppComponent { }
