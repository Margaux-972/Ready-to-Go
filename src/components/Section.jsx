const Section = ({
  switch1,
  switch2,
  switch3,
  setSwitch1,
  setSwitch2,
  setSwitch3,
}) => {
  return (
    <main>
      <div className="container">
        <section>
          <div className="col1">
            <button
              onClick={() => {
                setSwitch1(true);
              }}
              className={switch1 ? "isActive" : "isInactive"}
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch2(true);
              }}
              className={switch2 ? "isActive" : "isInactive"}
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch3(true);
              }}
              className={switch3 ? "isActive" : "isInactive"}
            >
              ON
            </button>
          </div>
          <div className="col2">
            <button
              onClick={() => {
                setSwitch1(false);
              }}
              className={switch1 ? "isInactive" : "isActive"}
            >
              OFF
            </button>
            <button
              onClick={() => {
                setSwitch2(false);
              }}
              className={switch2 ? "isInactive" : "isActive"}
            >
              OFF
            </button>
            <button
              onClick={() => {
                switch3 ? setSwitch3(false) : setSwitch3(true);
              }}
              className={switch3 ? "isInactive" : "isActive"}
            >
              OFF
            </button>
          </div>
        </section>
        <section className="go">
          {switch1 && switch2 && switch3 ? (
            <button className="green">
              <p>Go !</p>
            </button>
          ) : (
            <button className="red">No way !</button>
          )}
        </section>
      </div>
    </main>
  );
};

export default Section;
