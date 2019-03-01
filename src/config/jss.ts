import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import { create, JSSPlugin } from "jss";
import jssRtl from "jss-rtl";

const getJss = () => {
  const jssRtlPlugin = jssRtl({
    enabled: true,
  }) as JSSPlugin;
  return create({ plugins: [...jssPreset().plugins, jssRtlPlugin] });
};

const getJssClassName = () => {
  return createGenerateClassName();
};

export default {
  jss: getJss(),
  generateClassName: getJssClassName(),
};
