export interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const Word = (props: {text: Props, selection: Props, disabled: boolean, action: () => void}) => {
  return (
    <div className="word-container">
      <input
        placeholder="Start typing here..."
        value={props.text.value}
        onChange={(e) => props.text.setValue(e.target.value)}
      ></input>
      <hr className="hspacer"/>
      <div className="select-container">
        <select  value={props.selection.value} onChange={(e) => props.selection.setValue(e.target.value)}>
          <option value="">Dictionary</option>
          <option value="synonyms">Synonyms</option>
        </select>
        <button className="main-button" onClick={props.action} disabled={props.disabled} style={{width: '50%', borderRadius: '0 5px 5px 0', marginLeft: '10px', textTransform: 'uppercase'}} >show meaning
</button>
      </div>
    </div>
  );
};
