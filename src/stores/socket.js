import { defineStore } from 'pinia';
import { io } from 'socket.io-client';

const SIO_URL = 'https://ikcount.com';
const ACCESS_TOKEN = 'eWVmZXJzb24ucm9zYWxlcy5kZW1vOkFQSV9LRVlAMmIyMjZhNjM1NTI4MjhkNGExOTUwMGJlOTBhMzgzZmNmYzA1MzcyZjRkZGUyNjZkNGE1OTQzN2I5ZTRhNDhlNmU5ZjI1ZGYyMTM5NTVmMWZhZmUwOTYyYjdiYjM3NzExZjMyYWYxMWM3YTAzZGZiZGJkYmJlZDNjYTU0ZDUzN2I6SUtMQUIwMDU=';
const CLIENT = 'DEMO001';
const LOCATION = 'DEMO001A1L1';
const MAC_ADDRESS = 'DEMO001A1L1Z1MC2';

export const useSocketStore = defineStore('socket', {
  state: () => ({
    socketId: null,
    welcomeData: null,
    heartbeatData: null,
  }),
  actions: {
    connect() {
      this.socket = io(`${SIO_URL}/live`, {
        transports: ['polling'],
        query: {
          atoken: ACCESS_TOKEN,
          client: CLIENT,
          location: LOCATION,
          mac: MAC_ADDRESS
        } 
      });

      this.socket.on('connect', () => {
        this.socketId = this.socket.id;
        console.log('Socket connected', this.socketId);
      });

      this.socket.on('welcome', (dataW) => {
        const [eventName] = [dataW];
        this.welcomeData = eventName;
      });

      this.socket.on('heartbeat', (dataH) => {
        const [eventName] = [dataH];
        this.heartbeatData = eventName;
      });

      this.socket.on('disconnect', () => {
        console.log('Socket disconnected');
      });

    },
    disconnect() {
      if (this.socket) {
        this.socket.disconnect();
      }
    },

  }
});
