import Vue from "vue";
import AppComponent from "./App/App.vue";

Vue.component("app-component", AppComponent);
import {
  Card,
  Button,
  Table,
  TableColumn
} from 'element-ui';
Vue.use(Card);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});
