export const Faq_Data = [
    {
         id: 1,
         title: "What is Netflix ?",
         para1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
         para2: "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
      },
      {
         id: 2,
         title: "How much does Netflix cost ?",
         para1: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
      },
      {
         id: 3,
         title: "Where can I watch ?",
         para1: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
         para2: "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
      },
      {
         id: 4,
         title: "How do I cancel ?",
         para1: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
      },
      {
         id: 5,
         title: "What can I watch on Netflix ?",
         para1: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
      },
      {
         id: 6,
         title: "Is Netflix good for Kids ?",
         para1: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
         para2: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
      }
]



// useEffect(() => {
    //     try {
    //         fetch("http://localhost:3001/Faq_Data")
    //             .then((res) => res.json())
    //             .then((json) => {
    //                 setFaqData(json);
    //                 const initialOpenState = {};
    //                 json.forEach((item, index) => {
    //                     initialOpenState[index] = false; // Initially all items are closed
    //                 });
    //                 setOpenItems(initialOpenState);
    //             })
    //     } catch (error) {
    //         console.warn(error);
    //     }
    // }, [])

    
    // const toggleItem = (index) => {
    //     setOpenItems((prevState) => ({
    //         ...prevState,
    //         [index]: !prevState[index], // Toggle the state of the clicked item
    //     }));
    //     setOpenItems((prevState) => {
    //         const isOpen = prevState[index];
    //         const updatedState = {};
    //         Close all items except the one at the clicked index
    //         Object.keys(prevState).forEach((key) => {
    //             updatedState[key] = key === index.toString() ? !isOpen : false;

    //         });
    //         return updatedState;
    //     });
    // };