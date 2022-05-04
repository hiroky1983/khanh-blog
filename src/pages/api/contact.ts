// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { isContact } from "../../libs/TypeGuardUtils";

const contactApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const API_KEY = process.env.API_KEY || "";
  if (!isContact(req.body) || typeof API_KEY === "undefined") {
    return res.status(404);
  }

  const data = await fetch(`https://e6fnsxvyen.microcms.io/api/v1/contact`, {
    method: "POST",
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then(() => "Created")
    .catch(() => null);

  if (data !== "Created") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.status(200).json({ message: "Created" });
};

export default contactApi;
