import { Component} from '@angular/core';
import { UsersServices } from '../users.service';
//import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  searchUser = '';
  searchRepo = '';
  minLenght = 3;
  isLoadedUser = false;
  isLoadedRepo = false;
  user: any;
  repo: any;

  titleUSER = ''; // изменить это

  constructor(private service: UsersServices) { }

  handleChangeUser() {
    if (this.minLenght <= this.searchUser.length)  {
      this.service.getUsers(this.searchUser)
        .subscribe(user => {
          this.user = user;     
          if (this.user.name == null) {
            this.isLoadedUser = false;  
          } else {
            this.isLoadedUser = true;  
          }
        })
    } else {
      this.isLoadedUser = false;  
    }
  }

  noExisting() {
    if ((this.minLenght >= this.searchUser.length) && (this.isLoadedUser == false)) {

      this.titleUSER = 'ПУСТО';
      return true;
    } else if ((this.minLenght <= this.searchUser.length) && (this.isLoadedUser == false)) {
      this.titleUSER = 'No exist this rep';
      return true;
    }
  }

  handleChangeRepo() {
    if (this.minLenght <= this.searchRepo.length) {
      this.service.getRepos(this.searchRepo)
        .subscribe(repo => {
          this.repo = repo;
          this.isLoadedRepo = true;
        })
    }
  }

}
