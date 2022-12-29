import * as React from "react";

const HomePage = (props) => {
  console.log("Home props :>> ", props);

  return (
    <>
      <div>Home updated</div>;
    </>
  );
};

export default HomePage;

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);

    if (!res.ok) {
      throw new Error(`Response failed`);
    }

    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
