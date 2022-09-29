# Installation Notes
- clone repo
```
  cd realm-bug-poc
  # react-native-video-player has some dependency issue with react-native-video
  # But I didn't remove it because I wanted this to be as close to the project that I am working on
  # as possible without sharing the product.
  npm install --legacy-peer-deps
  npx react-native run-android
```
- the app launches and instantly crashes, going back to the phone home screen
- check output of `adb logcat`, there will be a log pointing at Realm

- open `package.json`
- remove the `realm` dependency line
- clean-up and re-install node modules:
```rm -rf node_modules && npm install --legacy-peer-deps```
- re-run `npx react-native run-android`
- The app launches on the Android simulator and displays "hello world"
