import { useRef } from "react";
import About from "../../sections/About/About";
import Art from "../../sections/Art/Art";
import Connect from "../../sections/Connect/Connect";
import Landing from "../../sections/Landing/Landing";

function Home() {
  const scrollToRef = () =>
    connectDiv.current?.scrollIntoView({
      behavior: "smooth",
    });
  const connectDiv = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Landing scrollTo={scrollToRef} />
      <About scrollTo={scrollToRef} />
      <Art />
      <Connect connectRef={connectDiv} />
    </>
  );
}

export default Home;
