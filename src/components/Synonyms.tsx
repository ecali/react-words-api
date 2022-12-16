export const Synonyms = (props: { syn: string[], speech: string }) => {
  return (
    <div className="synonyms">
      <span className="syn-title">Synonymus of <strong>{props.speech.charAt(0).toUpperCase() + props.speech.slice(1)}</strong> :</span>
      {
        props.syn.map((sy, index) => <p className="syn" key={index}> {index + 1} ) { sy.charAt(0).toUpperCase() + sy.slice(1)} </p>)
      }
    </div>
  );
};
