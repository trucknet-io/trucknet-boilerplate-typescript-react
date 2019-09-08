// This line fixes TS --isolatedModules flag error
export {};

window.__SENTRY__ = {
  // @ts-ignore
  hub: {
    configureScope: jest.fn((fn) => {
      const scope = {
        user: {},
        setUser: jest.fn(),
        setExtra: jest.fn(),
        clear: jest.fn(),
      };
      // @ts-ignore
      fn(scope);
    }),
  },
};
