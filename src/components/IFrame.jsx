import * as React from "react";

const IFrame = ({ url }) => {
  const [iFrameLoaded, setIFrameLoaded] = React.useState(false);
  const divBoxRef = React.useRef(null);
  const resizeIframe = (iframe) => {
    // .. resize iFrame container divBoxRef as needed.
  };
  return (

    <div ref={divBoxRef} className=" relative text-gray-600">
      {!iFrameLoaded && (
        <span className="inline-block">loading notebook ...</span>
      )}
      <iframe
        onLoad={(e) => {
          setIFrameLoaded(true);
          resizeIframe(e.target);
        }}
        title="static_html"
        src={url}
        width="100%"
        height="1500px"
      ></iframe>
    </div>
    
  );
};
export default IFrame;