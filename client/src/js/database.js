import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });



export const putDb = async (content) => {
  console.log("Updating the database...");
  const jateDatabase = await openDB("jate", 1);
  const transaction = jateDatabase.transaction("jate", "readwrite");
  const objectStore = transaction.objectStore("jate");
  const request = objectStore.put({ id: 1, content: content });
  const result = await request;
  console.log("🚀 - Data successfully saved to the database", result);
};

// Function to retrieve all data from the database
export const getDb = async () => {
  console.log("Retrieving all data from the database...");
  const jateDatabase = await openDB("jate", 1);
  const transaction = jateDatabase.transaction("jate", "readonly");
  const objectStore = transaction.objectStore("jate");
  const request = objectStore.getAll();
  const result = await request;
  if (result.length < 1) {
    return;
  }
  return result[0].content;
};

initdb();
