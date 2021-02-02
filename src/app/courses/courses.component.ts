import { Component, OnInit } from '@angular/core';
import { Certificate } from '../shared/certificate';
import { CertificateService } from '../services/certificate.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  certificates: Certificate[];

  constructor(private certificateService: CertificateService) { }

  ngOnInit() {
    this.certificateService.getCertificates().subscribe((certificates) => this.certificates = certificates);
  }

}
