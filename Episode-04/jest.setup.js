const originalWarn = console.warn;

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation((msg) => {
    if (msg.includes("React Router Future Flag Warning")) {
      return;
    }
    originalWarn(msg);
  });
});
