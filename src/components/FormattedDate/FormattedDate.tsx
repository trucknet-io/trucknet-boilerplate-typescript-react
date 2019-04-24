import { format, Locale } from "date-fns";
import * as locales from "date-fns/locale";
import * as React from "react";
import { getDateFnsLocale } from "src/utils/locale";

import { WithLocale, withLocale } from "src/contexts/LocaleContext";

// Use only locolized date and time formats
// https://date-fns.org/v2.0.0-alpha.27/docs/format
type allowedDateFormats =
  | "P"
  | "PP"
  | "PPP"
  | "PPPP"
  | "p"
  | "pp"
  | "ppp"
  | "pppp"
  | "Pp"
  | "PPpp"
  | "PPPppp"
  | "PPPPpppp";

interface Props extends WithLocale {
  date: Date;
  format: allowedDateFormats;
}

class FormattedDate extends React.Component<Props> {
  public render() {
    return this.formatDate();
  }
  private formatDate = () => {
    const { date, format: formatStr, locale } = this.props;
    return format(date, formatStr, {
      locale: (locales as { [locale: string]: Locale })[
        getDateFnsLocale(locale)
      ],
    });
  };
}

export default withLocale(FormattedDate);
