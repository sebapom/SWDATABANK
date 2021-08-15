const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPeople: () => {
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch("https://swapi.dev/api/people", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(JSON.stringify(result));
						setStore({ peopleOfStarWars: result });
					})
					.catch(error => {
						console.log("error", error);
					});
			}
		}
	};
};

export default getState;
