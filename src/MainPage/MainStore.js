//페이지 변화에 따른 값을 조정하는 Store

import { observable, computed, action } from "mobx";

class MainStore {
  //기본 페이지를 Home으로 설정
  @observable mainView = "Home";

  @computed get getMainView() {
    return this.mainView;
  }

  //페이지 변화를 위한 설정 함수
  @action setMainView(mainView) {
    this.mainView = mainView;
  }
}
export default new MainStore();
