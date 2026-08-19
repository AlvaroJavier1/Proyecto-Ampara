import type { ContactFormData } from "@/types";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "68ab8906-0448-47ef-92cf-bfb126ddae9d";

export async function sendContactForm(data: ContactFormData) {
  const payload = {
    access_key: ACCESS_KEY,
    ...data,
  };

  const response = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  return result;
}
