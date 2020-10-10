import { AsyncStorage } from 'react-native'

/**
 * 
 * {string} name 
 * {bool} isLogin 
 * {number} accountInfoStatus - 0 is done, 1 is verifying, 2 is error, 3 is verified
 */


export const setUserToken = (key, value) => AsyncStorage.setItem(key, value)
export const getMysetting = (key) => AsyncStorage.getItem(key)
export const setMysetting = (key, value) => AsyncStorage.setItem(key, value)