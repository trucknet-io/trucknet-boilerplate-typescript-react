const Sentry = window.__SENTRY__.hub;

export type ScopeData = {
  id: string;
  email: string;
  locale: string;
};

type User = {
  _id: string;
  email: string;
};

const configureScopeWith = ({ id, email, locale }: ScopeData) => {
  Sentry.configureScope((scope) => {
    // @ts-ignore
    // tslint:disable-next-line: no-unsafe-any
    if (!scope.user.id || !scope.user.email) {
      scope.setUser({ id, email });
      scope.setExtra("lang", locale);
    }
  });
};

const configureUserScope = <U extends User>(
  { _id, email }: U,
  locale: string,
) => {
  configureScopeWith({ id: _id, email, locale });
};

export const setInitialScope = <U extends User>(
  user: U | undefined | null,
  locale: string,
) => {
  if (user) {
    configureUserScope(user, locale);
  }
  setLocaleScope(locale);
};

export const setLoginScope = <U extends User>(user: U, locale: string) => {
  configureUserScope(user, locale);
};

export const setLogoutScope = (locale: string) => {
  Sentry.configureScope((scope) => {
    scope.clear();
    setLocaleScope(locale);
  });
};

export const setLocaleScope = (locale: string) => {
  Sentry.configureScope((scope) => {
    scope.setExtra("lang", locale);
  });
};
