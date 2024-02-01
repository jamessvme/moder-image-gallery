import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'modern-image-gallery',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
