import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    getUsers(): Observable<any[]> {
        return this.http.get('http://mocker.egen.io/users')
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }

    getUserById(userId): Observable<any> {
        return this.http.get(`http://mocker.egen.io/users/${userId}`)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }

    addUser(user): Observable<any> {
        
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });

        return this.http.post('http://mocker.egen.io/users', user)
        .map(response => response.json())
        .catch(error => Observable.throw(error.statusText));
    }
}