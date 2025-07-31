import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LogEntry {
  timestamp: string;
  vehicleId: string;
  level: string;
  code: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private API_URL = 'http://localhost:3000/logs';

  constructor(private http: HttpClient) {}

  getLogs(filters?: {
    vehicle?: string;
    code?: string;
    from?: string;
    to?: string;
  }): Observable<LogEntry[]> {
    let params = new HttpParams();
    console.log('filters2', filters);

    if (filters) {
      if (filters.vehicle) params = params.set('vehicle', filters.vehicle);
      if (filters.code) params = params.set('code', filters.code);
      if (filters.from) params = params.set('from', filters.from);
      if (filters.to) params = params.set('to', filters.to);
    }

    return this.http.get<LogEntry[]>(this.API_URL, { params });
  }
}
