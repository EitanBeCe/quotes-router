import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteDataHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes"); // Redirects to that page, but allows to go on prev page with "back" button
  };
  return <QuoteForm onAddQuote={addQuoteDataHandler} />;
};

export default NewQuote;
