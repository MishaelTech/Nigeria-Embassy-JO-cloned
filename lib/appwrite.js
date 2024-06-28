import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
} from "react-native-appwrite";

// import {
//     ENDPOINT,
//     PLATFORM,
//     PROJECTID,
//     DATABASEID,
//     USERCOLLECTIONID
// } from '@env';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.mst.nigeriaembassy',
    projectId: '667acb45001001f390ac',
    databaseId: '667acedb003c0257bdc5',
    userCollectionId: '667acf0700251b94bccf',
};

const client = new Client()
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export async function createUser(email, password, fullname) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            fullname,
        );

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(fullname);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountid: newAccount.$id,
                email: email,
                fullname: fullname,
                avatar: avatarUrl,
            }
        );

        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

// Sign In
export async function signIn(email, password) {
    try {
        if (!account.createEmailPasswordSession) {
            throw new Error('createEmailSession method not available');
        }

        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

// Get Account
export async function getAccount() {
    try {
        const currentAccount = await account.get();

        return currentAccount;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();
        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountid", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

// Signout a user session
export async function signOut() {
    try {
        const session = await account.deleteSession('current');

        return session;
    } catch (error) {
        throw new Error(error);
    }
}