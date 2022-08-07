import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteDataHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteDataHandler} />;
};

export default NewQuote;
