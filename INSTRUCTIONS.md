REM Example Instructions
======

To start using REM it is easiest to use the example directory provided below.
**REM is still in its infancy. Things will most likely change!**

*Instructions*:
1. Inside the root of the react extension manager source folder <pre>sudo npm link</pre>
3. Go inside the example project and run <pre>npm install</pre> This will install react native for your server
2. Run the new command <pre>rem init</pre> This will install all of your npm modules that are react extensions and React for your XCode project.
4. If no errors occurred go into XCode through the ExampleApp.xcworkspace
5. Inside the Build Phases tab, and under Link Binary With Libraries add the libs for all of your modules that are required for your project.
6. Inside the node_module version of react-native run <pre>npm start</pre>
7. Run the example app in the iOS simulator and watch vibrations and the Text module work as an independent extension.
