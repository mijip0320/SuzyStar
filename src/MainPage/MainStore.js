import { observable, computed, action } from "mobx";

class MainStore {
  @observable mainView = "Home";

  @computed get getMainView() {
    return this.mainView;
  }

  @action setMainView(mainView) {
    this.mainView = mainView;
  }
}
export default new MainStore();
