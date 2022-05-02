// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const domain = "e6fnsxvyen";

const contactApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await fetch(`https://e6fnsxvyen.microcms.io/api/v1/contact/`, {
    // method: "POST",
    headers: {
      "X-MICROCMS-API-KEY": process.env.API_KEY || "",
    },
    body: JSON.stringify(req.body),
  });

  console.log(data);

  if (data.status !== 200) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.status(200).json({ message: "success" });
};

export default contactApi;
