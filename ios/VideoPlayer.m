//
//  VideoPlayer.m
//  SimplePlayer
//
//  Created by demothreen on 02/04/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "VideoPlayer.h"

@implementation VideoPlayer

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(play: (NSString*) url)
{
  self.videoURL = [NSURL URLWithString:url];
  UIViewController *rootViewController = [[[[UIApplication sharedApplication] delegate] window] rootViewController];
  
  AVPlayer *player = [AVPlayer playerWithURL:self.videoURL];
  self.playerViewController = [AVPlayerViewController new];
  _playerViewController.player = player;
  _playerViewController.showsPlaybackControls = YES;
  
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [rootViewController.view addSubview:self.playerViewController.view];
    [rootViewController presentViewController:self.playerViewController animated:YES completion:nil];
    
  });
  
  _playerViewController.player.play;
}

@end
