#
# Be sure to run `pod lib lint react-native-vibration.podspec' to ensure this is a
# valid spec and remove all comments before submitting the spec.
#
# Any lines starting with a # are optional, but encouraged
#
# To learn more about a Podspec see http://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = "react-native-vibration"
  s.version          = "0.1.0"
  s.summary          = "The React Native Module for Vibration"
  s.license          = 'BSD'
  s.platform     = :ios, '7.0'
  s.requires_arc = true

  s.source_files = 'ios/**/*.{h,m}'
end
