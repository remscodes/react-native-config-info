require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |spec|
  spec.name         = 'RNConfigInfo'
  spec.version      = package['version']
  spec.author       = package['author']
  spec.summary      = package['description']
  spec.license      = package['license']
  spec.platforms    = { :ios => '11.0' }
  spec.homepage     = package['homepage']
  spec.source       = { :git => package['homepage'], :tag => 'main'}
  spec.source_files = 'ios/**/*.{h,m,mm}'
  spec.dependency 'React-Core'
end
