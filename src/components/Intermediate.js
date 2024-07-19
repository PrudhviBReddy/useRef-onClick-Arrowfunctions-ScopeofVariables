import React, { useRef } from 'react'

function Intermediate() {
    let regdnumberinputref = useRef();
    let studentnameinputref = useRef();
    let fathernameinputref = useRef();
    let mothernameinputref = useRef();
    let englishinputref = useRef();
    let sanskritinputref = useRef();
    let mathsainputref = useRef();
    let mathsbinputref = useRef();
    let physicsinputref = useRef();
    let chemistryinputref = useRef();
    let resultspararef = useRef();

  return (
    <div>
        <form className="inter">
            <h1>TELANGANA STATE BOARD OF INTERMEDIATE EDUCATION</h1>
            <div>
                <label>REGD NUMBER</label>
                <input type="number" ref={regdnumberinputref}></input>
            </div>
            <div>
                <label>STUDENT NAME</label>
                <input type="text" ref={studentnameinputref}></input>
            </div>
            <div>
                <label>FATHER'S NAME</label>
                <input type="text" ref={fathernameinputref}></input>
            </div>
            <div>
                <label>MOTHER'S NAME</label>
                <input type="text" ref={mothernameinputref}></input>
            </div>
            <div>
                <label>ENGLISH</label>
                <input type="number" ref={englishinputref}></input>
            </div>
            <div>
                <label>SANSKRIT</label>
                <input type="number" ref={sanskritinputref}></input>
            </div>
            <div>
                <label>MATHS-(A)</label>
                <input type="number" ref={mathsainputref}></input>
            </div>
            <div>
                <label>MATHS-(B)</label>
                <input type="number" ref={mathsbinputref}></input>
            </div>
            <div>
                <label>PHYSICS</label>
                <input type="number" ref={physicsinputref}></input>
            </div>
            <div>
                <label>CHEMISTRY</label>
                <input type="number" ref={chemistryinputref}></input>
            </div>
            <div>
                <button type="button" 
                onClick={()=>{
                    let regdnumber = regdnumberinputref.current.value;
                    let studentname = studentnameinputref.current.value;
                    let fathername = fathernameinputref.current.value;
                    let mothername = mothernameinputref.current.value;
                    let englishmarks = Number(englishinputref.current.value);
                    let sanskritmarks = Number(sanskritinputref.current.value);
                    let mathsamarks = Number(mathsainputref.current.value);
                    let mathsbmarks = Number(mathsbinputref.current.value);
                    let physicsmarks = Number(physicsinputref.current.value);
                    let chemistrymarks = Number(chemistryinputref.current.value);
                    let totalmarks = englishmarks+sanskritmarks+mathsamarks+mathsbmarks+physicsmarks+chemistrymarks;

                    
                    alert(`Total Marks are ${totalmarks}`);
                    resultspararef.current.innerHTML = `${studentname}  got total marks are ${totalmarks}`;
                    console.log(totalmarks);
                    console.log(regdnumber,fathername,mothername,studentname,totalmarks);


                }}>RESULT</button>
            </div>
            <p ref={resultspararef}>Please Enter Values and click for Results</p>
        </form>
    </div>
  )
}

export default Intermediate