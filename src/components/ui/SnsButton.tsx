import { VFC } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { BrandFacebook, BrandTwitter } from "tabler-icons-react";

type Props = {
  url: string;
};

const SnsButton: VFC<Props> = ({ url }) => {
  return (
    <div className="flex mt-8 gap-4">
      <TwitterShareButton
        url={url}
        style={{
          display: "flex",
          padding: "10px",
          background: "#359BF0",
          borderRadius: 9999,
        }}
        title="Twitterでシェア"
      >
        <BrandTwitter size={18} color="white" />
      </TwitterShareButton>
      <FacebookShareButton
        url={url}
        style={{
          display: "flex",
          padding: "10px",
          background: "#3B5998",
          borderRadius: 9999,
        }}
        title="Facebookでシェア"
      >
        <BrandFacebook size={18} color="white" />
      </FacebookShareButton>
    </div>
  );
};

export default SnsButton;
