import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'wheels',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
