import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService, User } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss'],
})
export class UsersPage implements OnInit {
  public users: User[] = [];

  public count = 0;
  public itemsPerPage = 10;
  public currentPage = 1;

  constructor(
    private service: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit() {
    const page = this.activatedRoute.snapshot.paramMap.get('page');
    this.service.listUsersByPage(parseInt(page, 10)).subscribe((res) => {
      this.users = res.data;
      this.count = res.total;
      this.itemsPerPage = res.per_page;
      this.currentPage = res.page;
    });
  }

  pageChange(page: number): void {
    this.router.navigate(['users', page]);
  }
}
