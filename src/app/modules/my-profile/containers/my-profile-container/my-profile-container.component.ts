import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '../../../auth/store/auth.facade';
import { UserFacade } from '../../store/user.facade';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-my-profile-container',
  templateUrl: './my-profile-container.component.html',
  styleUrls: ['./my-profile-container.component.scss']
})
export class MyProfileContainerComponent implements OnInit {
  user$ = this.userFacade.user$;

  constructor(private authFacade: AuthFacade, private userFacade: UserFacade) {
  }

  ngOnInit() {
    this.authFacade.user$.subscribe(user => {
      console.log(user);
      this.userFacade.getUser(user.userId);
    });
  }

  saveUser(data: User): void {
    this.userFacade.updateUser(data);
  }
}
