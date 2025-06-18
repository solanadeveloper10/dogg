/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import "./section2.css";

const Section2: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import the required libraries
    const loadLibraries = async () => {
      try {
        const [gsap, ScrollTrigger] = await Promise.all([
          import("https://cdn.skypack.dev/gsap@3.12.0").then((m) => m.default),
          import("https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger").then(
            (m) => m.default
          ),
        ]);

        let layersCtrl: any;
        let centerCtrl: any;
        let staggerCtrl: any;
        let scalerTl: any;
        let layersTl: any;

        const hasScrollSupport = CSS.supports(
          "(animation-timeline: view()) and (animation-range: 0 100%)"
        );

        const config = {
          theme: "system",
          enhanced: true,
          stick: true,
          layers: true,
          center: true,
          stagger: "range",
        };

        if (!hasScrollSupport) {
          gsap.registerPlugin(ScrollTrigger);
          console.info("GSAP ScrollTrigger registered");
        }

        const update = () => {
          document.documentElement.dataset.theme = config.theme;
          document.documentElement.dataset.enhanced =
            config.enhanced.toString();
          document.documentElement.dataset.stick = config.stick.toString();
          document.documentElement.dataset.center = config.center.toString();
          document.documentElement.dataset.layers = config.layers.toString();
          document.documentElement.dataset.stagger = config.stagger;

          if (config.enhanced && !hasScrollSupport) {
            scalerTl = gsap
              .timeline({
                scrollTrigger: {
                  trigger: "main section:first-of-type",
                  start: "top -10%",
                  end: "bottom 80%",
                  scrub: true,
                },
              })
              .from(
                ".scaler img",
                {
                  height: window.innerHeight - 32,
                  ease: "power1.inOut",
                },
                0
              )
              .from(
                ".scaler img",
                {
                  width: window.innerWidth - 32,
                  ease: "power2.inOut",
                },
                0
              );
            // then the layers
            layersTl = gsap
              .timeline({
                scrollTrigger: {
                  trigger: "main section:first-of-type",
                  start: "top -40%",
                  end: "bottom bottom",
                  scrub: true,
                },
              })
              .from(
                ".layer:nth-of-type(1)",
                {
                  opacity: 0,
                  ease: "sine.out",
                },
                0
              )
              .from(
                ".layer:nth-of-type(1)",
                {
                  scale: 0,
                  ease: "power1.inOut",
                },
                0
              )
              .from(
                ".layer:nth-of-type(2)",
                {
                  opacity: 0,
                  ease: "sine.out",
                },
                0
              )
              .from(
                ".layer:nth-of-type(2)",
                {
                  scale: 0,
                  ease: "power3.inOut",
                },
                0
              )
              .from(
                ".layer:nth-of-type(3)",
                {
                  opacity: 0,
                  ease: "sine.out",
                },
                0
              )
              .from(
                ".layer:nth-of-type(3)",
                {
                  scale: 0,
                  ease: "power4.inOut",
                },
                0
              );
          } else {
            gsap.set([".scaler img", ".layer"], {
              attr: {
                style: undefined,
              },
            });
            scalerTl?.kill();
            layersTl?.kill();
            scalerTl = undefined;
            layersTl = undefined;
          }

          if (hasScrollSupport) {
            layersCtrl.hidden = !config.enhanced;
            staggerCtrl.hidden = !config.enhanced;
            centerCtrl.hidden = !config.enhanced;
          }
        };

        update();

        // Cleanup function
        return () => {
          scalerTl?.kill();
          layersTl?.kill();
        };
      } catch (error) {
        console.error("Failed to load animation libraries:", error);
      }
    };

    loadLibraries();
  }, []);

  return (
    <Box position='relative'>
      <Box ref={componentRef}>
        <div className='content-wrap'>
          <main>
            <section>
              <div className='content'>
                <div className='grid'>
                  <div className='layer'>
                    <div>
                      <img
                        src='/1.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <img
                        src='/2.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <img
                        src='/15.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <img
                        src='/4.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <img
                        src='/5.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <img
                        src='/6.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                  <div className='layer'>
                    <div>
                      <img
                        src='/7.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <img
                        src='/8.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <img
                        src='/9.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <img
                        src='/10.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <img
                        src='/11.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <img
                        src='/12.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                  <div className='layer'>
                    <div>
                      <img
                        src='/13.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <img
                        src='/14.png'
                        alt=''
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                  <div className='scaler'>
                    <img src='/3.png' alt='' style={{ objectFit: "contain" }} />
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <footer>
          <span aria-hidden='true'>
            ʕ<span className='arm'>ノ</span>•ᴥ•ʔ<span className='arm'>ノ</span>
            <span className='spring'>
              <span>︵</span>
            </span>
            <span className='table'>┻━┻</span>
          </span>
          &nbsp;&copy; Nudaeng '25
        </footer>
      </Box>
    </Box>
  );
};

export default Section2;
