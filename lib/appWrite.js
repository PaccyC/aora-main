import { Client,Account,ID ,Avatars,Databases} from 'react-native-appwrite';
export const appwriteConfig ={
endpoint:'https://cloud.appwrite.io/v1',
platform:'com.paccy.aora',
projectId:'663bba97002c39d6b9a4',
databaseId:'663bbc9c002cc8675f73',
userCollectionId:'663bbcbc0023c3d6becb',
videoCollectionId:'663bbcda002f0c035687',
storageId:'663bbf9c003ce3072fc9'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.


const account = new Account(client);
const avatars= new Avatars(client)

const databases= new Databases(client)
export const createUser =async(username,email,password)=>{
    try {
        
        const newAccount= await account.create(
            ID.unique(),
            username,
            email,
            password  
        )

        if(!newAccount) throw new Error

        const avatarUrl= avatars.getInitials(username)
        
        await signIn(email,password)

        const newUser= await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar:avatarUrl
            }
        )
        return newUser

    } catch (error) {
        console.log(error);
        throw new Error(error)
    }

}

export async function signIn (email,password){
try {
    const session= await account.createEmailSession(email,password);

    return session;
} catch (error) {
    console.log(error);
}
}