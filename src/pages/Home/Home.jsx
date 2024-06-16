import { useEffect, useState } from "react";
import "./Backround.css";
const Home = () => {

    const [quotes, setQuotes] = useState([]);

    const [currentQuote, setCurrentQuote] = useState(null);

    console.log(quotes);

    useEffect(() => {
        fetch("http://localhost:5000/quotes")
            .then(res => res.json())
        .then(data=>setQuotes(data))
    },[])


    const handleClick = () => {
        const myNumber = parseInt(Math.random() * 10);
        console.log(myNumber);
        document.getElementById("my_modal_3").showModal()

        const result = quotes.find(quote => quote.id === myNumber);

        console.log(result);
        setCurrentQuote(result)
    }
    return (
      <div className="bgImage flex justify-center items-center">
        <button
            className="btn mt-96 ml-10 btn-accent text-white"
          onClick={handleClick}
        >
          Click Here
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
                    <h3 className="font-bold text-lg">{ currentQuote?.title}</h3>
                    <p className="py-4">{ currentQuote?.quote}</p>
          </div>
        </dialog>
      </div>
    );
};

export default Home;