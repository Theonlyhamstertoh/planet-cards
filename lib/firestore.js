import db from "./firebase";

export async function getLeaderboard() {
  const response = await db.collection("leaderboard").get();
  const data = response.then((snapshot) => {
    snapshot.docs.map((doc) => {
      console.log(doc);
      return doc.data();
    });
  });

  return data;
}
