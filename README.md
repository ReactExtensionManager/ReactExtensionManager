React Extension Manager (REM)
======
## Introduction

React Extension Manager (or REM) is a package manager for third-party React Native Modules built using npm and CocoaPods. REM allows the base of React Native to remain uncluttered and small in size, while supporting native functionality such as Vibrations, MapViews, etc. that is not always needed in an app.

## Installation

<pre>
npm install react-extension-manager
</pre>

## Usage

When stable is hit, REM will support using rem command from bin globally.

At this point in time, we do not recommend making the module global and adding the script to your path as it is still in the works. Run the script using <pre>./node_modules/react-extension-manager/rem.sh</pre>

To use rem, init a project with a podfile and React Native extensions using <pre>rem (./rem.sh) init</pre>
If you add new React Native extensions at a later time, update the project using <pre>rem (./rem.sh) install</pre>

## Pre-Release Notice

**REM is still in alpha.**<br />
We would love for you to submit bugs here:<br />https://github.com/ReactExtensionManager/ReactExtensionManager/issues<br />
and contribute here:<br />https://github.com/ReactExtensionManager/ReactExtensionManager

## Release History

* 0.1.0 Initial Release
* 0.1.1 Added rem.sh script
