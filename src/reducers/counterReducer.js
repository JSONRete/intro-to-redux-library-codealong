// ./src/reducers/counterReducer

export default function counterReducer(
	state = {
	  clicks: 0
	},
	action
  ) {
	console.log(1, action);
	switch (action.type) {
	  case "INCREASE_COUNT":
		console.log(2, "Current state.clicks %s", state.clicks);
		console.log(3, "Updating state.clicks to %s", state.clicks + 1);
		return {
		  clicks: state.clicks + 1
		};
  
	  default:
		console.log(4, "Initial state.clicks: %s", state.clicks);
		return state;
	}
  }
  