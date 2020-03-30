<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
<!--         <v-toolbar color="cyan" dark>
          <v-toolbar-title>Rooms</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-toolbar> -->

        <v-list two-line subheader>
          <v-list-item v-for="room in chatrooms" :key="room.name" @click="">
            <v-list-item-content>
              <v-list-item-title>{{ room.name }}</v-list-item-title>
              <div v-show="room.name === 'Kitchen'">
                <v-list-item-subtitle>
                  Jasmine, Marianne, Thomas
                </v-list-item-subtitle>
              </div>
              <div v-show="room.name === 'Rooftop'">
                <v-list-item-subtitle>
                  Megan, Carl
                </v-list-item-subtitle>
              </div>
              <div v-show="room.name === 'Living room'">
                <v-list-item-subtitle>
                  Jamie
                </v-list-item-subtitle>
              </div>

<!--               <v-list-item-subtitle>
                {{ room.players }}
                 <v-list>
                        <v-list-item
                        v-for="(p, idx) in room.players"
                        :key="idx"
                        @click=""
                        >
                            <v-list-item-content>
                                {{ p }}
                            <v-list-item-content>
                        </v-list-item>
                    </v-list>
              </v-list-item-subtitle> -->
            </v-list-item-content>

            <v-list-item-action>
              <!-- TODO change color of button or entire list item when you are in a room -->
              <v-btn ripple @click="enterChatroom(room.id)">
                <a :href="'https://zoom.us/j/' + room.zoom_id" target="_blank">
                  Join
                </a>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { db } from "../firebase";
// import store from "../store";
import { mapGetters } from "vuex";

export default {
  name: "GameMap",
  components: {},
  data() {
    return {
      //   code: {},
      code: "",
      //   session: {
      //     "07mdu": {
      //       code: "07mdu",
      //       gameID: "",
      //       playerIds: [2134, 1234, 1234],
      //       zoomIds: [1234, 1234, 1234]
      //     }
      //   },
      //   players: [
      //     {
      //       dummyid: {
      //         character_id: "adffdcx",
      //         chatroom_id: 1234,
      //         user_uid: "B4Yo8z9ppGcNu4vNQYQOjkvLEz53",
      //         vote_id: ""
      //       }
      //     }
      //   ],
      chatrooms: {},
      players: []
      //   chatrooms: {
      //     adsfadfdv: {
      //       id: "Living room",
      //       players: ["Sepp", "Hansi"],
      //       zoomId: 842749965
      //     },
      //     dfsdfga: {
      //       id: "Kitchen",
      //       players: ["Michi", "Anabel"],
      //       zoomId: 598515719
      //     },
      //     fhjkfj: {
      //       id: "Rooftop",
      //       players: [],
      //       zoomId: 249866374
      //     }
      //   }
    };
  },
  computed: {
    ...mapGetters({
      selectedGame: "selectedGame",
      user: "user",
      sessionCode: "sessionCode"
    }),
    displayCode() {
      return this.code;
    }
  },
  firestore: {
    chatrooms: db.collection("chatrooms"),
    sessions: db.collection("sessions")
    // game: db.collection("games")
  },
  methods: {
    logData() {},
    putAllPlayersInFirstRoom() {
      db.collection("sessions")
        .doc(this.code)
        .get()
        .then(snapshot => {
          const session = snapshot.data();
          var allPlayers = session.playerIds;
          db.collection("chatrooms")
            .doc(this.chatrooms[0].id)
            .update({ players: allPlayers });
        });
        // TODO remove all players from the other chatrooms
    },

    enterChatroom(room_id) {
      // delete the player from the old chatroom, therefore iterate over all chatrooms
      const email_to_switch = this.user.data.email;
      db.collection("chatrooms")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            var currentPlayers = doc.data().players;
            if (currentPlayers == null) {
              currentPlayers = [];
            }

            var index = currentPlayers.indexOf(email_to_switch);
            if (index !== -1) {
              currentPlayers.splice(index, 1);
              db.collection("chatrooms")
                .doc(doc.id)
                .update({ players: currentPlayers });
            }
            // add player to the new chatroom
            if (room_id == doc.id) {
              currentPlayers.push(email_to_switch);
              db.collection("chatrooms")
                .doc(doc.id)
                .update({ players: currentPlayers });
            }
          });
        });
    }
  },
  created() {
    this.code = this.sessionCode;
    this.logData();
    this.putAllPlayersInFirstRoom();
  }
};
</script>

<style></style>
