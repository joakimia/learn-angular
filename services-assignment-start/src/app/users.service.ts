import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  usersUpdated = new EventEmitter<{
    activeUsers: string[];
    inactiveUsers: string[];
  }>();

  constructor(private counterService: CounterService) {}

  setInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.countUsers(
      this.activeUsers.length,
      this.inactiveUsers.length
    );
    this.counterService.countActions('inactive');
  }

  setActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.countUsers(
      this.activeUsers.length,
      this.inactiveUsers.length
    );
    this.counterService.countActions('active');
  }
}
