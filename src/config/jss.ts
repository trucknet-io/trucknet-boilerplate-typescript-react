import { createGenerateClassName, jssPreset } from "@material-ui/styles";
import { create, Plugin } from "jss";
import jssRtl from "jss-rtl";

const getJss = () => {
  const jssRtlPlugin = jssRtl({
    enabled: true,
  }) as Plugin;
  return create({ plugins: [...jssPreset().plugins, jssRtlPlugin] });
};

const getJssClassName = () => {
  return createGenerateClassName();
};

export default {
  jss: getJss(),
  generateClassName: getJssClassName(),
};
