// Api.js
export const registerUser = async (formData) => {
  const response = await fetch(
    "https://expo-backend-public.onrender.com/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  
  if (!response.ok) {
    throw new Error("Email already exist");
  }

  const responseData = await response.json();
  return responseData.message; 
};
