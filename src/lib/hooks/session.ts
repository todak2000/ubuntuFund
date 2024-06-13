import { useEffect, useState } from 'react';

import { onAuthStateChanged } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/user';

export function useUserSession(InitSession: string | null) {
  const [userUid, setUserUid] = useState<string | null>(InitSession);
const dispatch = useDispatch()
  // Listen for changes to the user session
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (authUser) => {
      if (authUser) {
        dispatch(setUser({
            name: authUser.displayName as string,
            email: authUser.email as string,
            photo: authUser.photoURL as string,
            uid: authUser.uid as string,
          }))
        setUserUid(authUser.uid);
      } else {
        setUserUid(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return userUid;
}