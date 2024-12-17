import { makeAutoObservable } from "mobx";

const useUserData = makeAutoObservable({
        user: {
        id:  null,
        authDate: '',
        firstName: '',
        missed_days: 0,
        username: ''
        },
        tikets: {
        user_id: null,
        count: 0,
        last_data_add_from_game: null,
        penalty: 0
        },
        userPromos: {
        user_id: null,
        promo_ids: []
        },
        completedTasks: {
        user_id: null,
        task_ids: []
        },
        visits: {
        user_id: null,
        calendar_ids: [],
        is_open: false
        },
        initDataRaw: '',

        setUserData(data: any) {
            this.user = data
        },

        setTikets(data: any) {
            this.tikets = data
        },

        setUserPromos(data: any) {
            this.userPromos = data
        },

        setCompletedTasks(data: any) {
            this.completedTasks = data
        },

        setVisits(data: any) {
            this.visits = data
        },

        setInitDataRaw(data: string) {
            this.initDataRaw = data
        }
        
})

export default useUserData
