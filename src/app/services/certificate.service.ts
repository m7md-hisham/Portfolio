import { Injectable } from '@angular/core';
import { Certificate } from '../shared/certificate';
import { CERTIFICATES } from '../shared/certificates';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor() { }

  getCertificates(): Observable<Certificate[]> {
    return of(CERTIFICATES);
  }

  getCertificate(id: string): Observable<Certificate> {
    return of(CERTIFICATES.filter((certificate) => (certificate.id === id))[0]);
  }
}
