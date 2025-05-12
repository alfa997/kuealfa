import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://67b752e82bddacfb270e9642.mockapi.io/kue/kue'; 
  private pesananSubject = new BehaviorSubject<any[]>([]);  
  public pesanan$ = this.pesananSubject.asObservable(); 

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(data => {
        this.pesananSubject.next(data);
      })
    );
  }

  pesanKue(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data).pipe(
      tap(() => {
        this.getOrders().subscribe();
      })
    );
  }
}
