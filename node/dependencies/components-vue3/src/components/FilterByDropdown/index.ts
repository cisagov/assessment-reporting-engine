import { App } from "vue";
import Component from "./FilterByDropdown.vue";

Component.install = (Vue: App) => {
  Vue.component(Component.name, Component);
}

export default Component;
