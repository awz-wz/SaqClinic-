import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ClinicInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface TrainingItem {
  title: string;
  duration: string;
  description: string;
}

export interface ProductItem {
  title: string;
  price: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/content`;

  getClinicInfo(): Observable<ClinicInfo> {
    return this.http.get<ClinicInfo>(`${this.baseUrl}/clinic`);
  }

  getServices(): Observable<ServiceItem[]> {
    return this.http.get<ServiceItem[]>(`${this.baseUrl}/services`);
  }

  getTraining(): Observable<TrainingItem[]> {
    return this.http.get<TrainingItem[]>(`${this.baseUrl}/training`);
  }

  getProducts(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(`${this.baseUrl}/products`);
  }
}
