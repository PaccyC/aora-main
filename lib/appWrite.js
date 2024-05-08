export const appwriteConfig ={
endpoint:'https://cloud.appwrite.io/v1',
platform:'com.paccy.aora',
projectId:'663bba97002c39d6b9a4',
databaseId:'663bbc9c002cc8675f73',
userCollectionId:'663bbcbc0023c3d6becb',
videoCollectionId:'663bbcda002f0c035687',
storageId:'663bbf9c003ce3072fc9'
}


import { Client } from 'react-native-appwrite';
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('455x34dfkj') // Your project ID
    .setPlatform('com.example.myappwriteapp') // Your application ID or bundle ID.
;