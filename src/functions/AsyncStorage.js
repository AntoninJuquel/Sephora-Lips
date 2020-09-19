import AsyncStorage from '@react-native-community/async-storage';

export const getData = async (key,fallback,setState) => {
    try {
        const jsonData = await AsyncStorage.getItem(key) 
        setState(jsonData != null ? JSON.parse(jsonData) : fallback)
    } catch (error) {
        console.log(error)
    }
}

export const storeData = async(key,newState,setState) => {
    setState(newState)
    try {
        const jsonData = JSON.stringify(newState)
        await AsyncStorage.setItem(key, jsonData)
    } catch (error) {
        console.log(error)
    }
}