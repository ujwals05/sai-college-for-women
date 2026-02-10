import type { Request, Response } from "express";

interface dataType {
  username: string;
  id: number;
}

const sampleData: dataType[] = [
  {
    username: "ujwal",
    id: 1,
  },
  {
    username: "nanditha",
    id: 2,
  },
];

export const sampleController = async (req: Request, res: Response) => {
  try {
    res.status(200).json(sampleData);
  } catch (error) {
    res.status(400).json({ message: "Cannot send data" });
  }
};
