import Vue from 'vue';
import { maskPhoneNumber } from './mask';

Vue.filter('applyPhoneMask', maskPhoneNumber);
