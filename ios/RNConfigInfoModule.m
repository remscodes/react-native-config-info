#import "RNConfigInfoModule.h"

@implementation RNConfigInfoModule

- (dispatch_queue_t) methodQueue {
    return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE(RNConfigInfo);

RCT_EXPORT_METHOD(get: (NSString*) key
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock) reject) {
    resolve([self readValue:key]);
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getSync: (NSString*) key) {
    return [self readValue:key];
}

- (nullable NSString *) readValue: (NSString*) key {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:key];
}

@end
