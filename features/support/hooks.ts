// ref: https://wix.github.io/Detox/docs/guide/cucumber-js-integration/
import { After, AfterAll, Before, BeforeAll, ITestCaseHookParameter } from '@cucumber/cucumber'
import detox from 'detox/internals';

BeforeAll({ timeout: 120 * 1_000 }, async () => {
  await detox.init();
  await device.launchApp();
});

Before(async () => {
  await device.reloadReactNative();
});

After(async (message: ITestCaseHookParameter) => {
  const { pickle, result } = message;
  await detox.onTestDone({
    title: pickle.uri,
    fullName: pickle.name,
    status: result ? 'passed' : 'failed',
  });
});

AfterAll(async () => {
  await detox.cleanup();
})
