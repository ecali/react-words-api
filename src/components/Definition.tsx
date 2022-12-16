import { DefinitionResponse } from "../hooks/useAxios";

export const Definition = (props: {
  speech: string;
  def: DefinitionResponse[];
}) => {
  return (
    <div className="card">
      <div className="top">
        <p>
          Part Of Speech -{" "}
          <strong>
            {props.speech.charAt(0).toUpperCase() + props.speech.slice(1)}
          </strong>
        </p>
      </div>
      {props.def.map((definition, index) => {
        return (
          <div className="container-card" key={index}>
            <div className="main">
              <span className="def-title">DEFINITION</span>
              <p className="def">{definition.definition}</p>
            </div>
            {definition.example && (
              <div className="bottom">
                <span className="ex-title">EXAMPLE</span>
                <p className="ex"> {definition.example}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
