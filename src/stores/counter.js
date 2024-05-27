import { defineStore } from 'pinia';
import axios from 'axios';

const API_BASE_URL = 'https://ikcount.com/iklab';
const ACCESS_TOKEN = 'eWVmZXJzb24ucm9zYWxlcy5kZW1vOkFQSV9LRVlAMmIyMjZhNjM1NTI4MjhkNGExOTUwMGJlOTBhMzgzZmNmYzA1MzcyZjRkZGUyNjZkNGE1OTQzN2I5ZTRhNDhlNmU5ZjI1ZGYyMTM5NTVmMWZhZmUwOTYyYjdiYjM3NzExZjMyYWYxMWM3YTAzZGZiZGJkYmJlZDNjYTU0ZDUzN2I6SUtMQUIwMDU=';
const CLIENT = 'DEMO001';
const LOCATION = 'DEMO001A1L1';
const MAC_ADDRESS = 'DEMO001A1L1Z1MC2';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    async changeCount(type, quantity) {
      try {
        const response = await axios.post(`${API_BASE_URL}/ikcount/api/counting/command?atoken=${ACCESS_TOKEN}`, {
          type: type,
          quantity: quantity,
          client: CLIENT,
          location: LOCATION,
          mac_address: MAC_ADDRESS
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.data.cod === 200) {
          this.count += (type === 'manual-add' ? quantity : -quantity);
        }
      } catch (error) {
        console.error('Error changing count:', error);
      }
    }
  }
});
