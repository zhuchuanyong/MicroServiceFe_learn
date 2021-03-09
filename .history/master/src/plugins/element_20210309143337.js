import { Button, Menu, Submenu,Input, MenuItem, MenuItemGroup, Scrollbar, Loading, Message, MessageBox } from "element-ui";

export default {
    components: [
      Button, Menu, Submenu, MenuItem, MenuItemGroup, Scrollbar,Input
    ],
    serve: [Loading],
    methods: [wlMessage, wlConfirm]
  }