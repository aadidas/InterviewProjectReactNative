import {action, computed, configure, makeObservable, observable} from 'mobx';
import {mockBusiness} from '@src/data/mock-businessStore';

configure({
  useProxies: 'never',
});

class BusinessStore {
  constructor() {
    makeObservable(this, {
      mockBusiness: observable,
      addBusiness: action,
      deleteBusiness: action,
      count: computed,
    });
  }

  mockBusiness = [];

  addBusiness(newBusiness) {
    this.mockBusiness = [newBusiness, ...this.mockBusiness];
    console.log('this is mockbusiness in store : ', this.mockBusiness);
  }

  deleteBusiness(i) {
    this.mockBusiness = this.mockBusiness.splice(i, 1);
    console.log(i);
  }

  get count() {
    return mockBusiness.length;
  }
}

export default BusinessStore = new BusinessStore();
