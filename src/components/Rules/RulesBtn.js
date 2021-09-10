import "./RulesBtn.css";

// import rulestable from "../../images/image-rules.svg";

function RulesBtn() {
  const handleclick = (event) => {};

  return (
    <>
      <div id="rules-div">
        {/* <div className={false ? "show-rules" : "hide-rules"}>
          <img src={rulestable} alt="rules-table" />
        </div> */}
        <input type="submit" onClick={handleclick()} value="RULES" />
      </div>
    </>
  );
}

export default RulesBtn;
