import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from './full-stack-table/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {
  baseApiUrl: string = 'https://localhost:7184';
  constructor(private http: HttpClient) { }

  getAllBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.baseApiUrl + '/api/branches')
  }

  addBranch(addBranchRequest: Branch): Observable<Branch> {
    addBranchRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Branch>(this.baseApiUrl + '/api/branches', addBranchRequest);
  }
}
