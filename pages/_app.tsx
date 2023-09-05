import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadConfettiPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);
  return (

    


    <>
     <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#242244",
            },
          },
          fullScreen: {
            zIndex: -1,
          },
          emitters: [
            {
              position: {
                x: 0,
                y: 30,
              },
              rate: {
                quantity: 5,
                delay: 0.15,
              },
              particles: {
                move: {
                  direction: "top-right",
                  outModes: {
                    top: "none",
                    left: "none",
                    default: "destroy",
                  },
                },
              },
            },
            {
              position: {
                x: 100,
                y: 30,
              },
              rate: {
                quantity: 5,
                delay: 0.15,
              },
              particles: {
                move: {
                  direction: "top-left",
                  outModes: {
                    top: "none",
                    right: "none",
                    default: "destroy",
                  },
                },
              },
            },
          ],
          particles: {
            color: {
              value: ["#ffffff", "#FF0000"],
            },
            move: {
              decay: 0.05,
              direction: "top",
              enable: true,
              gravity: {
                enable: true,
              },
              outModes: {
                top: "none",
                default: "destroy",
              },
              speed: {
                min: 10,
                max: 50,
              },
            },
            number: {
              value: 0,
            },
            opacity: {
              value: 1,
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: "random",
              animation: {
                enable: true,
                speed: 30,
              },
            },
            tilt: {
              direction: "random",
              enable: true,
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 30,
              },
            },
            size: {
              value: {
                min: 0,
                max: 2,
              },
              animation: {
                enable: true,
                startValue: "min",
                count: 1,
                speed: 16,
                sync: true,
              },
            },
            roll: {
              darken: {
                enable: true,
                value: 25,
              },
              enable: true,
              speed: {
                min: 5,
                max: 15,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              speed: {
                min: -7,
                max: 7,
              },
            },
            shape: {
              type: ["circle", "square"],
              options: {},
            },
          },
        }}
      />
    <ThirdwebProvider activeChain={activeChain} clientId={process.env.CLIENTID}>
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
    </>
  );
}

export default MyApp;
