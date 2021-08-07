import { Component, OnInit } from '@angular/core';
import { InquiryService } from '../inquiry.service';

@Component({
  selector: 'app-manage-inquiry',
  templateUrl: './manage-inquiry.component.html',
  styleUrls: ['./manage-inquiry.component.css']
})
export class ManageInquiryComponent implements OnInit {

  public allLeads:any = [];
  constructor(private inquiryService:InquiryService) { }

  ngOnInit(): void {
    this.getAllLeads();
  }

  getAllLeads() {
    this.inquiryService.getAllInquiry().subscribe(
      (data) => {
        this.allLeads = data;
      }
    )
  }

}
