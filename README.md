This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

**Note**: Kindly be aware that this project was tested on Node 20.11.0 and Ruby 2.7.6.

## Step 1: Install and Build Project
First, you will need to install dependencies of the project using:
```bash
# using npm
npm install
```
Then, you need to install the pods for iOS platform project using the newly created command:
```bash
# using npm
npm run refresh:ios
```

Or you can combine them with clean and reset cache option in one step:
```bash
# using npm
npm run startover
```

## Step 2: Start the Metro Server

Now, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Used Technologies:
### Redux and Redux Thunk
For state management and async actions dispatch.

### React Native SQLite db
For caching ordinary and well-structured objects in db in case of no network.

### React Native Vector Icons
To view icons.

### Axios
Handle and manage network requests.

## What could be better:
- Support Dark Mode.
- Use Redux to handle and hold the filter state as well, to modify it through the app lifecycle easily as well.
- Support CRUD operations.

## Video Demo:
https://drive.google.com/file/d/1TpOeThpFSRfklliwprWITEPb7NTQOq0C/view?usp=sharing
