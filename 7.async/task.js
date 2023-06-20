class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!callback || !time) {
            throw new Error('Отсутствуют обязательные аргументы')
        } else if (this.alarmCollection.find(clock => clock.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        return this.alarmCollection.push({
            callback,
            time,
            canCall: true
        })
    }


    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time)
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, 5)
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }

        const newInterval = () => {
            this.alarmCollection.forEach(clock => {
                if (clock.time === this.getCurrentFormattedTime() && clock.canCall) {
                    clock.canCall = false;
                    clock.callback();
                }
            });
        };

        newInterval();
        this.intervalId = setInterval(newInterval, 1000);
    }

    stop() {
        clearInterval();
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(clock => clock.canCall = true)
    }

    clearAlarms() {
        stop()
        this.alarmCollection = [];
    }
}