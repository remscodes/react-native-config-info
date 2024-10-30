#import <React/RCTBridgeModule.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNConfigInfoModule: NSObject <RCTBridgeModule>

- (void) get: (NSString*) key
         resolver: (RCTPromiseResolveBlock) resolve
         rejecter: (RCTPromiseRejectBlock) reject;

- (nullable NSString*) getSync: (NSString*) key;

@end

NS_ASSUME_NONNULL_END
