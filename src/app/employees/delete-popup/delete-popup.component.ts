import { Component, OnInit,EventEmitter, Output, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent implements OnInit {
  @Output() confirmDelete = new EventEmitter<number>();
  employeeId: number;
  constructor(public dialogRef: MatDialogRef<DeletePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  // onConfirmDelete(): void {
  //   this.confirmDelete.emit(this.employeeId);
  //   this.dialogRef.close();
  // }
  // onCancel(): void {
  //   this.dialogRef.close();
  // }
  onDeleteClick(): void {
    this.dialogRef.close('delete');
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
