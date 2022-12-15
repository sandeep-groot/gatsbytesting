import * as React from "react";

const About = (props) => {
  const { location } = props;
  const { state = {} } = location;
  // const { modal } = state;
  console.log("About props :>> ", props);

  return (
    <>
      <div>About Page</div>
    </>
  );
};

export default About;
