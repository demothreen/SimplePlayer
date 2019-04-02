//
//  VideoPlayer.h
//  SimplePlayer
//
//  Created by demothreen on 02/04/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "React/RCTBridgeModule.h"
#import <Foundation/Foundation.h>
#import <AVKit/AVKit.h>
#import <AVFoundation/AVFoundation.h>

@interface VideoPlayer : NSObject <RCTBridgeModule>

@property (strong, nonatomic) NSURL *videoURL;
@property (nonatomic, strong) AVPlayerViewController *playerViewController;

@end
