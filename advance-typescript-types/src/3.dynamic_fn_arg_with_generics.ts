<<<<<<< HEAD
type EventType =
	| {
			type: "LOGIN";
			payload: {
				userId: 1;
			};
	  }
	| {
			type: "SIGN_OUT";
	  };
=======
type EventType = {
    type: "LOGIN",
    payload: {
        userId: 1
    }
} | {
    type: 'SIGN_OUT'
}
>>>>>>> ea459e0 (remove dump file and folders)

/* BAD */
/* const sendEvent = (eventType: EventType['type'], payload?: any) => { }
sendEvent('LOGIN', {}) // not type safe
sendEvent('LOGIN') // not type safe
sendEvent('SIGN_OUT', {}) // not type safe
sendEvent('SIGN_OUT', { userId: 1 }) // not type safe */

/* GOOD */
<<<<<<< HEAD
// TODO: Implement sendEvent function
//
const sendEvent = <T extends EventType["type"]>(
	...args: Extract<EventType, { type: T }> extends { payload: infer TPayLoad }
		? [type: T, payload: TPayLoad]
		: [type: T]
) => {};

sendEvent("LOGIN", { userId: 1 });
sendEvent("SIGN_OUT");
=======
const sendEvent = <TType extends EventType['type']>
    (...args: Extract<EventType, { type: TType }> extends { payload: infer TPayLoad }
        ? [type: TType, payload: TPayLoad]
        : [type: TType]) => { }

sendEvent('LOGIN', { userId: 1 })
sendEvent('SIGN_OUT')
>>>>>>> ea459e0 (remove dump file and folders)
