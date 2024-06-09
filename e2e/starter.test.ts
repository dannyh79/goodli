// ref: https://wix.github.io/Detox/docs/next/guide/typescript/#writing-detox-tests-in-typescript
import { expect } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('has welcome screen', async () => {
    await expect(element(by.text('Welcome!'))).toBeVisible();
  });

  it('shows explore screen after tap', async () => {
    await element(by.id('explore-button')).tap();
    await expect(element(by.text('This app includes example code to help you get started.'))).toBeVisible();
  });

  it('shows home screen after tap', async () => {
    await element(by.id('home-button')).tap();
    await expect(element(by.text('Step 1: Try it'))).toBeVisible();
  });
});
