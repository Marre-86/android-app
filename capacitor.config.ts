import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'android.app',
  appName: 'android-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
