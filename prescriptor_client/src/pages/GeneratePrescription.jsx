import React from "react";
<link
  rel="stylesheet"
  href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css"
/>;

function GeneratePrescription() {
  const addClass = () => {
    document.querySelector(".popup").classList.add("active");
  };
  const removeClass = () => {
    document.querySelector(".popup").classList.remove("active");
  };
  return (
    <>
      <h4 style={{ textAlign: "center", marginTop: "1rem" }}>
        Patient Details
      </h4>
      <form>
        <div
          className="parent"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div
            className="form-group"
            style={{
              width: "80%",
              marginTop: "2rem",
            }}
          >
            <div class="col-sm-10" style={{ width: "90%", marginLeft: "1rem" }}>
              <input
                type="text"
                class="form-control"
                id="pname"
                placeholder="Patient's Name"
              />
            </div>
            <div
              class="col-sm-10"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "1rem",
                width: "90%",
                marginLeft: "1rem",
                marginTop: "2rem",
              }}
            >
              <input
                type="date"
                class="form-control"
                placeholder="Date of Birth"
                style={{ width: "50%", marginRight: "0.3rem" }}
              />
              <input
                style={{ width: "50%", marginLeft: "0.3rem" }}
                type="number"
                class="form-control"
                placeholder="Age"
              />
            </div>
            <div
              class="col-sm-10"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "1rem",
                width: "90%",
                marginLeft: "1rem",
                marginTop: "2rem",
              }}
            >
              <input
                type="text"
                class="form-control"
                placeholder="Gender"
                style={{ width: "50%", marginRight: "0.3rem" }}
              />
              <input
                style={{ width: "50%", marginLeft: "0.3rem" }}
                type="number"
                class="form-control"
                placeholder="Mobile"
              />
            </div>
            <div
              class="col-sm-10"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "1rem",
                width: "90%",
                marginLeft: "1rem",
                marginTop: "2rem",
              }}
            >
              <input
                type="text"
                inputMode="numeric"
                class="form-control"
                placeholder="Height in cm"
                style={{ width: "50%", marginRight: "0.3rem" }}
              />
              <input
                style={{ width: "50%", marginLeft: "0.3rem" }}
                type="text"
                inputMode="numeric"
                class="form-control"
                placeholder="Weight in kg."
              />
            </div>
            <div
              className="presentcomplaints"
              style={{ marginTop: "2rem", marginLeft: "2rem" }}
            >
              <h5>Presenting Complaints:</h5>
              <div style={{ width: "30%", marginLeft: "1rem" }}>
                <h6>Blood Group: </h6>
                <input type="text" class="form-control" />
                <div
                  style={{
                    marginTop: "-4rem",
                    marginLeft: "35rem",
                    width: "90%",
                  }}
                >
                  <h6>BP:</h6>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div
                style={{ width: "30%", marginLeft: "1rem", marginTop: "1rem" }}
              >
                <h6>
                  SpO<sub>2</sub>:{" "}
                </h6>
                <input type="text" class="form-control" />
                <div
                  style={{
                    marginTop: "-4rem",
                    marginLeft: "35rem",
                    width: "90%",
                  }}
                >
                  <h6>Pulse:</h6>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>

            {/* <div
              className="pasthistory"
              style={{
                width: "90%",
                // justifyContent: "center",
                // alignItems: "center",
                display: "flex",
                flexDirection: "column",
                height: "1rem",
                marginTop: "2rem",
                marginLeft: "4rem",
              }}
            >
              <h5>Past History:</h5>
              <div
                className="column1"
                style={{
                  display: "flex",
                  flexFlow: "column wrap",
                  // flexWrap: "wrap",
                }}
              >
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
              </div>
              <div
                className="col2"
                style={{
                  display: "flex",
                  flexFlow: "column wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-20rem",
                }}
              >
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
                <label>
                  <input type="radio" name="Diabetes" id="" /> Diabetes
                </label>
              </div>
            </div>
            <hr
              style={{
                background: "#000000",
                width: "83%",
                textAlign: "center",
                justifyContent: "center",
                marginLeft: "1.2rem",
                marginTop: "22rem",
                height: "0.5px",
              }}
            /> */}
            <h5 style={{ marginLeft: "2rem", marginTop: "2rem" }}>
              Past History:
            </h5>
            <div class="past-table">
              <table
                class="table table-sm"
                style={{ border: "1px solid white" }}
              >
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes1" id="" /> Diabetes
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes2" id="" /> Diabetes
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes3" id="" /> Diabetes
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes4" id="" /> Diabetes
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes5" id="" /> Diabetes
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes6" id="" /> Diabetes
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes7" id="" /> Diabetes
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes8" id="" /> Diabetes
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes9" id="" /> Diabetes
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes10" id="" /> Diabetes
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes11" id="" /> Diabetes
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes12" id="" /> Diabetes
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes13" id="" /> Diabetes
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes14" id="" /> Diabetes
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes15" id="" /> Diabetes
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes16" id="" /> Diabetes
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes17" id="" /> Diabetes
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes18" id="" /> Diabetes
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes19" id="" /> Diabetes
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes20" id="" /> Diabetes
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes" id="" /> Diabetes
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="radio" name="Diabetes" id="" /> Diabetes
                    </label>
                  </td>
                </tr>
              </table>
              <hr
                style={{
                  background: "#000000",
                  width: "100%",
                  textAlign: "center",
                  justifyContent: "center",
                  marginLeft: "0rem",
                  marginTop: "1rem",
                  height: "0.5px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="bottom" class="col-sm-10">
          <div
            className="currdrugs"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexFlow: "column",
              height: "1rem",
              width: "100%",
              marginLeft: "1rem",
              marginTop: "2rem",
            }}
          >
            <h6
              style={{
                alignSelf: "flex-start",
                marginLeft: "9.5rem",
                marginTop: "-2rem",
              }}
            >
              Current Drugs:
            </h6>
            <input
              type="text"
              class="form-control"
              style={{ marginLeft: "12rem", width: "90%" }}
            />
          </div>
          <div
            className="history"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexFlow: "column",
              // height: "1rem",
              width: "100%",
              marginLeft: "1rem",
              marginTop: "2rem",
            }}
          >
            <h6
              style={{
                alignSelf: "flex-start",
                marginLeft: "9.5rem",
                marginTop: "-0.5rem",
              }}
            >
              Menstrual/Obstetrical history:
            </h6>
            <input
              type="text"
              class="form-control"
              style={{
                marginLeft: "12rem",
                width: "90%",
                marginBottom: "2rem",
              }}
            />
          </div>
          <hr
            style={{
              background: "#000000",
              width: "90%",
              textAlign: "center",
              justifyContent: "center",
              marginLeft: "10.5rem",
              marginTop: "1rem",
              height: "0.2px",
            }}
          />
          <div style={{ marginTop: "2rem", marginLeft: "9rem" }}>
            <h5>Clinical Assessment:</h5>
            <h6 style={{ marginLeft: "2rem", fontWeight: "bold" }}>Dosha:</h6>
            <div style={{ marginLeft: "3rem", marginTop: "2rem" }}>
              <h6>Vata:</h6>
              <div
                style={{
                  marginLeft: "4rem",
                  marginTop: "-3rem",
                  display: "flex",
                  flexFlow: "column",
                }}
              >
                <label>
                  <input type="radio" name="vata" />
                  Vata
                </label>
                <label>
                  <input type="radio" name="vata" />
                  Pitta
                </label>
                <label>
                  <input type="radio" name="vata" />
                  Kapha
                </label>
              </div>
            </div>
            <div style={{ marginLeft: "20rem", marginTop: "-4.60rem" }}>
              <h6>Pitta:</h6>
              <div
                style={{
                  marginLeft: "4rem",
                  marginTop: "-3rem",
                  display: "flex",
                  flexFlow: "column",
                }}
              >
                <label>
                  <input type="radio" name="pitta" />
                  Vata
                </label>
                <label>
                  <input type="radio" name="pitta" />
                  Pitta
                </label>
                <label>
                  <input type="radio" name="pitta" />
                  Kapha
                </label>
              </div>
            </div>
            <div style={{ marginLeft: "37rem", marginTop: "-4.60rem" }}>
              <h6>Kapha:</h6>
              <div
                style={{
                  marginLeft: "4rem",
                  marginTop: "-3rem",
                  display: "flex",
                  flexFlow: "column",
                }}
              >
                <label>
                  <input type="radio" name="kapha" />
                  Vata
                </label>
                <label>
                  <input type="radio" name="kapha" />
                  Pitta
                </label>
                <label>
                  <input type="radio" name="kapha" />
                  Kapha
                </label>
              </div>
            </div>
            <h6 style={{ marginLeft: "2rem" }}>Prakruti:</h6>
            <div style={{ marginLeft: "2rem" }}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "7rem" }}>Vyadhi Avastha</div>
                {/* <div style={{marginLeft:'-8rem'}}> */}
                <label style={{ marginLeft: "4rem", width: "8rem" }}>
                  <input type="radio" />
                  Ashukari
                </label>
                <label style={{ width: "8rem" }}>
                  <input type="radio" />
                  Chirakari
                </label>{" "}
                {/* </div> */}
              </div>
            </div>

            <div className="Nidra" style={{ marginLeft: "2rem" }}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "7rem" }}>Nidra</div>
                <label style={{ marginLeft: "4rem", width: "8rem" }}>
                  <input type="radio" name="nidra" />
                  Sound
                </label>{" "}
                <label style={{ width: "8rem" }}>
                  <input type="radio" name="nidra" />
                  Sound
                </label>{" "}
                <label style={{ width: "8rem" }}>
                  <input type="radio" name="nidra" />
                  Sound
                </label>{" "}
              </div>
            </div>

            <div className="Manas" style={{ marginLeft: "2rem" }}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "7rem" }}>Manas</div>
                <label
                  style={{
                    marginLeft: "4rem",
                    width: "8rem",
                  }}
                >
                  <input type="radio" name="manas" />
                  Sound
                </label>{" "}
                <label style={{ width: "8rem" }}>
                  <input type="radio" name="manas" />
                  Sound
                </label>{" "}
                <label style={{ width: "8rem" }}>
                  <input type="radio" name="manas" />
                  Sound
                </label>{" "}
              </div>
            </div>

            <div className="Agni" style={{ marginLeft: "2rem" }}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "7rem" }}>Agni</div>
                <label
                  style={{
                    marginLeft: "4rem",
                    width: "8rem",
                  }}
                >
                  <input type="radio" name="agni" />
                  Sound
                </label>{" "}
                <label style={{ width: "8rem" }}>
                  <input type="radio" name="agni" />
                  Sound
                </label>{" "}
                <label style={{ width: "8rem" }}>
                  <input type="radio" name="agni" />
                  Sound
                </label>{" "}
              </div>
            </div>

            <div className="Mala" style={{ marginLeft: "2rem" }}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "7rem" }}>Mala</div>
                <label
                  style={{
                    marginLeft: "4rem",
                    width: "8rem",
                  }}
                >
                  <input type="radio" name="mala" />
                  Sound
                </label>{" "}
                <label style={{ width: "8rem" }}>
                  <input type="radio" name="mala" />
                  Sound
                </label>{" "}
                <label style={{ width: "8rem" }}>
                  <input type="radio" name="mala" />
                  Sound
                </label>{" "}
              </div>
            </div>

            <div className="Mutra" style={{ marginLeft: "2rem" }}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "7rem" }}>Mutra</div>
                <label
                  style={{
                    marginLeft: "4rem",
                    width: "8rem",
                  }}
                >
                  <input type="radio" name="mutra" />
                  Sound
                </label>{" "}
                <label style={{ width: "8rem" }}>
                  <input type="radio" name="mutra" />
                  Sound
                </label>{" "}
                <label style={{ width: "8rem" }}>
                  <input type="radio" name="mutra" />
                  Sound
                </label>{" "}
              </div>
            </div>

            <div style={{ marginLeft: "2rem" }}>
              <div className="vyayama" style={{ display: "flex" }}>
                <div style={{ width: "7rem" }}>Vyayama</div>
                <label
                  style={{
                    marginLeft: "4rem",
                    width: "8rem",
                  }}
                >
                  <input type="radio" name="vyayama" />
                  Sound
                </label>{" "}
                <label style={{ width: "8rem" }}>
                  <input type="radio" name="vyayama" />
                  Sound
                </label>{" "}
                <label style={{ width: "8rem" }}>
                  <input type="radio" name="vyayama" />
                  Sound
                </label>{" "}
              </div>
            </div>

            <hr
              style={{
                background: "#000000",
                width: "95%",
                textAlign: "center",
                justifyContent: "center",
                marginLeft: "2rem",
                marginTop: "1rem",
                height: "0.2px",
              }}
            />

            <div
              className="bottombuttons"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {/* <button type="button" class="btn btn-success">Add Drugs</button> */}
              <button type="button" class="btn btn-success">
                Download PDF
              </button>
              <button
                type="button"
                class="btn btn-success"
                id="myPopUp"
                style={{ marginLeft: "50rem" }}
                onClick={addClass}
              >
                Add Drugs
              </button>
            </div>


            <div class="popup">
              <div class="title" style={{ marginBottom: "40px" }}>
                <h5>
                  <b>Add Drug</b>
                </h5>
              </div>

              <div class="form">
                <div class="form-body">
                  <div class="form-element">
                    <input
                      type="text"
                      id="drugName"
                      placeholder="Drug Name"
                      required
                    ></input>
                  </div>

                  <div
                    class="form-element"
                    style={{ display: "flex", alignItems: "normal" }}
                  >
                    <input
                      type="text"
                      id="strength"
                      placeholder="Strength"
                    ></input>
                    <select
                      name="strength-unit"
                      id="strength-unit"
                      style={{ position: "relative", left: "40px" }}
                    >
                      <option value="" disabled selected hidden>
                        unit
                      </option>
                      <option value="mg">mg</option>
                      <option value="gm">gm</option>
                      <option value="ng">ng</option>
                      <option value="mcg">mcg</option>
                    </select>
                  </div>

                  <div class="form-element">
                    <select name="preparation-type" id="preparation-type">
                      <option value="" disabled selected hidden>
                        Preparation
                      </option>
                      <option class="dropdown-item" value="Tab.">
                        Tab.
                      </option>
                      <option class="dropdown-item" value="Cap.">
                        Cap.
                      </option>
                      <option class="dropdown-item" value="Inj.">
                        Inj.
                      </option>
                      <option class="dropdown-item" value="Syr.">
                        Syr.
                      </option>
                      <option class="dropdown-item" value="Drops">
                        Drops
                      </option>
                    </select>
                  </div>

                  <div class="form-element">
                    <select name="route" id="route">
                      <option value="" disabled selected hidden>
                        Route
                      </option>
                      <option value="Topical">Topical</option>
                      <option value="Oral">Oral</option>
                      <option value="Rectal">Rectal</option>
                      <option value="Vaginal">Vaginal</option>
                      <option value="Inhalation">Inhalation</option>
                      <option value="Local">Local</option>
                      <option value="Chew">Chew</option>
                      <option value="Intradermal">Intradermal</option>
                      <option value="Subcutaneous">Subcutaneous</option>
                      <option value="Intramuscular">Intramuscular</option>
                      <option value="Intravenous">Intravenous</option>
                      <option value="Nasal">Nasal</option>
                      <option value="Ear Drops">Ear Drops</option>
                      <option value="Eye Drops">Eye Drops</option>
                    </select>
                  </div>

                  <div
                    class="form-element"
                    style={{ display: "flex", alignItems: "normal" }}
                  >
                    <input type="text" id="dose" placeholder="Dose"></input>
                    <select
                      name="dose-unit"
                      id="dose-unit"
                      style={{ position: "relative", left: "40px" }}
                    >
                      <option value="" disabled selected hidden>
                        unit
                      </option>
                      <option value="ml">ml</option>
                      <option value="unit">unit</option>
                      <option value="table spoon">table spoon</option>
                      <option value="tea spoon">tea spoon</option>
                    </select>
                  </div>

                  <div class="form-element">
                    <select name="direction" id="direction">
                      <option value="" disabled selected hidden>
                        Direction
                      </option>
                      <option value="Before Meal">Before Meal</option>
                      <option value="After Meal">After Meal</option>
                    </select>
                  </div>

                  <div class="form-element">
                    <select name="frequency" id="frequency">
                      <option value="" disabled selected hidden>
                        Frequency
                      </option>
                      <option value="If required">If required</option>
                      <option value="Immediately">Immediately</option>
                      <option value="Once a day">Once a day</option>
                      <option value="Twice daily">Twice daily</option>
                      <option value="Thrice daily">Thrice daily</option>
                      <option value="Four times a day">Four times a day</option>
                      <option value="Every hour">Every hour</option>
                      <option value="Every night at bedtime">
                        Every night at bedtime
                      </option>
                      <option value="Every day">Every day</option>
                      <option value="Every other day">Every other day</option>
                      <option value="Every four hours">Every four hours</option>
                      <option value="Once a week">Once a week</option>
                      <option value="Three times a week">
                        Three times a week
                      </option>
                    </select>
                  </div>

                  <div
                    class="form-element"
                    style={{ display: "flex", alignItems: "normal" }}
                  >
                    <input
                      type="text"
                      id="duration"
                      placeholder="Duration"
                    ></input>
                    <select
                      name="duration-unit"
                      id="duration-unit"
                      style={{ position: "relative", left: "40px" }}
                    >
                      <option value="" disabled selected hidden>
                        unit
                      </option>
                      <option value="hours">hours</option>
                      <option value="days">days</option>
                      <option value="weeks">weeks</option>
                      <option value="years">years</option>
                    </select>
                  </div>

                  <div class="form-element">
                    <input
                      type="text"
                      id="totalQuantity"
                      placeholder="Total Quantity"
                    ></input>
                  </div>

                  <div class="form-element">
                    <input
                      type="text"
                      id="otherInstructions"
                      placeholder="Other Instructions"
                    ></input>
                  </div>
                </div>

                <div class="btns" style={{ marginBottom: "3%" }}>
                  <input
                    type="button"
                    id="cnclbtn"
                    value="Cancel"
                    style={{ marginRight: "1%" }}
                    onClick={removeClass}
                  ></input>
                  <input type="button" id="submitbtn" value="Ok"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default GeneratePrescription;
