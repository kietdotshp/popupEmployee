import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeletePopupComponent } from '../employees/delete-popup/delete-popup.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog : MatDialog) {}
  openDeleteConfirmationModal(): MatDialogRef<DeletePopupComponent> {
    return this.dialog.open(DeletePopupComponent, {
      width: '300px'
    });
  }
}
