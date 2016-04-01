### React Native Deployment
<p>Complete Bundle Installation of current version of the application, will need to re-bundle for each iterations</p>

### React Native Dependencies Installation (for servicing over development server)
  * Uninstall watchman and flow via npm and homebrew first
  * Install watchman & flow only via homebrew
    * brew install watchman
    * brew install flow

### Using offline bundle
  * source: https://facebook.github.io/react-native/docs/running-on-device-ios.html
1. Open Appname/ios/Appname/appDelegate.m
2. Make a copy of the file appDelegate.m
3. Uncomment line 34 jsCodeLocation = [[NSbundle mainBundle]]...
4. Make sure iPhone is connected to the Mac
5. Select iPhone device
6. Command R - Export Bundle to iPhone.
