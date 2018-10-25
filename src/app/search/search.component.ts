import { Component,EventEmitter, Input, Output } from '@angular/core';
import { UsersServices } from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent{

  searchUser = '';
  searchRepo = '';
  minLenght = 3;
  isLoadedUser = false;
  isLoadedRepo = false;
  user: any;
  repo: any;

  infoAboutUser = '';

  constructor(private service: UsersServices) {}

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

  handleChangeRepo() {
    if (this.minLenght <= this.searchRepo.length) {
      this.service.getRepos(this.searchUser, this.searchRepo)
        .subscribe(repo => {
          this.repo = repo;
          if (this.repo.name == null) {
            this.isLoadedRepo = false;  
          } else {
            this.isLoadedRepo = true;  
          }
        })
    } else {
      this.isLoadedRepo = false;  
    }
  }

  noExistingUser() {
    if ((this.minLenght >= this.searchUser.length) && (this.isLoadedUser == false)) {

      this.infoAboutUser = '';
      return true;
    } else if ((this.minLenght <= this.searchUser.length) && (this.isLoadedUser == false)) {
      this.infoAboutUser = "There isn't user with this name";
      return true;
    }
  }



}
