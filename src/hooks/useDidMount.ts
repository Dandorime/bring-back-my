import useUserData from '@/store/userData';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';
import { useEffect, useState } from 'react';

/**
 * @return True, if component was mounted.
 */
export function useDidMount(): boolean {
  const [didMount, setDidMount] = useState(false);

  const userData = useUserData

  const { initDataRaw } = retrieveLaunchParams();

  const onLaunch = async () => {
    const response = await fetch('https://dandorime-backend-bring-back-my-9b5b.twc1.net/', {
      method: 'POST',
      headers: {
        Authorization: `tma ${initDataRaw}`
      },
    })

    const userInfo = await response.json()

    console.log(JSON.stringify(userInfo))

    // userData.setUserData = userInfo.data



    await fetch('https://dandorime-backend-bring-back-my-9b5b.twc1.net/calendar', {
      method: 'GET',
      headers: {
        Authorization: `tma ${initDataRaw}`
      },
    })

    await fetch('https://dandorime-backend-bring-back-my-9b5b.twc1.net/tasks', {
      method: 'GET',
      headers: {
        Authorization: `tma ${initDataRaw}`
      },
    })

    await fetch('https://dandorime-backend-bring-back-my-9b5b.twc1.net/promos', {
      method: 'GET',
      headers: {
        Authorization: `tma ${initDataRaw}`
      },
    })

    setDidMount(true)
  }

  useEffect(() => {
    onLaunch();
  }, []);

  return didMount;
}