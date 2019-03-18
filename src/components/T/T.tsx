import * as React from "react";

import { WithLocale, withLocale } from "src/contexts/LocaleContext";

interface Props extends WithLocale {
  id: string;
}

class T extends React.Component<Props> {
  public shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<{}>,
    nextContext: any,
  ) {
    return true;
  }
  public render() {
    return this.props.id;
  }
}

export default withLocale(T);
