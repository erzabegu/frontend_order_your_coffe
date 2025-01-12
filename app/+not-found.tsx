import {Stack, useRouter} from 'expo-router';
import {useEffect} from "react";


export default function NotFoundScreen() {

  return (
    <>
        <Stack.Screen options={{ title: 'Oops!' }} >

        </Stack.Screen>
    </>
  );
}

