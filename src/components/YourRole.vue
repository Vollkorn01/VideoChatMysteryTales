<template>
  <div class="container">
    <h2>{{ role.name }}</h2>
    <h3>{{ role.short }}</h3>
    <h4>Bio</h4>
    <div>{{ role.bio }}</div>
    <h4>Your goals</h4>
    <div>{{ role.goals }}</div>
    <h4>Other people</h4>
    <div>{{ role.other_people }}</div>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  data() {
    return {
      character_id: "n5E0XGIgceaRujDbq5a9",
      role: {}
      //   role: {
      //     name: "Thomas Pfyffer",
      //     short:
      //       "Seth Phelps’ son-in-law, fuel driven motor vehicle dealer and repairer",
      //     bio:
      //       "You own a fuel driven motor vehicle sales- and workshop on the outskirts of Metropolis, and are married to Marianne, born Phelps, who is a full-time streamer. Your business has been doing rather badly lately, and you are very short of cash. Your wife doesn’t know this – you have been subtly manipulating the account books to conceal the deficit. It would be dreadfully embarrassing if she were to find out! You have been happy enough with Marianne, although it’s not exactly a love match – you both have similar powerful, dominating characters. And you do not pretend to understand her stream! In fact, you are rather keener on Megan, Marianne’s sister: you even once video called her up drunkenly and told her how much you liked her. If Megan were not married, you could make a play for her and leave Marianne – if only Megan’s husband Carl could somehow be got out of the way, that would be just wonderful. (You have to admit that you find the detective blog she writes pretty bad) Online lunch yesterday was a rather trying affair: Seth was very grumpy, and complained that no-one appreciated him properly. The family all (except Jamie, who was constantly distracted) hastened to assure him that yes, he was very much appreciated, and in the end Jasmine managed to calm him down. All the same, no-one could quite be sure what was in Seth’s mind when he went off to redraft his will again. You and your wife suspected that Jasmine (whom you both despise) had won Seth’s favour at lunch, and you were not at all keen for the money to be left to her. So Marianne and Megan went to talk to their father online shortly after lunch to persuade him to change his mind. Marianne told you that she believed they had been successful. She still asked you to talk to him again to make sure, though. So you waited until, around quarter to six. You wanted to check that Seth had in fact redrafted in Marianne and Megan’s favour, but he taunted you. He forwarded to you an unsigned draft email with a will that did indeed leave the money to the sisters – but he said he’d written another one since, with quite a different message, that was already sent to his lawyer. You became furious – your business desperately needs that money! You quickly checked for online offers to kill someone, not really knowing whether this would ever work out. You had the presence to trap the traces by browsing the darknet and ordered a drone kill, which you’ve only heard of but didn’t really know what it was about. Luckily you could overdraw your credit on your empty bank account for this service. You’re confident that you’re in the clear, as no-one should have any reason to suspect you for the killing, also you are quite impressed by the immediate execution of his order. Today, the old man’s lawyer came to the Phelps video group chat to talk to all the family. The lawyer confirmed that there was a later will, as Seth had told you – it had been sent by encrypted email, which takes ten minutes for the encoding process, at 5:45 yesterday afternoon. The signature was authentic. This is the will that has just been read out: it leaves the whole fortune to whoever is able to identify Seth Phelps’ killer. This makes things rather difficult for you – if you’re to inherit the money, you’ll have to frame someone else for the murder! ",
      //     goals:
      //       "Don’t get caught: No-one must detect you as the killer. Get the inheritance: Find a way that you (or whichever of the sisters you end up with) can gain the inheritance. This will require framing someone else for the murder. Conceal your losses: Make sure Marianne doesn’t find out that your business is doing badly Get together with Megan: Improve your chances of a relationship with Megan, by getting Carl out of the way so you can split up with Marianne.",
      //     other_people:
      //       "Jamie Phelps: the youngest of the family. You think Jamie is a boring little nonentity, who’s more interested in panoramic views than Video Chat Technologies. Carl Ross: a programmer who’s married to your wife’s sister Megan. A slimy toad of a man, for whom you have little respect. Jasmine Phelps: you despise your wife’s stepmother as a greedy gold-digger who captured an old man’s eye with her glamour-puss antics. "
      //   }
    };
  },
  name: "YourRole",
  methods: {
      getRole() {
          this.role = db.collection("characters").doc(this.character_id).get()
          .then(snapshot => {
          this.role = snapshot.data();
          });
      }
  },
  beforeMount() {
      this.getRole()
  }
};
</script>
