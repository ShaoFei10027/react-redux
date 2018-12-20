


export function counter(state=0, action){
	switch(action.type){
		case 'add': return state + 1
		case 'del': return state - 1
		default: return 10 
	}
}


export function addv(){
	return dispatch=>{
		setTimeout(()=>{
			dispatch(delv())
		}, 2000)
	}
}

export function delv(){
	return {
		type: 'del'
	}
}