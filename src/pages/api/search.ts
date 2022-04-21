// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../libs/client";
import { Blog } from "../../type/type";

const searchApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await client.getList<Blog>({
    endpoint: "blog",
    queries: { q: req.body.q },
  });

  res.status(200).json(data);
};

export default searchApi;
