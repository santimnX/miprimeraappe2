import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      statusBarStyle: 'light',
      statusBarAnimation: 'slide',
      
    }}
  />;
}