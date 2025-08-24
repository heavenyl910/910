import { Server } from 'socket.io';
export const attachWS = (srv:any) => new Server(srv,{ cors:{ origin:'*' }});
