import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  Observable,
  retry,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData$: BehaviorSubject<any> = new BehaviorSubject(null);

  private usersUrl = 'api/users/';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createUser(user: any): Observable<any> {
    user.id = null;
    return this.http.post<any>(this.usersUrl, user).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getUserData(data: any) {
    console.log(data);
    this.userData$.next(data);
  }

  setUserData() {
    return this.userData$.asObservable();
  }
}
