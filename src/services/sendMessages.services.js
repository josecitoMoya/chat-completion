import axios from "axios";

const { NEXT_PUBLIC_FETCHURL } = process.env;

export const sendMessage = async (messageData) => {
  try {
    const messageSent = await axios.post(
      `${NEXT_PUBLIC_FETCHURL}chat/send-message`,
      messageData,
      { withCredentials: true }
    );

    return messageSent;
  } catch (error) {
    console.error(error);
  }
};
