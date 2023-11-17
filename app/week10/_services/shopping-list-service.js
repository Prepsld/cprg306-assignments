import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


// Define the getItems function
const getItems = async (userId) => {
  try {
    // Reference to the items subcollection under the user document
    const q = query(collection(db, 'users', userId, 'items'));

    // Get all documents from the items subcollection
    const snapshot = await getDocs(q)

    const mappedItems = snapshot.docs.map((doc) => ({
       
        id: doc.id,
        ...doc.data()
      }
    ));
    return mappedItems;
} catch (error) {
    console.error('Error loading items:', error);
    throw error;
  }
};

// Define the addItem function
const addItem = async (userId, item) => {
  try {
    // Reference to the user's 'items' subcollection
    const userItemsRef = collection(db, 'users', userId, 'items');

    // Add the document to the user's 'items' subcollection with an automatically generated document ID
    const itemsCollection = await addDoc(userItemsRef, item);

    // Return the ID of the newly created document
    return itemsCollection.id;
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
};

export { getItems, addItem };
