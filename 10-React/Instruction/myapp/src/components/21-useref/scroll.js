import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./scroll.scss";

const Scroll = () => {
  const refAboutUs = useRef(null);

  
  
  useEffect(() => {

    const handleScroll = () => { 
        const aboutUsEl = refAboutUs.current;
        const currentScrollPosition = window.scrollY;
    
        const elScrollPosition = aboutUsEl.offsetTop;
        const currentWindowHeight = window.innerHeight;
        const elCurrentHeight = aboutUsEl.offsetHeight;
    
        const targetScrollPosition =
          elScrollPosition - currentWindowHeight + elCurrentHeight;
    
    
        if (currentScrollPosition >= targetScrollPosition) {
            aboutUsEl.classList.add("active");
        }

    }


    document.addEventListener("scroll", handleScroll);
  
    return () => {
      document.removeEventListener("scroll", handleScroll);
    }
  }, [])
  



  return (
    <Container>
      {[...new Array(15)].map((item, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          quisquam aspernatur debitis asperiores iusto est beatae odio, dolore
          laborum vel eius, obcaecati maxime? Repellendus maiores deleniti illum
          magnam nostrum obcaecati. Corrupti officiis explicabo consectetur
          magni ratione dolores, qui consequuntur totam quisquam ea quaerat.
          Dolorum iusto perspiciatis facilis quod autem eaque laudantium iste
          iure cumque, culpa unde vero maiores? Nesciunt, repudiandae?
        </p>
      ))}

      <p className="about-us" ref={refAboutUs}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        quisquam aspernatur debitis asperiores iusto est beatae odio, dolore
        laborum vel eius, obcaecati maxime? Repellendus maiores deleniti illum
        magnam nostrum obcaecati. Corrupti officiis explicabo consectetur magni
        ratione dolores, qui consequuntur totam quisquam ea quaerat. Dolorum
        iusto perspiciatis facilis quod autem eaque laudantium iste iure cumque,
        culpa unde vero maiores? Nesciunt, repudiandae?
      </p>

      {[...new Array(15)].map((item, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          quisquam aspernatur debitis asperiores iusto est beatae odio, dolore
          laborum vel eius, obcaecati maxime? Repellendus maiores deleniti illum
          magnam nostrum obcaecati. Corrupti officiis explicabo consectetur
          magni ratione dolores, qui consequuntur totam quisquam ea quaerat.
          Dolorum iusto perspiciatis facilis quod autem eaque laudantium iste
          iure cumque, culpa unde vero maiores? Nesciunt, repudiandae?
        </p>
      ))}
    </Container>
  );
};

export default Scroll;
