import {
    SystemController_Healthcheck,
} from '~/daemon'

export const daemonMixin = {
    data() {
        return {
            daemonHealth: false,
        };
    },
    created: function() {
        this.checkDaemonHealth();
        setInterval(() => {
            this.checkDaemonHealth();
        }, 5 * 1000);
    },
    methods: {
        checkDaemonHealth() {
            SystemController_Healthcheck().then((response) => {
                this.daemonHealth = true;
            }).catch(()=>{
                this.daemonHealth = false;
            })
        },
	}
}