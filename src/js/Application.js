import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);
  }
  init() {
    const articleAnimation = document.querySelector(".article");
    articleAnimation.addEventListener("click", () => {
      anime({
        targets: ".spring-physics-demo .el",
        translateX: 250,
        direction: "alternate",
        loop: true,
        easing: "spring(1, 80, 10, 0)",
      });
    });
  }
}
