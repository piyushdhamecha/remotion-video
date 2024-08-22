import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { z } from "zod";

export const imageSchema = z.object({
  imageName: z.string(),
});

const Image: React.FC<z.infer<typeof imageSchema>> = ({ imageName }) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Sequence>
        <Img
          pauseWhenLoading
          src={staticFile(imageName)}
          style={{ transform: `scale(${scale})` }}
          height={600}
          width={800}
          onError={() => {
            // eslint-disable-next-line no-alert
            alert("Something went wrong with the image");
          }}
        />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Image;
