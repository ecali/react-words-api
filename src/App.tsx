import { useState } from "react";
import "./App.css";
import { Definition } from "./components/Definition";
import { Header } from "./components/Headers";
import { Synonyms } from "./components/Synonyms";
import { Word } from "./components/Word";
import { UseAxios } from "./hooks/useAxios";

function App() {
  const [word, setWord] = useState("");
  const [selection, setSelection] = useState("");

  const { response, error, loading, operation } = UseAxios();

  const handleMeaning = () => {
    operation(word);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="spacer"></div>
        <Word
          text={{ value: word, setValue: setWord }}
          selection={{ value: selection, setValue: setSelection }}
          disabled={!word}
          action={handleMeaning}
        />
        {loading && <div className="lds-dual-ring"></div>}
        {error && (
          <div className="error-cnt">
            <h2>{error}</h2>
            <hr className="hspacer" />
            <h2>Can you try another word please </h2>
          </div>
        )}
        {response && (
          <div className={selection === "synonyms" ? "syn-cnt" : "data-cnt"}>
            <div className="min-title">
              <h3>{selection === "synonyms" ? "Synonyms" : "Definitions"}</h3>
            </div>
            {response.meanings.map((resp, index) =>
              selection === "synonyms" ? (
                resp.synonyms.length > 0 ? (
                  <Synonyms
                    key={index}
                    syn={resp.synonyms}
                    speech={resp.partOfSpeech}
                  />
                ) : (
                  index === 0 && (
                    <div className="no-syn">
                      <h3>
                        <strong>
                          {word.charAt(0).toUpperCase() + word.slice(1)}
                        </strong>{" "}
                        has no <strong>Synonyms</strong>
                      </h3>
                    </div>
                  )
                )
              ) : (
                <Definition
                  key={index}
                  speech={resp.partOfSpeech}
                  def={resp.definitions}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
