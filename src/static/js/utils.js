/**
 * 订阅发布
 */
export const EventHub = {
    events: {},
    on(event, fn) {
        if (this.events[event]) {
            this.events[event].push(fn);
        } else {
            this.events[event] = [fn];
        }
    },
    emit(event, ...rest) {
        if (this.events[event] !== undefined && Array.isArray(this.events[event])) {
            this.events[event].forEach((fn) => {
                fn(...rest);
            });
        }
    },
    off(event, fn) {
        if (fn === undefined) {
            delete this.events[event];
        } else {
            const idx = this.events[event].indexOf(fn);
            if (idx >= 0) {
                this.events[event].splice(idx, 1);
            }
        }
    },
};