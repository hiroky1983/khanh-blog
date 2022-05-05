import { useRouter } from "next/router";
import React, { useEffect } from "react";

export const Adsense = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, [asPath]);

  return (
    <div key={asPath}>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
          backgroundColor: "rgba(243, 244, 246)",
        }}
        data-adtest={process.env.NODE_ENV === "production" ? "off" : "on"}
        data-ad-layout="in-article"
        data-ad-format="auto"
        data-ad-client="ca-pub-1869410932032409"
        data-ad-slot="xxx"
        data-full-width-responsive="true"
      />
    </div>
  );
};
