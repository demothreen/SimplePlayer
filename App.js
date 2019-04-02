/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, NativeModules} from 'react-native';

const VideoPlayer = NativeModules.VideoPlayer;

type Props = {};
export default class App extends Component<Props> {

  handleOnPressPlay = () => {
    let exampleUrl = "http://p.events-delivery.apple.com.edgesuite.net/16oibfvohbfvoihbdfvoihbefv10/m3u8/atv_vod_mvp.m3u8";
    VideoPlayer.play(exampleUrl);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={false}
          onPress={this.handleOnPressPlay}
        >
          <View style={styles.watchBtn}>
            <Text
              allowFontScaling={false}
              style={[
                styles.textBtn,
              ]}
            >
              {"WATCH"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  watchBtn: {
    backgroundColor: "#4585be",
    borderRadius: 24,
    padding: 10,
  },
  textBtn: {
    color: "#FFF",
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 7,
    marginRight: 7,
  },
});
