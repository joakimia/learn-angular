export class CounterService {
  actions = {
    active: 0,
    inactive: 0
  };

  countUsers(active: number, inactive: number) {
    console.log('Active: ', active, 'Inactive', inactive);
  }
  countActions(type: string) {
    this.actions[type]++;
    console.log(this.actions);
  }
}
