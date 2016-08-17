import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId : module.id, // Can use relative paths in templateUrl and styleUrls
  selector : 'ng2-modal',
  templateUrl : 'modal.component.html',
  styleUrls : ['modal.component.css']
})
export class ModalComponent {

  @Output() closeModal = new EventEmitter();

  close () {
    this.closeModal.emit({
      value : true
    });
  }

}
