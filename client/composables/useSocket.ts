import { Socket, io } from 'socket.io-client';
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from '../../ws-inteface/socket.inteface';

let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

export function useSocket() {
  if (socket) return socket;

  socket = io();
  return socket;
}

