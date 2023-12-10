import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

export function doSomething() {
  Message({
    type: "success",
    dangerouslyUseHTMLString: true,
    message: `是否为主应用调用:${!!window.__MICRO_APP_BASE_APPLICATION__} <br/>是否为子应用调用:${!!window.__MICRO_APP_ENVIRONMENT__}`,
  });
}
