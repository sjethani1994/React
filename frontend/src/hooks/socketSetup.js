import { io } from "socket.io-client";
import API from "../connection/connection";

// Create the socket connection
const socket = io(`${API}`);

// Listen for the "connect" event and log the socket ID
socket.on("connect", () => {
  console.log("connected", socket.id);
});

// Handle socket cleanup when the application unmounts or when the socket is no longer needed
const cleanupSocket = () => {
  socket.disconnect(); // Disconnect the socket
};

// Export the socket and cleanup function
export { socket, cleanupSocket };
