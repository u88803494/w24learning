import { UPDATE_NAV_TEXT, UPDATE_TEST } from './actionTypes';

let callbacks = [];

let globalState = {
	navText: "home",
};

function nofityAll() {
	for (let i = 0; i < callbacks.length; i++) {
		callbacks[i](globalState);
	};
};

export const subscribe = (cb) => {
	callbacks.push(cb);
}

export const dispatch = (action) => {
	if (action.type === UPDATE_NAV_TEXT) {
		globalState = reducer(globalState, action);
	}
	nofityAll();
}

// [].reduce()
function reducer(globalState, action) {
	switch (action.type) {
		case UPDATE_NAV_TEXT:
			return {
				...globalState,
				navText: action.value,
			};
		case UPDATE_TEST:
			return {
				...globalState,
				test: action.value,
			};
		default:
			return globalState;
	}
}