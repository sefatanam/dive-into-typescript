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

/* BAD */
/* const sendEvent = (eventType: EventType['type'], payload?: any) => { }
sendEvent('LOGIN', {}) // not type safe
sendEvent('LOGIN') // not type safe
sendEvent('SIGN_OUT', {}) // not type safe
sendEvent('SIGN_OUT', { userId: 1 }) // not type safe */

/* GOOD */
// TODO: Implement sendEvent function
//
const sendEvent = <T extends EventType["type"]>(
	...args: Extract<EventType, { type: T }> extends { payload: infer TPayLoad }
		? [type: T, payload: TPayLoad]
		: [type: T]
) => {};

sendEvent("LOGIN", { userId: 1 });
sendEvent("SIGN_OUT");
