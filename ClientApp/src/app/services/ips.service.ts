import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Ips} from '../models/ips';
import { from } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class IpsService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  /**POST: add a new ips to the server */
  addIps(ips: Ips):Observable<Ips> {
    return this.http.post<Ips>(this.baseUrl+'api/Ips', ips, httpOptions).pipe(
      tap((newIps: Ips)=> this.log(`added newIps w/ id=${newIps.id}`)),
      catchError(this.handleError<Ips>('addIps'))
    );
  }

  //GET Ips from the serve*/
 getAll(): Observable<Ips[]>
 {
   return this.http.get<Ips[]>(this.baseUrl+'api/Ips').pipe( tap(_=>this.log('Se consulta la informacion')),
   catchError(this.handleError<Ips[]>('getAll', []))
   );
 }

 //GET ips by id. Willd 404  if id not found*/
 get(id: number): Observable<Ips>{
  const url =` ${this.baseUrl + 'api/Ips'}/${id}`;
  return this.http.get<Ips>(url).pipe( tap(_ => this.log(`fetched task id=${id}`)),
  catchError(this.handleError<Ips>(`getIps id=${id}`))

  );
}

  //*PUT: update the Ips on the server */
  update(ips:Ips): Observable<any>{
    const url= `${this.baseUrl + 'api/Ips'}/ ${ips.id}`;
    return this.http.put(url, ips, httpOptions).pipe(
      tap(_ => this.log(`update ips id=${ips.id}`)),
      catchError(this.handleError<any>('ips'))
    );
  }


  /**DELETE: delete the ips from the server */
  delete (ips: Ips | number): Observable<Ips>{
    const id = typeof ips === 'number'? ips : ips.id;
    const url = `${this.baseUrl + 'api/Ips'} /${id}`;
    return this.http.delete<Ips>(url, httpOptions).pipe(
      tap(_ => this.log(`delete ips id=${id}`)),
      catchError(this.handleError<Ips>('deleteIps'))
    );
  }


  private log(message: string){
    alert (`IpsService: ${message}`);
  }
  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    }
  }
}
