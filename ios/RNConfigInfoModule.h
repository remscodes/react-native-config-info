#import <React/RCTBridgeModule.h>

@interface RNConfigInfoModule: NSObject <RCTBridgeModule>

- (NSString*) getSync: (NSString*) key;

- (void) get: (NSString*) key
         resolver: (RCTPromiseResolveBlock) resolve
         rejecter: (RCTPromiseRejectBlock) reject;

@end
