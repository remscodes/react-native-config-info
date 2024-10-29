#import "RNConfigInfoModule.h"

@implementation RNConfigInfoModule

- (dispatch_queue_t) methodQueue {
    return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE(RNConfigInfo);

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getSync: (NSString*) key) {
  return [[NSBundle mainBundle] objectForInfoDictionaryKey:key];
}

RCT_EXPORT_METHOD(get: (NSString*) key
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock) reject) {
  NSString *value = [[NSBundle mainBundle] objectForInfoDictionaryKey:key];

  if (value) {
    resolve(value);
  }
  else {
    reject(@"config_info_nil",
          [NSString stringWithFormat:@"The key (%@) returned a nil value.", key],
          nil);
  }
}

@end
