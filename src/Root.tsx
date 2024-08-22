import { Composition } from "remotion";
import Image, { imageSchema } from "./Image";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Image1"
        component={Image}
        durationInFrames={30}
        fps={30}
        width={400}
        schema={imageSchema}
        height={600}
        defaultProps={{
          imageName: "image1.jpg",
        }}
      />
      <Composition
        id="Image2"
        component={Image}
        durationInFrames={30}
        fps={30}
        width={400}
        schema={imageSchema}
        height={600}
        defaultProps={{
          imageName: "image2.jpg",
        }}
      />
      <Composition
        id="Image3"
        component={Image}
        durationInFrames={30}
        fps={30}
        width={400}
        schema={imageSchema}
        height={600}
        defaultProps={{
          imageName: "image3.jpg",
        }}
      />
    </>
  );
};
