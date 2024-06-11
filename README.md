# Goodli

Example React Native **iOS** app that uses scrolling picker to update the reps in a given workout set. See file `/features/workout.feature` for more.

## Get started

Prereqs:

- PNPM (JavaScript package manager; tested with v8.13.1)
- CocoaPods (iOS lib package manager; tested with v1.15.2)
- XCode (simulator; tested with v15.4)

1. Install dependencies

   ```bash
   pnpm install
   cd ios/ && pod install && cd ../
   ```

3. Start the app

   ```bash
   pnpm ios
   ```

4. (Optional) Run E2E test suite

   ```bash
   pnpm detox build -c ios.sim.debug
   pnpm e2e:ios
   ```

## Backlog

- [ ] Add code formatter
- [ ] Add pre-commit hooks for sanity check
- [ ] CI
- [ ] Clean up error messages in local server after running e2e tests

    ```
    [Detox] Error receiving message: The operation couldn’t be completed. Socket is not connected
    [Detox] Web socket failed to connect with error: The operation couldn’t be completed. Socket is not connected
    [Detox] Web socket failed to connect with error: Could not connect to the server.
    [Detox] Web socket failed to connect with error: Could not connect to the server.
    ```

- [ ] ...
