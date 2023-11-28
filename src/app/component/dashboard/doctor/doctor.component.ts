import { Component, OnInit, ViewChild } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DataService } from 'src/app/shared/service/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Doctor } from 'src/app/shared/model/doctor';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  faUserPlus = faUserPlus;
  doctorArr: Doctor[] = [];

  ngOnInit(): void {
    this.getAllDoctors();
  }
  displayedColumns: string[] = [
    'name',
    'email',
    'mobile',
    'gender',
    'department',
    'qualification',
    'action'
  ];
  
  dataSource!: MatTableDataSource<Doctor>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private dataApi: DataService,
    private _snackBar: MatSnackBar
  ) {}

  addDoctor() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Register Doctor',
      buttonName: 'Register',
    };
    const dialogRef = this.dialog.open(AddDoctorComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        console.log(data);
        this.dataApi.addDoctor(data);
        this.openSnackBar('Doctor Added successfully', 'Ok');
      }
    });
  }

  getAllDoctors() {
    this.dataApi.getAllDoctors().subscribe((res) => {
      this.doctorArr = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });

      this.dataSource = new MatTableDataSource(this.doctorArr);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
