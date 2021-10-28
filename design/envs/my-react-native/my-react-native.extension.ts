import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { ReactNativeAspect, ReactNativeMain } from '@teambit/react-native';
import {
  previewConfigTransformer,
  devServerConfigTransformer,
} from './webpack/webpack-transformers';
import { buildConfig, devConfig } from './typescript/typescript-transformer';

export class MyReactNativeExtension {
  constructor(private reactNative: ReactNativeMain) {}

  static dependencies: any = [EnvsAspect, ReactNativeAspect];

  static async provider([envs, reactNative]: [EnvsMain, ReactNativeMain]) {
    const MyReactNativeEnv = reactNative.compose([
      /*
        Use any of the "reactNative.override..." transformers to
      */
      // reactNative.useTypescript({
      //   buildConfig: [buildConfig],
      //   devConfig: [devConfig],
      // }),
      // reactNative.useWebpack({
      //   previewConfig: [previewConfigTransformer],
      //   devServerConfig: [devServerConfigTransformer],
      // }),
      // reactNative.overrideJestConfig(require.resolve('./jest/jest.config')),
    ]);

    envs.registerEnv(MyReactNativeEnv);

    return new MyReactNativeExtension(reactNative);
  }
}
