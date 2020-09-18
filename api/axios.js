import * as axios from 'axios';

var instance = axios.create();
instance.defaults.baseURL = 'http://artmutualrural.com.ar:8181/api';
instance.defaults.timeout = 20000;
//...
//and other options

export {instance as default};
