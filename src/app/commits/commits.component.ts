import { Component, OnInit} from '@angular/core';
import { UsersServices } from '../users.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {


  constructor(private service: UsersServices,
    public dialog: MatDialog) {}

  searchUser = this.service.searchUser
  searchRepo = this.service.searchRepo;
  commits: any;
  rowInfo: any;
  
  displayedColumns: string[] = ['position','sha','name','date'];
  dataSource = this.getAllCommits();

  ngOnInit() {
    this.searchUser = this.service.searchUser; 
    this.searchRepo = this.service.searchRepo; 
  }
   
  getAllCommits() {
    this.service.getCommits(this.searchUser, this.searchRepo)
    .subscribe(commits => {
      this.commits = commits;
    })
    return this.commits;
  }

  getRecord(row): void {
    this.rowInfo = row;
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: row
    });
  }
}


