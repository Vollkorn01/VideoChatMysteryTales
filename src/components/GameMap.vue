<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-title>Rooms</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-toolbar>

        <v-list two-line subheader>
          <v-list-item v-for="room in chatrooms" :key="room.id" @click="">
            <v-list-item-content>
              <v-list-item-title>{{ room.id }}</v-list-item-title>

              <v-list-item-subtitle>
                {{ room.players }}
                <!-- <v-list>
                        <v-list-item
                        v-for="(p, idx) in room.players"
                        :key="idx"
                        @click=""
                        >
                            <v-list-item-content>
                                {{ p }}
                            <v-list-item-content>
                        </v-list-item>
                    </v-list> -->
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <!-- TODO change color of button or entire list item when you are in a room -->
              <v-btn ripple>
                <a :href="'https://zoom.us/j/' + room.zoomId" target="_blank">
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
// import { db } from "../firebase";

export default {
  components: {},
  data() {
    return {
      session: {
        "07mdu": {
          code: "07mdu",
          gameID: "",
          playerIds: [2134, 1234, 1234],
          zoomIds: [1234, 1234, 1234]
        }
      },
      players: [
        {
          dummyid: {
            character_id: "adffdcx",
            chatroom_id: 1234,
            user_uid: "B4Yo8z9ppGcNu4vNQYQOjkvLEz53",
            vote_id: ""
          }
        }
      ],
      chatrooms: {
        adsfadfdv: {
          id: "Living room",
          players: ["Sepp", "Hansi"],
          zoomId: 842749965
        },
        dfsdfga: {
          id: "Kitchen",
          players: ["Michi", "Anabel"],
          zoomId: 598515719
        },
        fhjkfj: {
          id: "Rooftop",
          players: [],
          zoomId: 249866374
        }
      }
    };
  },
  name: "GameMap",
  //     firestore: {
  //       //   TODO
  //       session: db.collection("sessions"),
  //       players: db.collection("players"),
  //       game: db.collection("games")
  //     },
  methods: {
    showGame() {
      console.log("chatrooms", this.chatrooms);
    }
  },
  created() {
    this.showGame();
  }
};
</script>

<style></style>
