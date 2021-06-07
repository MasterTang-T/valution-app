import Vue from "vue";
import AppComponent from "./App/App.vue";

Vue.component("app-component", AppComponent);
import {
  Card,
  Button,
  Table,
  TableColumn,
  Input,
  Dialog,
  Form,
  FormItem
} from 'element-ui';
Vue.use(Card);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});
