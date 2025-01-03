import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  countUp(step) {
    this.count += step;
  }
  countDown(step) {
    this.count -= step;
  }
  countReset() {
    this.count = 0;
  }
}

export default new CounterStore();
