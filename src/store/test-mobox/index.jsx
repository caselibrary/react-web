import { observable, action, computed, makeObservable } from "mobx";

class Style {
  constructor() {
    makeObservable(this)
  }
  @observable color = "red";
  @observable size = 20;
  @computed get total() {
    return this.size + 1;
  }
  @action changeColor(color) {
    console.log(color)
    this.color = color;
  }
  @action changeSize(size) {
    this.size = size;
  }
}

export default new Style();