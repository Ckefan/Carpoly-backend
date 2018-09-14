const ADD_GUN = 'add';
const REMOVE_GUN = 'subtract';

export function counter(state = 10, action) {
	switch (action.type) {
		case 'add':
			return state + 1
		case 'subtract':
			return state - 1
		default:
			return 10
	}
}
export function addGun(data) {
	return {
		type: ADD_GUN
	}
}
export function removeGun() {
	return {
		type: REMOVE_GUN
	}
}
export function addGunAsny() {
	return dispatch => {
		setTimeout(() => {
			dispatch(addGun());
		}, 2000)
	}
}