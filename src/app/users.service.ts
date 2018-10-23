import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable ()
export class UsersServices {

    constructor(private http: Http) {
        
    }
    getUsers(username: string): Observable<any> {
        //return this.http.get('https://api.github.com/users/'+username + '?client_id=2309e75b6e358fb6d758&client_secret=f8e374273c00f733bbb1ca2a2702ce8cc53f9e7d') 
        return this.http.get('https://api.github.com/users/facebook?client_id=2309e75b6e358fb6d758&client_secret=f8e374273c00f733bbb1ca2a2702ce8cc53f9e7d') 
                        .pipe(map((response: Response) => response.json()));//username)
                        //?client_id=2309e75b6e358fb6d758&client_secret=f8e374273c00f733bbb1ca2a2702ce8cc53f9e7d
    }

    getRepos(username: string, reponame: string): Observable<any> {
       // return this.http.get('https://api.github.com/repos/' + username + '/'+ reponame + '?client_id=2309e75b6e358fb6d758&client_secret=f8e374273c00f733bbb1ca2a2702ce8cc53f9e7d' )
        return this.http.get('https://api.github.com/repos/facebook/react?client_id=2309e75b6e358fb6d758&client_secret=f8e374273c00f733bbb1ca2a2702ce8cc53f9e7d' )
                        .pipe(map((response: Response) => response.json()));//username)
    }
}