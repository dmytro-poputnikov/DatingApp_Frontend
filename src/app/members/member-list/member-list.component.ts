import { MembersService } from './../../_services/members.service';
import { Member } from './../../_models/member';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
})
export class MemberListComponent implements OnInit {
  members$: Observable<Member[]>;

  constructor(private memberService: MembersService) {}

  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
  }
}
