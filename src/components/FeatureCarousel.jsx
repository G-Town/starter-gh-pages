import '../App.css';
import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card, CardImg
} from 'reactstrap';

function FeatureCarousel(props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = props.items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      ><div className="carouselCont py-3">
          <div classname="imgCont">
            <img width="70%" src={item.image} alt={item.name} />
            {/* <CarouselCaption
              captionText={item.description}
              captionHeader={item.name}
            /> */}
          </div>
          <div className="textCont">
            <CarouselCaption
              captionText={item.description}
              captionHeader={item.name}
            />
          </div>
        </div>

      </CarouselItem>
    );
  });

  return (
    <Carousel className="featureCarousel" activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={props.items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default FeatureCarousel;