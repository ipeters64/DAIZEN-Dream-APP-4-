// Defining the hooks and variables here//
//This includes the dream definitions when the user submits certain inputs//

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			user: "",
			isUserActive: false,
			userDream: [
			  {
				id: "flying",
				dreamMeaning:
				  "These dreams may be an unconscious attempt by the dreamer to escape their issues, but the act of flying suggests that they have the ability to do so, necessitating thought about fresh approaches to their issues.",
			  },
	  
			  {
				id: "running",
				dreamMeaning:
				  "Running demonstrates a high level of motivation. There is nothing that may deter you from your ambitions because you are certain of what you want in life. You have faith in your ability to succeed and are confident that you will. Additionally, this may indicate that your future holds a great deal of success. Your social standing will be great, and you'll be in excellent financial shape.",
			  },
			  {
				id: "swimming",
				dreamMeaning:
				  "You will probably see improvements in your life during the upcoming several months if you are calmly swimming with the current. You can be experiencing future anxiety if you're treading water in choppy water or swimming against the stream.",
			  },
			  {
				id: "eating",
				dreamMeaning:
				  "Food appears in dreams frequently as something we require to sate our appetite. Even if its not usually a matter of life or death, we believe we need it on some fundamental level. Additionally, eating entails ingesting food into our bodies. Therefore, eating in a dream may represent a close relationship.",
			  },
	  
			  {
				id: "dancing",
				dreamMeaning:
				  "Having dancing dreams is thought to represent optimism, goodwill, celebration, and overall well-being. However, you might be surprised to hear that having dancing-related dreams can also represent a scream for liberation, potential challenges with interpersonal trust, and a struggle with anxiousness. This can be a sign that you need to relax more in real life.",
			  },
			  {
				id: "kissing",
				dreamMeaning:
				  "Kissing-related dreams may be indicative of problems with personal boundaries. This dream indicates that you are having trouble setting boundaries with someone in your life or building bridges. On a platonic level, you might love and respect this individual.",
			  },
			],
			nightmare: [
			  {
				id: "screaming",
				dreamMeaning:
				  "Screaming or crying in a dream can have many different interpretations, but generally speaking, we can say that dreaming about yelling is a representation of our hatred, anger, and resentment in real life, which is typically directed at another person. Also, it might be a metaphor for the anxiety we experience about the safety of our loved ones.",
			  },
			  {
				id: "falling",
				dreamMeaning:
				  "Falling in a dream typically represents losing control of a significant problem. According to psychiatrists, it also denotes fear, horror, and anxiety brought on by losing control of important things. The sensation of falling could be a representation for powerlessness.",
			  },
			  {
				id: "chased",
				dreamMeaning:
				  "chased in a dream refers to a subconscious inner conflict that we are unable to face. Your dream will lead you to the source of the issue using particular themes or pictures. There is a very widespread understanding that chase dreams are connected to increased anxiety in waking life and that the dreamer is avoiding identifying the source of that concern based on the overall context.",
			  },
			  {
				id: "hiding",
				dreamMeaning:
				  "Dreams of hiding commonly have negative connotations. It displays a number of the circumstances you will experience. By hiding, you attempt to run away from the reality that follows you everywhere. This reality typically involves issues with the self, money, family, and spouse. An endless string of discomforts torment you. It is the most frequent dream to hide from someone. This message is provided by the subconscious to highlight current issues in your life as obstacles to your future. Additionally, it serves as a warning that you must defend yourself.",
			  },
			  {
				id: "drowning",
				dreamMeaning:
				  "Being overwhelmed with dreams can therefore be a symptom that we are experiencing stress at work or at home at the time of the dream. In addition to representing the inability to breathe, drowning can also stand in for not having time for yourself. They usually mean that unless they are given a lifeline, the overwhelming amount of responsibilities, sentiments, or difficult situations could pull them down soon",
			  },
			  {
				id: "fighting",
				dreamMeaning:
				  "Fighting in your dream may be a true need to let off steam. A similar dream could also represent repressed rage or dissatisfaction. It may be the case that you have wanted to express yourself to someone for a very long time, which indicates that you find it difficult to find solutions to your difficulties. The persons you argue or battle in your dreams are a representation of the current problems in your life. A struggle of this nature in your dream indicates that you need to make a decision regarding a certain issue, according to your spirit. This action is especially warranted if you have observed a wrongdoing but have taken no action. Recognize that the conflict is much more nearby.",
			  },
			],
	  
			animals: [
			  {
				id: "cat",
				dreamMeaning: "Cats are very powerful dream yet common symbols that connect us to the dreamers feminine nature. A powerful omen relating to creativity, power, intuition and sexuality. The ancient Egyptians connected cats with the Gods. In modern times superstitions like crossing a black cat can also appear in our dreams like a metaphor for danger, though it can be the dreamers own shadow archetype. If you are being attacked by a cat might imply catty nature or an unconscious emotional attack that connects to the feminine part of the dreamer. Dreaming of a kitten suggests purity and innocence. A lions and tigers are powerful symbols of the unconscious feminine and masculine traits.",
			  },
			  {
				id: "dog",
				dreamMeaning: "Dogs are known for their companionship, loyalty, protectors, guardians and providing unconditional love. For centuries they have played important roles in our society, folklore and mythology. However, when dogs enter our dream world the interpretation isn’t so transparent after all. Dogs contain hidden messages that embody aspects of your instincts, consciousness to unconscious searching, warnings and guides.",
			  },
			  {
				id: "bird",
				dreamMeaning: "Generally, birds are a positive symbol that show us peace, freedom, harmony, balance, ideas, joy and love. Keep in mind the meaning of the dream can alter depending on the type, color, condition, number and your location of the dream. Dreaming of birds inspires us to expand our consciousness to reach new heights. These lovely messengers emerge in our dreams to encourage us to broaden our horizons, live more freely and release our fears. If you noticed them in flight it donates to breaking free from your responsibilities and closed minded thinking. Unlike noticing a bird in a cage is a metaphor for your thoughts, desires and restrictions are caged and need to spread its wings.",
			  },
			  {
				id: "unsure",
				dreamMeaning: "A unsure presence",
			  },
			],
			places: [
			  {
				id: "myRoom",
				dreamMeaning: "Rooms are very symbolic in dreams that represents a part of the dreamer that remains open or closed off. They can be seen as a blueprint or layout of the psyche that encourages the dreamer to explore what is seen inside. To dream of unused rooms can be seen as a positive symbol referring to new possibilities that reside within the consciousness of the dreamer. Rooms that have no windows or doors bring you closer to the feminine or womb. The size of the room whether being small or large donates to opportunities that you may have.",
			  },
			  {
				id: "beach",
				dreamMeaning: "When we dream of a beach it could be connected to a positive emotions state of mind. Dreaming of relaxing on a beach house on one hand could suggest a need for vacation, but they are actually more symbolic than you think. The connection between the land and the water bridge the consciousness and emotional unconscious side of the dreamer. Waves are often depictions of emotional disturbances approaching. Sand showing the passing of the time, a symbol to explore the unknown before its too late.",
			  },
			  {
				id: "forest",
				dreamMeaning: "The forest is a place that is closely connected with the unconscious part of the dreamer. In this area it may be thrilling or dangerous depending on how well you know yourself. A symbolic place that helps the dreamer find more about who they are and what has been lost for so long. Known to be dark and mysterious for a reason.",
			  },
			  {
				id: "unsure",
				dreamMeaning: "An unsure presence",
			  },
			],
			articles: [
			  {
				title: "nytimes.com",
				url: "https://www.nytimes.com/search?query=dreams+interpretation",
			  },
			  {
				title: "nature.com",
				url: "https://www.nature.com/search?q=dreams%20interpretations&order=relevance",
			  },
			  {
				title: "pubmed.gov",
				url: "https://pubmed.ncbi.nlm.nih.gov/15766897/",
			  },
			  {
				title: "newyorkacademyofsciences",
				url: "https://nyaspubs.onlinelibrary.wiley.com/doi/10.1111/nyas.13412",
			  },
			  {
				title: "oxfordacademic",
				url: "https://academic.oup.com/sleep/article/16/2/163/2749368?login=false",
			  },
			  {
				title: "astronautabby",
				url: "https://www.astronautabby.com/the-science-behind-sleep-and-dreams/",
			  },
			],
			dreamActionResult: "",
			dreamAnimalResult: "",
			dreamPlaceResult: "",
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			}, //using the actions to call the dream meanings // 
			getDreamMeaning: (dream, animal, action, place) => {
				console.log(dream, animal, action, place);
				let myDreamAction = "";
				if (dream === "dream") {
				  myDreamAction = getStore().userDream.filter(
					(myDream) => myDream.id === action
				  );
				} else if (dream === "nightmare") {
				  myDreamAction = getStore().nightmare.filter(
					(myDream) => myDream.id === action
				  );
				}
				let myDreamAnimal = getStore().animals.filter(
				  (myDream) => myDream.id === animal
				);
		
				let myDreamPlace = getStore().places.filter(
				  (myDream) => myDream.id === place
				);
				
		
				setStore({
				  dreamActionResult: myDreamAction[0].dreamMeaning || "",
				  dreamAnimalResult: myDreamAnimal[0].dreamMeaning || "",
				  dreamPlaceResult: myDreamPlace[0].dreamMeaning || "",
				})
			},
			

			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("Application just loaded, syncing the session storage token")
				if(token && token!="" && token != undefined) setStore({ token: token });

			},

			logout: () => {
				sessionStorage.removeItem("token");
				
				console.log("Logging out")
				setStore({ token: null, message: null });

			},

			login: async (email, password) => {
				const baseUrl = process.env.BACKEND_URL
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password			
					})
				};
				
		try{
			const resp = await fetch(`${process.env.BACKEND_URL}/api/token`, opts)
			if(resp.status !== 200){
				alert("There has been some error");
				return false;
			} 
			
			const data = await resp.json();
			console.log("this came from the backend", data);
			sessionStorage.setItem("token", data.access_token);
			setStore({ token: data.access_token });
			return true;
		} catch(error){
			console.error("There has been an error logging in");
		}

	},
// Gathering the authorization Token //

	getMessage: async () => {
		const store = getStore();
			const opts = {
				headers: {
					"Authorization": "Bearer " + store.token
				}
			}
				try{
					// fetching data from the backend
					const resp = await fetch(`${process.env.BACKEND_URL}/api/hello` , opts)
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
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
			}
		}
	};
};

export default getState;
