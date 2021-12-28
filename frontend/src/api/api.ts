const BACKEND_URL = "http://localhost:3000";

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
