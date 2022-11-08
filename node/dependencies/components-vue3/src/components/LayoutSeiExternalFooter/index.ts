import { App } from "vue";
import Component from "./LayoutSeiExternalFooter.vue";

Component.install = (Vue: App) => {
  Vue.component(Component.name, Component);
}

export default Component;
