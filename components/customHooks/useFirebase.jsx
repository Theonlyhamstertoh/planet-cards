import { useState, useEffect } from "react";
import db from "../../lib/firebase";

export const initializeFireStore = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    db.collection("leaderboard")
      .orderBy("score", "desc")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            console.log(change.type);
            setLeaderboardData((prev) => [...prev, { ...change.doc.data(), id: change.doc.id }]);
          } 
        });
      });
  }, []);

  function sortTop(sortBy) {
    const sortedLeaderBoard = leaderboardData.sort((a, b) => {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      return 0;
    });
    setLeaderboardData([...sortedLeaderBoard]);
  }
  function sortBottom(sortBy) {
    const sortedLeaderBoard = leaderboardData.sort((a, b) => {
      if (a.score < b.score) {
        return -1;
      }
      if (a.score > b.score) {
        return 1;
      }
      return 0;
    });
    setLeaderboardData([...sortedLeaderBoard]);
  }
  return { leaderboardData, sortBottom, sortTop };
};

export function addPlayerToFireStore(score, playername, creator) {
  db.collection("leaderboard").add({
    creator,
    playername,
    score,
  });
}

export function updatePlayerScore(id, itemToUpdate) {
  db.collection("leaderboard").doc(id).update(itemToUpdate);
}

export function deletePlayerScore(id) {
  db.collection("leaderboard").doc(id).delete();
}
