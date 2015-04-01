REM Example Instructions
======

To start using REM it is easiest to use the example directory provided below.
**REM is still in its infancy. Things will most likely change!**

*Instructions*:<br />
1. Follow the install instructions by running:<pre>npm install git://github.com/ReactExtensionManager/ReactExtensionManager.git -g</pre>
2. Go inside the example project and run <pre>npm install</pre> This will install react native for your server <br />
3. Run the new command <pre>rem init</pre> This will install all of your npm modules that are react extensions and React for your XCode project. <br />
4. If no errors occurred go into XCode through the ExampleApp.xcworkspace <br />
5. Inside the Build Phases tab, and under Link Binary With Libraries add the libs for all of your modules that are required for your project. <br />
6. Inside the node_module version of react-native run <pre>npm start</pre> <br />
7. Run the example app in the iOS simulator and watch vibrations and the Text module work as an independent extension. <br />
