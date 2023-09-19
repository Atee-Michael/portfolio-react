import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
      <Carousel.Item>
       
        <Carousel.Caption>
          <h3>I'm a Developer</h3>
          <p>Frontend Write-up</p>
          <Button variant="primary">More About Me</Button>{' '}
      <Button variant="secondary">Hire Me</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    
        <Carousel.Caption>
          <h3>I'm a Builder</h3>
          <p>AWS write-up</p>
          <Button variant="primary">More About Me</Button>{' '}
      <Button variant="secondary">Hire Me</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <Carousel.Caption>
          <h3>I'm a Consultant</h3>
          <p>
           Management consultancy write-up
          </p>
          <Button variant="primary">More About Me</Button>{' '}
      <Button variant="secondary">Hire Me</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;