import React, { useRef } from "react";

function MarksSheet() {
  
  let firstNameInput = useRef();
  let lastNameInput = useRef();
  let engMarksInput = useRef();
  let telMarksInput = useRef();
  let matMarksInput = useRef();
  let sciMarksInput = useRef();
  let hinMarksInput = useRef();
  let socMarksInput = useRef();
  // let a=30;

  return (
    <div>
        <div className="heading">
        <h1>MARKS SHEET</h1>
        </div>
       
      <form className="form">
      
        <div>
          <label for="fname">Firstname:</label>
          <input type="text" id="fname" ref={firstNameInput}></input>
        </div>
        <div>
          <label for="lname">Lastname:</label>
          <input type="text" id="lname" ref={lastNameInput}></input>
        </div>
        <div>
          <label>englishMarks:</label>
          <input type="number" ref={engMarksInput}></input>
        </div>
        <div>
          <label>TeluguMarks:</label>
          <input type="number" ref={telMarksInput}></input>
        </div>
        <div>
          <label>HindiMarks:</label>
          <input type="number" ref={hinMarksInput}></input>
        </div>
        <div>
          <label>MathsMarks:</label>
          <input type="number" ref={matMarksInput}></input>
        </div>
        <div>
          <label>ScienceMarks:</label>
          <input type="number" ref={sciMarksInput}></input>
        </div>
        <div>
          <label>SocialMarks:</label>
          <input type="number" ref={socMarksInput}></input>
        </div>
        <div>
          <button type="button"
            onClick={() => {
              engMarksInput.current.style.backgroundColor="red";
              let engMarks = engMarksInput.current.value;
              let telMarks = telMarksInput.current.value;
              let hinMarks = hinMarksInput.current.value;
              let sciMarks = sciMarksInput.current.value;
              let matMarks = matMarksInput.current.value;
              let socMarks = socMarksInput.current.value;

            

              let total =
                Number(engMarks) +
                Number(telMarks) +
                Number(hinMarks) +
                Number(matMarks) +
                Number(sciMarks) +
                Number(socMarks);

                
                
                alert(total);
                

                
            }}
          >
            GRANDTOTAL
          </button>
        </div>

        <button type="button" onClick={()=>{
            let Lastname= lastNameInput.current.value;
            alert(Lastname);
        }}>SCOPEOFVARIABLE</button>
      </form>
    </div>n
  );
}

export default MarksSheet;
