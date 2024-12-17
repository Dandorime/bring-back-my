import useCalendarData from '@/store/calendarData';
import usePromosData from '@/store/promosData';
import useTasksData from '@/store/tasksData';
import useUserData from '@/store/userData';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';
import { useEffect, useState } from 'react';

/**
 * @return True, if component was mounted.
 */
export function useDidMount(): boolean {
  const [didMount, setDidMount] = useState(false);

  const userData = useUserData
  const calendarData = useCalendarData
  const tasksData = useTasksData
  const promosData = usePromosData

  const { initDataRaw } = retrieveLaunchParams();

  const onLaunch = async () => {
    const userResponse = await fetch('https://dandorime-backend-bring-back-my-9b5b.twc1.net/', {
      method: 'POST',
      headers: {
        Authorization: `tma ${initDataRaw}`
      },
    })

    const userInfo = await userResponse.json()

    userData.setUserData = userInfo.user
    userData.setTikets = userInfo.tikets
    userData.setUserPromos = userInfo.userPromos
    userData.setTikets = userInfo.completedTasks
    userData.visits = userInfo.visits



    const calendarResponse = await fetch('https://dandorime-backend-bring-back-my-9b5b.twc1.net/calendar', {
      method: 'GET',
      headers: {
        Authorization: `tma ${initDataRaw}`
      },
    })

    const calendarInfo = await calendarResponse.json()

    calendarData.setCalendar = calendarInfo.calendar

    const tasksResponse = await fetch('https://dandorime-backend-bring-back-my-9b5b.twc1.net/tasks', {
      method: 'GET',
      headers: {
        Authorization: `tma ${initDataRaw}`
      },
    })

    const tasksInfo = await tasksResponse.json()

    tasksData.setTasks = tasksInfo.tasks

    const promosRes = await fetch('https://dandorime-backend-bring-back-my-9b5b.twc1.net/promos', {
      method: 'GET',
      headers: {
        Authorization: `tma ${initDataRaw}`
      },
    })

    const promosInfo = await promosRes.json()

    promosData.setPromos = promosInfo.promos

    setDidMount(true)
  }

  useEffect(() => {
    onLaunch();
  }, []);

  return didMount;
}