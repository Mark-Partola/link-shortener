import { config } from "../config";

const BACKEND_URL = config.BACKEND_URL;

export const api = {
  async shorten(link: string): Promise<{ hash: string }> {
    const response = await fetch(`${BACKEND_URL}/api/v1/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link,
      }),
    });

    if (response.status !== 201) {
      throw new Error();
    }

    return await response.json();
  },
};
