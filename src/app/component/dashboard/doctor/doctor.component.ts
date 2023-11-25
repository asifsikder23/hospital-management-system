import { Component, OnInit } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  faUserPlus = faUserPlus;
  ngOnInit(): void {}

  constructor(public dialog: MatDialog,
    private dataApi: DataService) {}

  addDoctor() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Register Doctor',
      buttonName: 'Register'
    };
    const dialogRef = this.dialog.open(AddDoctorComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        console.log(data);
        this.dataApi.addDoctor(data)
        alert("Doctor Added successfully.")
      }
    })
  }
}
