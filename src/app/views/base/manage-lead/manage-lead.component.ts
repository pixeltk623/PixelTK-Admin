import { Component, OnInit } from '@angular/core';

import { ManageLeadService } from '../../../manage-lead.service';

@Component({
  selector: 'app-manage-lead',
  templateUrl: './manage-lead.component.html',
  styleUrls: ['./manage-lead.component.scss']
})
export class ManageLeadComponent implements OnInit {

  constructor(private _manageLeadService:ManageLeadService) { }

  ngOnInit(): void {
  }

  getAllLead() {
    this._manageLeadService.getAllLeads().subscribe(
      (data) => {
        console.log(data);
      }
    )
  }


}
