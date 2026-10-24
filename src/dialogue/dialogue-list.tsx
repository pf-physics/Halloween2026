import NormalDialogue from "./templates/normal-dialogue";
import introMusic from "../assets/audio/magic_halloween.mp3";
import firstImg from "../assets/imgs/56033.jpg";
import many_ghosts from "../assets/imgs/many_ghosts_freepik.jpg";
import chef_spider from "../assets/imgs/chef_spider.png";
//import grim_reaper from "../assets/imgs/GrimReaper.jpg";
import grim_reaper from "../assets/imgs/grim_reaper.png";
import buffSpider from "../assets/imgs/glowing buff.png";
import purpleSpider1 from "../assets/imgs/purple_spider1.png";
import purpleSpiderWink from "../assets/imgs/purple_spider2.png";
import purpleSpiderHanging from "../assets/imgs/spiderhang.png";
import skeleton5 from "../assets/imgs/skeleton.png";
import coolSpider from "../assets/imgs/cool_spider.png";
import witchSpider from "../assets/imgs/witch_spider.png";
import cuteBlackWidow from "../assets/imgs/vecteezy_cute-spider-weaving-a-web_48964247.jpg";
import bffs from "../assets/imgs/bffs3.png";
import spaceGrimWeaver from "../assets/imgs/grim weaver 2.png";
import endCard from "../assets/imgs/endcard2.png";
import spiderWebs from "../assets/imgs/2210_w030_n003_461b_p1_461.jpg";

import partyMusic from "../assets/audio/fakeParty2.mp3";
import runescapeHalloween from "../assets/audio/Runescape_Halloween.mp3";
import runescapeSpider from "../assets/audio/spiderRune.mp3";
import prettySadPiano from "../assets/audio/Wicked-Halloween_Takinov_piano_ominous.mp3";
import ominousMusic from "../assets/audio/summoning2.mp3";
import chillOminous from "../assets/audio/ominous.mp3";
import balloonPop from "../assets/audio/bossFight.mp3";
import playfulMusic from "../assets/audio/tricktreat.mp3";
import scarySpiderMusic from "../assets/audio/Infestation.mp3";
import spookyWaltz from "../assets/audio/Intro_2024.mp3";
import sillyCharacter from "../assets/audio/silly chill Halloween character.mp3";
import veilMusic from "../assets/audio/Midnight-Halloween_Takinov.mp3";
import spooky_sad from "../assets/audio/House-of-Ghosts_Takinov.mp3";
import halloween_dance from "../assets/audio/Halloween-Dance_Takinov.mp3";
import midnight_halloween from "../assets/audio/Midnight-Halloween_Takinov.mp3";
import rave from "../assets/audio/rave.mp3";
import witchesBall from "../assets/audio/Halloween-Witches-Ball_Takinov.mp3";
import itsy from "../assets/audio/itsy.mp3";

import evilGhost from "../assets/imgs/evilGuy.jpg";

import wizardArrival from "../assets/audio/Wizard_arrival.mp3";

import BossBattle from "./scenes/boss-battle";
import GhostDialogue from "./templates/ghost-dialogue";

import blackWidow from "../assets/imgs/bw2.png";

import newHalloween from "../assets/audio/New-Halloween-Theme.mp3";
import halloweenGroove from "../assets/audio/Halloween-Groove.mp3";
import carnage from "../assets/audio/carnage louder.mp3";
import evilGuyWebbed from "../assets/imgs/evilGuyWebbed.jpg";
import evilGuyMad from "../assets/imgs/evilGuyMad.png";
import ghost2 from "../assets/imgs/ghost5.png";
import ghost5 from "../assets/imgs/ghost5.png";
import evilSkeleton from "../assets/imgs/evilskeleton.png";
import evilCreature from "../assets/imgs/vecteezy_cartoon-skull-with-fangs_48057271.jpg";
import cuteSpider1 from "../assets/imgs/cuteSpider1.png";
import cuteSpider2 from "../assets/imgs/cuteSpider1.png";
import wizardNPC from "../assets/imgs/wizard_party.png";
import spookySpider from "../assets/imgs/vecteezy_red-eyed-spider-sticker-design_72661039.jpg";
import cosmicSpider2 from "../assets/imgs/cosmicspider2.png";
import cosmicSpiderTrap from "../assets/imgs/cosmic spider trap.png";
import spiderNPC from "../assets/imgs/spiderNPC.jpg";

const eventName = "Teardown of the Veil";
const lifeLine = "life line";
const placeholder = blackWidow;
const ticketSpider = coolSpider;
const grimReaper = grim_reaper;
const pointName = "link";
const spiderNPC1 = spiderNPC;
const spiderNPC2 = cuteSpider1;
const spiderNPC2_2 = cuteSpider2;
const spiderNPC3 = witchSpider;
const spiderMC = placeholder;
const grimWeaver = cosmicSpider2;
const grimWeaverTrap = cosmicSpiderTrap;
const ghostNPC = ghost2;
const skeletonNPC = skeleton5;
const evilGuy1 = evilGhost;
const evilGuy2 = evilSkeleton;
const evilGuy3 = evilCreature;
const evilGuyEntrance = carnage;
const blackWidowPal = cuteBlackWidow;
const spiderPartner = purpleSpider1;
const spiderPartnerIntro = purpleSpiderHanging;
const weaverLocation = "Mortimer's Crypt";
const weaverLoc = "crypt";

// TODO delete - it's for the chat menu
export const chatImg = placeholder;

const rules = [
  `1st: 3 ${pointName}s, 2nd: 2 ${pointName}s, 3rd: 1 ${pointName}. Last place 3 penalties and lose 2 ${pointName}s, 2nd to last 2 penalties and lose 1 ${pointName}, 3rd to last 1 penalty`,
  `Write Next to finish`,
];

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const potionRoulette = (
  <NormalDialogue
    isGlobal={true}
    header={"Potion Roulette"}
    text={[
      `There are four potions that will reveal your ${lifeLine}, some are more palatable than others: A potions - 50% chance of being hard alcohol. B potions - 50% chance of being gross.`,
      `Drinking these potions will also extend your ${lifeLine} by 1.`,
      `Those who don't want to risk drinking the potions, can take a sip of your own drink. Your ${lifeLine} will not increase or decrease.`,
      `Write next to continue`,
    ]}
    answers={["next"]}
  />
);

const spiderTicketRules = (
  <NormalDialogue
    isGlobal={true}
    header={"COUNTERFEIT TICKETS"}
    videoUrls={[
      "https://storage.googleapis.com/halloween2024/bracelet1.mp4",
      "https://storage.googleapis.com/halloween2024/bracelet2.mp4",
      "https://storage.googleapis.com/halloween2024/bracelet3.mp4",
    ]}
    text={[
      `Use the webs provided to weave a ticket to get into the party`,
      `When your web is complete, take a picture of it and upload it to the group. Vote on the webs by reacting with 🕸️ on your favourite and 🕷️ on your second favourite.`,
      `1st: 3 ${pointName}s, 2nd: 2 ${pointName}s, 3rd: 1 ${pointName}.`,
    ]}
    stopAudio={true}
    answers={["next"]}
  />
);

const bugDeliveryRules = (
  <NormalDialogue
    isGlobal={true}
    header={"BUG DELIVERY"}
    text={[
      `Split up into two groups, each choose a bucket of bugs.`,
      `Divide the bugs amongst your teammates. Throw the bugs at the spiderweb on the wall and try to get as many bugs as possible to stick.
       The group with the most bugs sticking wins`,
      `In the case of a tie, the group with more bugs in the center wins.`,
      `Each member of the winning team gets 3 ${pointName}. The losing team takes 2 penalties each and lose one ${pointName} each.`,
    ]}
    stopAudio={true}
    answers={["next"]}
  />
);

const sandWeight = "30g";
const timeLeftRules = (
  <NormalDialogue
    isGlobal={true}
    header={"GRAINS OF TIME"}
    text={[
      `If one converts your ${lifeLine}s into grains of sand, it would only weight approximately ${sandWeight}!
      Prove to the spider that you need to speak to the Grim Weaver by showing the number of grains of sand`,
      `Each take a little bag and fill it up with sand (corn) that you think weighs ${sandWeight}`,
      `Afterwards, everyone weigh their bags to see who is closest.`,
      `Within 2g: +2 ${pointName}`,
      `Within 5g: +1 ${pointName}`,
      `Within 10g: -1 ${pointName}`,
      `More than 10g difference: -2 ${pointName}`,
      `The person who is most accurate gains 1 additional ${pointName}.`,
      `Write "next" to continue`,
    ]}
    stopAudio={true}
    answers={["next"]}
  />
);

const foodDeliveryGame = (
  <NormalDialogue
    isGlobal={true}
    header={"SERVE SPIDER FOOD"}
    text={[
      `Split up into two groups and line up from table to window.`,
      `Everyone will be provided a small spider web, which they will use to deliver the food (eyeballs) to the spiders on the other side.`,
      `When the signal is given, both groups will try to deliver as many eyes as they can. The group to deliver the most eyes wins.`,
      `Eyes that are dropped must be abandonned`,
      `Each member of the winning team gets 3 ${pointName}. The losing team takes 2 penalties each and lose 3 ${pointName}s each.`,
    ]}
    stopAudio={true}
    answers={["next"]}
  />
);

const spiderArtGame = (
  <NormalDialogue
    isGlobal={true}
    header={"SPIDER ART"}
    text={[
      `Everyone take a board with spiderweb.`,
      `When everyone is ready, use the pins and web to make an image.`,
      `1 ${pointName}: pumpkin, skull`,
      `2 ${pointName}s: ghost`,
      `3 ${pointName}s: bat, spider`,
      `4: ${pointName}s: cat`,
      `5 ${pointName}s: dragon`,
      `You can come up with your own image, and ${pointName}s will be awarded based on complexity.`,
    ]}
    stopAudio={true}
    answers={["next"]}
  />
);

const pianoPortalGame = (
  <NormalDialogue
    isGlobal={true}
    header={"OPEN PORTAL"}
    text={[
      `To open the portal using spider magic, you need at least 6 limbs.`,
      `In groups of 3 or 4, each claim 1 or two of the labelled notes on the piano.`,
      `When everyone is ready, start the video and play along with the notes.`,
      `Get 2 ${pointName}s if you succeed.`,
      `(If everyone can fit around the piano, play it all together)`,
      `Write "Next" to continue`,
    ]}
    videoUrls={[
      "https://storage.googleapis.com/halloween2024/piano_with_music",
    ]}
    stopAudio={true}
    answers={["next"]}
  />
);

const skeletonCharades = (
  <NormalDialogue
    isGlobal={true}
    header={"Best Skeleton Actor"}
    text={[
      `Everyone think of a well-known movie that contains at least ONE skeleton.`,
      `Write it on a piece of paper and put it into the bowl.`,
      `One at a time, pick a movie from the bowl. You have one minute to act it out. You can act our your movie, but you cannot guess your own movie`,
      `Gain one ${pointName} for guessing correctly and one ${pointName} if your guess is acted out`,
      `Lose one ${pointName} if the consensus is that your movie is not well known.`,
      `Lose one ${pointName} if you put in the same movie as someone else.`,
      `Write "Next" to continue`,
    ]}
    stopAudio={true}
    answers={["next"]}
  />
);

const potionGame = (
  <NormalDialogue
    isGlobal={true}
    header={"ANTI STICK POTION"}
    text={[
      `Split up into two groups. One group at a time, go to the potions room and follow the instructions to make the potion.`,
      `Using the receptacles provided, follow the instructions for EACH consumer of the potion.`,
      `Write "next" when everyone has drank the potion`,
    ]}
    stopAudio={true}
    answers={["next"]}
  />
);

const webPictionary = (
  <NormalDialogue
    isGlobal={true}
    header={"SLING THE WEB"}
    text={[
      `To your part of the scythe, attach a string with a marker at the end`,
      `You will use a pen attached to the string to draw an image on the paper on the floor.
       In pairs, both go up and pick one word each from the bucket each.`,
      `Both will try to draw their word, while the rest guess.`,
      `The person whose drawing is guessed first takes one ${pointName} from the other. The guesser also gains one ${pointName}`,
      `Write "Next" to continue`,
    ]}
    stopAudio={true}
    answers={["next"]}
  />
);

const relayGame2 = (
  <NormalDialogue
    isGlobal={true}
    header={`CLEAR THE ${weaverLoc.toUpperCase()}`}
    text={[
      `Everyone take a web (string) and tie it up above your knees, with 1 leg of space between your knees.
        Tie a link on to a piece of string like a hook and hang it from your knees (there will be a demonstration)`,
      `Split up into two even teams and line up from the table to the window in two rows.`,
      `Pass the bombs from person using the hook. The team to extract 6 bombs first, wins.`,
      `The winning team takes ${pointName}s from the losing team for each bomb they didn't extract. (in the case of an odd number of people, take/leave ${pointName}s from the source.)`,
    ]}
    stopAudio={true}
    answers={["next"]}
  />
);

const finalGame = (
  <NormalDialogue
    isGlobal={true}
    header={`DEFEAT THE GHOULS`}
    text={[
      `Everyone take your part of the scythe and attach a marker to it.`,
      `To defeat the ghouls, follow the instructions in the video`,
      `Try to focus on accuracy rather than speed/force.`,
    ]}
    stopAudio={true}
    answers={["fight"]}
  />
);

const freeTheWeaver = (
  <NormalDialogue
    isGlobal={true}
    header={`FREE THE WEAVER`}
    text={[
      `Everyone take your scythe. Remove the markers and replace it with something pointier.`,
      `When everyone is ready, destroy the ghost energy on the ceiling holding the Grim Weaver captive!`,
      `Try to catch what is contained in the energy bubbles to find the hidden message`,
    ]}
    answers={["Arachnid"]}
    audio={balloonPop}
  />
);

const dialogue2026 = [
  <NormalDialogue
    text="Halloween 2026 >:)"
    image={firstImg}
    answers={["entertheweb"]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Hello and welcome to the ${eventName}! A grand party awaits you, where we greet the creatures we haven't seen since last year. The entrance is right over-`,
    ]}
    audio={introMusic}
    image={ticketSpider}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Hold on. You don't look like a spider, you don't smell like a spider, and you certainly don't have eight legs like a spider!`,
    ]}
    image={ticketSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `If you're not a spider, and you're not accompanied by a spider, I'll need to see your tickets!`,
    ]}
    image={ticketSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `No tickets?! What, you thought you could just waltz in here on two legs and attempt the eight-legged waltz?!`,
    ]}
    image={ticketSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `No tickets means no entry. Now get your double butts out of the line!`,
    ]}
    image={ticketSpider}
    isGlobal={true}
  />,
  <NormalDialogue text={[`...`]} isGlobal={true} />,
  <NormalDialogue
    text={[`Psst! Hey! Over here!`]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Sorry ya had to go through that! I wanted ta call out to ya, but the ticket master's already got beef with me and I didn't wanna make it worse!`,
    ]}
    image={grimReaper}
    audio={playfulMusic}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `I guess ya got my message? Hope I didn't scare ya too much.
      I wish I could say it was just a joke, but the truth is, you guys only got a few days left to live.`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `But don't panic! There's some kinda mistake for sure! We just gotta figure out what happened.`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Before I explain, maybe it's better ya see for yourself!`]}
    image={grimReaper}
    isGlobal={true}
  />,
  potionRoulette,
  <NormalDialogue
    text={[
      // DCDCDC - explanation
      // TODO - revival info
      `Everyone should now be able to see their ${lifeLine}`,
      `These ${lifeLine}s are how you survive the night.`,
      `By succeeding at tasks, you receive ${pointName}s, which increase the length of your ${lifeLine}s. By failing, you lose them.`,
      `If your ${lifeLine} runs out, you die.`,
    ]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      // TODO - redo explanation
      `Ya see, these ${lifeLine}s are what tetheres a creature to their body. They show how long ya got left to live. Grim Reapers, such as myself, are in charge of cuttin' the soul free from yer body when yer ${lifeLine}'s all used up!`,
      `When it's time, a Grim Reaper and Black Widow cut the string together, so we can reap the souls and bring em' to the next world.`,
    ]}
    audio={sillyCharacter}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `But something is wrong. Yer ${lifeLine}s've been cut short. And yer not the only ones!
      I seen a bunch'a creatures with cut lines! Yer the only ones who believed my message though...`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `My spider buddy weaved yours up nice and long! And I wasn't supposed'ta cut em til far into the future.
      But nobody else but us know what yer ${lifeLine}s're s'pposed to look like, so they, so they don't believe anything's wrong.`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `That is, except for one other creature! And that's the Grim Weaver!`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />, // Black Widows act as our hourglass, leading us to those whose time is up. Then we reap their souls, and guide them to the next world.
  <NormalDialogue
    text={[
      `The Grim Weaver lives on the cosmic web and is the one who decides all fate.
       The indestructible webs they weave are destiny itself;
      it links people together, decides when something comes to an end, and when something new will start.`,
    ]}
    audio={chillOminous}
    isGlobal={true}
    image={spaceGrimWeaver}
  />,
  <NormalDialogue
    text={[
      `The Grim Weaver decides the length of every creature's ${lifeLine}. They delegate the weaving itself to their spider underlings.
       They then apply the finishing touches that make it almost indestructible.`,
    ]}
    image={spaceGrimWeaver}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `So if ya show your ${lifeLine}s to the Grim Weaver, they'll see that it's wrong, and they can fix it!`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `But the Grim Weaver is a busy spider. They spend most of their time in the Cosmic Web, weaving and planning.
      The only time we get to see em is during the ${eventName}, which is why I called ya here!`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Problem is, we're not spiders, so we all need tickets.`,
      `Usually Grim Reaper's come with their Black Widow pals, as their plus-ones, but my buddy is... busy, so we gotta find another way in.`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `The tickets're woven by hand- er- by eight legs!`,
      ` If ya want ta get in, yer gonna have'ta make yer own!`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  spiderTicketRules,
  <NormalDialogue
    text={[
      `Those don't look half bad!`,
      `But the ticket master ain't fond'a me, so I gotta find another way in...`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `OUTTA THE WAY! We got a big pot o' bone broth soup to deliver to the party!`,
    ]}
    image={chef_spider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Well, there's MY ticket!`,
      `Hope my bones don't melt before I get in the kitchen!`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`What do you lot want? As I've said before, no ticket, no entry!`]}
    image={ticketSpider}
    isGlobal={true}
  />,
  <NormalDialogue text={[`...`]} image={ticketSpider} isGlobal={true} />,
  <NormalDialogue
    text={[
      `Kehehehe! Are these supposed to be tickets?! My granddaughter could weave a more convincing web!`,
    ]}
    image={ticketSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `If you have an appreciation for Spider Arts, then I suppose you can't be all that bad.`,
      `Since you're so desperate to get in, then maybe I can-`,
    ]}
    image={ticketSpider}
    isGlobal={true}
  />,
  <NormalDialogue text={[`HOT!!!`]} image={grimReaper} isGlobal={true} />,
  <NormalDialogue text={[`?`]} image={ticketSpider} isGlobal={true} />,
  <NormalDialogue
    text={[`Uh, I mean, soup noise, soup noise`]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Ugh... they got a talking soup again this year...`]}
    image={ticketSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `As I was saying... if you promise to bring me a drink, then I'll look the other way if you sneak in with the kitchen staff.
      But if you get caught, you're on your own!`,
    ]}
    image={ticketSpider}
    isGlobal={true}
  />,
  /*
  <NormalDialogue
    text={[
      `As I was saying... I've been sitting out here all evening, and NO one has come to drop by any snacks in my web!`,
      `Bring me some food, and I'll see what I can do for you.`,
    ]}
    image={ticketSpider}
    isGlobal={true}
  />,
  bugDeliveryRules,
  <NormalDialogue
    text={[`*Cronch cronch* mmmm fresh bugs`]}
    image={ticketSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      // TODO - double check kitchen vs musicians
      `Alright, if you sneak in with the kitchen staff, I'll look the other way. But if you get found out, you're on your own!`,
    ]}
    image={ticketSpider}
    isGlobal={true}
  />*/
  <NormalDialogue
    text={[`You try to sneak through the kitchen...`]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`What do you think YOU'RE doing?!`]}
    image={chef_spider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `You're part of the kitchen staff? If that's the case, then FETCH US MORE FOOD!`,
    ]}
    image={chef_spider}
    isGlobal={true}
  />,
  bugDeliveryRules,
  <NormalDialogue
    text={[`The bugs you caught look alright, now bring em' to the party!`]}
    image={chef_spider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      // TODO
      `(Stay tuned for a scene change)`,
    ]}
    answers={["spiderparty"]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Spiders dressed in the finest silk are dancing on the floor, crawling on the walls, and hanging from the ceiling, feasting on a variety of refreshments.
      Some of them are holding one drink with every arm (octuple fisting).`,
    ]}
    audio={wizardArrival} // double check music
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Hey! Ya made it in!`,
      `Ask about`,
      `1. Soup`,
      `2. Black Widow`,
      `3. Weaver`,
      `4. Event`,
      `5. Bye`,
    ]}
    image={grimReaper}
    isGlobal={true}
    answerOptions={[
      {
        option: ["Soup", "1", "1.", `1. Soup`],
        response: `My bones're still steamin'! But I got a nice herby cologne now.`,
        valid: false,
      },
      {
        option: [`Black Widow`, "2", "2.", `1. Black Widow`],
        response: `My partner's busy tonight. But maybe I'll get'ta see her soon...`,
        valid: false,
      },
      {
        option: ["Weaver", "3", "3.", "3. Weaver"],
        response: `Ya gotta show your ${lifeLine}s to the Grim Weaver. They'll know what ta do, for sure.`,
        valid: false,
      },
      {
        option: ["Event", "4", "4.", "4. Event"],
        response: `This party's when the Grim Weaver takes down the veil between living n' dead, so they can fix it up.
        I don' usually join cause some a' the undead ain't a fan of me fer bringin' em over. But if I didn't they'd be stuck to their corpses!`,
        valid: false,
      },
      {
        option: [`Cheers`],
        response: `Cheers! (take a sip)`,
        valid: false,
      },
      {
        option: ["5", "Bye", "Goodbye", "See you"],
        response: `Good luck. I'll try ta talk to the Grim Weaver too!`,
        valid: true,
      },
    ]}
  />,
  <NormalDialogue
    text={[`You attempt to approach the Grim Weaver`]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Hey! Where do you think YOU'RE going?! What business do you have with the Grim Weaver?`,
    ]}
    image={spiderNPC3}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Your lifelines? Looks to me like you have plenty of time left...`]}
    image={spiderNPC3}
    isGlobal={true}
  />,
  timeLeftRules,
  <NormalDialogue
    text={[
      `Hm... it sucks that you're going to die, but if you want to approach the Grim Weaver, you at least have to bring an offering!`,
    ]}
    image={spiderNPC3}
    isGlobal={true}
  />,
  spiderArtGame,
  <NormalDialogue
    text={[
      `With that offering you are... #1736 in line for meeting them, if they stick around for that long.`,
    ]}
    image={spiderNPC3}
    isGlobal={true}
    audio={witchesBall}
  />,
  <NormalDialogue
    text={[
      `I don't recognize you, whose plus-one are you?`,
      `1. You`,
      `2. Gerald`,
      `3. Emily`,
      `4. Ticket`,
    ]}
    answerOptions={[
      {
        option: ["1", "1.", "You", "Yours"],
        response: `I don't know you! (Lose one ${pointName})`,
        valid: false,
      },
      {
        option: ["4", "4.", "ticket"],
        response: `You have a ticket? Those are clearly fake. *bites* (Lose one ${pointName})`,
        valid: false,
      },
      {
        option: ["2", "2.", "Gerald"],
        response: `Ah yes, that spider is always making friends with weirdos. No offense.`,
        valid: true,
      },
      {
        option: ["Wenis"],
        response: `Huh... never heard of them.`,
        valid: true,
      },
      {
        option: ["soup"],
        response: `Mmm... soup...`,
        valid: true,
      },
      {
        option: ["Kitchen"],
        response: `If you're part of the kitchen, then what are you doing here?! (Take a penalty)`,
        valid: false,
      },
      {
        option: ["3", "3.", "Emily"],
        response: `That's my cousin. She doesn't know you! (Lose one ${pointName} and take a penalty)`,
        valid: false,
      },
    ]}
    defaultAnswerOption="Huh???"
    image={spiderNPC1}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `So... nice party, eh?`,
      `Ask about:`,
      `1. Weaver`,
      `2. ${capitalize(lifeLine)}s`,
      `3. Cheers`,
      `4. Grim Reapers`,
      `5. Veil`,
      `6. Bye (End conversation)`,
    ]}
    answerOptions={[
      {
        option: ["Weaver", "1", "1.", "1. Weaver"],
        response: `You want to talk to the Grim Weaver? Good luck. Only very important spiders can approach them.`,
        valid: false,
      },
      {
        option: [`${lifeLine}s`, "2", "2.", `1. ${lifeLine}s`],
        // DCDCDC explanation
        response: `${capitalize(lifeLine)}s are woven by Black Widows per the instructions of the Grim Weaver.
                    The Grim Weaver then adds the finishing touches to the web, to make it indestructible. ...You think yours are too short? So does everyone.`,
        valid: false,
      },
      {
        option: [`Cheers`, "3", "3.", `3. Cheers`],
        response: `Cheers! (take a sip)`,
        valid: false,
      },
      {
        option: [
          `Grim Reapers`,
          "4",
          "4.",
          `4. Grim Reapers`,
          `Reapers`,
          `Grim Reaper`,
          `4. Grim Reaper`,
        ],
        // DCDCDC
        response: `Grim Reapers collect souls when a creature's ${lifeLine} has run out. Otherwise, the soul is stuck their corpse, unable to move. They work in pairs with Black Widows who act as their hourglass, bringing them to those whose time is up.`,
        valid: false,
      },
      {
        option: ["5", "Veil", "5. Veil", "5."],
        response: `Over the year, the veil gets weaker, and some creatures are able to wriggle their way through.
        It's fine if they visit the land of the living for a bit, but eventually they get bored and start causing mishief... and killing people. So it's important we take the veil down so we can repair it.`,
        valid: false,
      },
      {
        option: ["6", "Bye", "Goodbye", "See you"],
        response: `Enjoy the party`,
        valid: true,
      },
    ]}
    defaultAnswerOption="*sips drink* Sorry, repeat that?"
    image={spiderNPC1}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Where are my helpers?! You! You're kitchen staff, aren't you? Come help serve the food!`,
    ]}
    image={chef_spider}
    isGlobal={true}
  />,
  foodDeliveryGame,
  <NormalDialogue
    text={[
      `Has anyone told you you have delicious- I mean, beautiful eyes?`,
      `...well since you delivered us such nice snacks, I guess I can bump you up to #50. Get in line behind #49.`,
    ]}
    image={spiderNPC3}
    isGlobal={true}
    audio={spookyWaltz}
  />,
  <NormalDialogue
    text={[`Only 48 spiders ahead of me!`]}
    image={spiderNPC2}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `The ${eventName} will start soon, I'm so excited!`,
      `Ask about:`,
      `1. ${eventName}`,
      `2. ${capitalize(lifeLine)}s`,
      `3. Bye`,
    ]}
    answerOptions={[
      {
        option: ["Veil", "1", "1.", `1. ${eventName}`],
        response: `The Veil that separates our world and the world of the dead was woven by the Grim Weaver.
                  A week before Halloween, the Veil is taken down by the Grim Weaver for repairs, allowing the dead to come through for a week of festivities! A week later, all creatures return to their side as the new Veil is put up, or they'll die here!`,
        valid: false,
      },
      {
        option: [`${lifeLine}s`, "2", "2.", `1. ${lifeLine}s`],
        response: `Your ${lifeLine}s are quite short, I suppose you'll be travelling to the world of the dead soon.
        ...They've been cut short? That's absurd. They're virtually indestructible. They can be cut only by the Grim Reaper and Black Widow pair that made them, and they have no reason to do so...`,
        valid: false,
      },
      {
        option: [`Cheers`],
        response: `Cheers! (take a sip)`,
        valid: false,
      },
      {
        option: ["3", "Bye", "Goodbye", "See you"],
        response: `Enjoy yourselves.`,
        valid: true,
      },
    ]}
    defaultAnswerOption="These eyes are so delicious... you have eyes too, don't you?"
    image={spiderNPC2}
    isGlobal={true}
  />,
  <NormalDialogue // TODO - maybe have little scene change, so need code
    text={[`Oh! It's starting!`]}
    image={spiderNPC2_2}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Welcome All! Our illustrious Grim Weaver will now take down the Veil!`,
    ]}
    audio={veilMusic}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue text={[""]} image={grimWeaver} isGlobal={true} />,
  <NormalDialogue
    text={["The Veil has begun to disappear"]}
    answers={["lifted"]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Eyyy guess who's back! It's me! Skelly Elly!"]}
    image={skeletonNPC}
    isGlobal={true}
    audio={partyMusic}
  />,
  <NormalDialogue
    text={["Oooohhh... time for ghostly business...."]}
    image={ghostNPC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["WOO! PARTY TIME"]}
    image={wizardNPC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Why was a wizard on the other side?`]}
    image={spiderNPC2}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Enjoy the party everyone! Make sure to meet back here after Halloween so you don't get trapped on this side!`,
    ]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue text={[""]} image={grimWeaver} isGlobal={true} />,
  <NormalDialogue
    header={"?"}
    text={[""]}
    image={grimWeaver}
    isGlobal={true}
  />,
  <NormalDialogue
    header={"!"}
    text={[""]}
    image={grimWeaverTrap}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["MWAHAHAHA! WE'VE CAPTURED THE GRIM WEAVER!"]}
    image={evilGuy1}
    isGlobal={true}
    audio={evilGuyEntrance}
  />,
  <NormalDialogue
    text={[
      "If you want them to be freed, then destroy the veil separating our worlds! We will no longer be forced to stay in the world of the dead!",
    ]}
    image={evilGuy1}
    isGlobal={true}
    audio={evilGuyEntrance}
  />,
  <NormalDialogue
    text={["Yeah, we want to eat humans whenever we want!"]}
    image={evilGuy2}
    isGlobal={true}
    audio={evilGuyEntrance}
  />,
  <NormalDialogue
    text={["And we wanna slurp up their souls!"]}
    image={evilGuy3}
    isGlobal={true}
    audio={evilGuyEntrance}
  />,
  <NormalDialogue text={["..."]} image={skeletonNPC} isGlobal={true} />,
  <NormalDialogue
    text={["Why are you looking at me? I'm not with them!"]}
    image={skeletonNPC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `But this is impossible! The Grim Weaver should be able to break out of any web!`,
      `Unless...`,
    ]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Unless it's a ${lifeLine}!`]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`That's right! And you have that Grim Reaper to thank for it!`]}
    image={evilGuy1}
    isGlobal={true}
  />,
  <NormalDialogue text={[`...`]} image={grimReaper} isGlobal={true} />,
  <NormalDialogue
    text={[`Alright, send them through the portal!`]}
    image={evilGuy1}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`You got it, boss!`]}
    image={evilGuy2}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`We have to stop them!`]}
    image={spiderMC}
    isGlobal={true}
  />,
  // TODO game here?
  <NormalDialogue
    text={[`Don't move! Not unless you want us to crush this spider, here!`]}
    image={evilGuy1}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`...help...`]}
    image={blackWidowPal}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Don't hurt her!`]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue text={[`...`]} image={spiderMC} isGlobal={true} />,
  <NormalDialogue
    text={[`Contact us when the veil is destroyed. See ya!`]}
    image={evilGuy1}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Find out where they went! And as for that Grim Reaper, take him to the interrogation web!`,
    ]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`You're coming with me!`]}
    image={buffSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`I'm sorry. I didn't want to help em, but they got my partner...`]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Take my scythe. Please, rescue my buddy.`]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Now where did they take the Grim Weaver?!`]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `A spider crawled on one of the skeletons before they went through the portal. They're in ${weaverLocation}!`,
    ]}
    image={buffSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `That place is a labyrinth... We'll have to plan our attack carefully.`,
    ]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `And you all! You're very suspicious. I have some questions for you...`,
    ]}
    image={spiderMC}
    isGlobal={true}
    audio={runescapeHalloween}
  />,
  <NormalDialogue
    text={[
      `Individually, or in groups, respond to her questions. Careful, your ${lifeLine}s are on the line!`,
    ]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Why do you have a Grim Reaper scythe?`,
      `1. Friends with Grim Reaper`,
      `2. Cut the web`,
      `3. I don't know, he just gave it to us`,
    ]}
    image={spiderMC}
    isGlobal={true}
    answerOptions={[
      {
        option: ["1", "1.", `1. Friends with Grim Reaper`, `Grim Reaper`],
        response: `What? You're in league with him!? *bites* (Lose one ${pointName} and take one penalty)`,
        valid: false,
      },
      {
        option: [`2`, `2.`, `2. Cut the web`, `web`],
        response: `YOU want to cut the web?`,
        valid: true,
      },
      {
        option: [`3`, `3.`, `3. I don't know, he just gave it to us`, `idk`],
        response: `That's suspicious *bites* (Take one penalty)`,
        valid: false,
      },
    ]}
  />,
  <NormalDialogue
    text={[
      `The web was made from ${lifeLine}s. It can only be cut by a Grim Reaper, whose scythe has been coated in the venom of the spider who weaved it.`,
      `1. We are Grim Reapers too`,
      `2. We have spider venom`,
      `3. We're going to bring it to another Grim Reaper`,
      `4. It's made from our ${lifeLine}s`,
      `5. The Grim Weaver will cut it`,
    ]}
    image={spiderMC}
    isGlobal={true}
    answerOptions={[
      {
        option: [
          "1",
          "1.",
          `1. We are Grim Reapers too`,
          `Grim Reaper`,
          "2",
          "2.",
          `2. We have spider venom`,
          "2. Venom",
        ],
        response: `Why would you lie about that? *bites* (Lose one ${pointName} and take one penalty)`,
        valid: false,
      },
      {
        option: [
          `3`,
          `3.`,
          `3. We're going to bring it to another Grim Reaper`,
          `Grim Reaper`,
        ],
        response: `Only the Grim Reaper who is the partner of the original weaver can cut it! *bites* (Take a penalty)`,
        valid: false,
      },
      {
        option: [
          `4`,
          `4.`,
          `4. It's made from our ${lifeLine}s`,
          `${lifeLine}s`,
        ],
        response: `Your ${lifeLine}s were used to build the web?`,
        valid: true,
      },
      {
        option: [`5`, `5.`, `5. The Grim Weaver will cut it`, `Grim Weaver`],
        response: `The Grim Weaver is stuck inside the web. They can't use the scythe! *bites* (Take a penalty)`,
        valid: false,
      },
    ]}
  />,
  <NormalDialogue
    text={[
      `Of course! It's a lesser-known fact, but using a scythe, one can cut their own ${lifeLine}s, that means you can also cut the web!
       But if that Grim Reaper is in league with those evil ghouls, why would he want to cut the web?`,
      `1. His partner`,
      `2. For money`,
      `3. Lighter sentence`,
      `4. He forgot whose side he's on`,
    ]}
    audio={prettySadPiano}
    image={spiderMC}
    isGlobal={true}
    answerOptions={[
      {
        option: ["1", "1.", `1. His partner`, `partner`],
        response: `His partner? Right, where IS his partner?`,
        valid: true,
      },
      {
        option: [`2`, `2.`, `2. For money`, `Money`],
        response: `And I bet you want a cut of the money too?! *bites* (Lose one ${pointName} and take a penalty)`,
        valid: false,
      },
      {
        option: [`3`, `3.`, `3. Lighter sentence`, `3. sentence`],
        response: `Not happening. (Take a penalty)`,
        valid: false,
      },
      {
        option: [`4`, `4.`, `4. He forgot whose side he's on`, `side`],
        response: `And what about you? Whose side are YOU on *bites* (Take a penalty)`,
        valid: false,
      },
    ]}
  />,
  <NormalDialogue
    text={[`*mumble mumble spider secrets*`]}
    image={buffSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `His partner was the hostage? That explains why he was helping them out. But I still don't trust him. We'll figure this out on our own.`,
    ]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Those ghouls will be expecting a spider raid. They won't be expecting YOU to show up and cut the web!
      Will you help us free the Grim Weaver?`,
      `1. Yes`,
      `2. No`,
      `3. I have to deliver a drink first`,
      `4. I'll do it for $5`,
      `5. Okay`,
    ]}
    image={spiderMC}
    isGlobal={true}
    answerOptions={[
      {
        option: ["1", "1.", `1. Yes`, `Yes`],
        response: `Fantastic! (Gain one ${pointName})`,
        valid: true,
      },
      {
        option: [`2`, `2.`, `2. No`, `No`],
        response: `You don't have a choice (take a penalty)`,
        valid: true,
      },
      {
        option: [`3`, `3.`, `3. I have to deliver a drink first`, `3. drink`],
        response: `- You deliver the drink. The ticketmaster is so grateful, you gain one ${pointName} (And cheers with someone/a spider) -`,
        valid: false,
      },
      {
        option: [`4`, `4.`, `4. $5`],
        response: `You'll do it for free.`,
        valid: true,
      },
      {
        option: ["5", "5.", `Okay`, `ok`, `k`, `sure`, `whatever`],
        response: `Well don't sound TOO enthusiastic!`,
        valid: true,
      },
    ]}
  />,
  <NormalDialogue
    text={[
      `There are a lot of traps in the crypt, so you'll have to hang from the ceiling to avoid them, using a web.
      Since you're not a spider, you'll get stuck to the web and get all tangled up.`,
    ]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Well, luckily, there's a potion for that!`]}
    image={spiderMC}
    isGlobal={true}
  />,
  potionGame,
  <NormalDialogue
    text={[`Now to go to ${weaverLocation}. I'll send you with my assistants.`]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue text={[`Hm`]} image={buffSpider} isGlobal={true} />,
  <NormalDialogue
    text={[`Helloooooo`]}
    image={spiderPartnerIntro}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `To open a portal to the graveyard, you must use spider magic, using this enchanted instrument. It requires a creature with at least 6 limbs to play.`,
    ]}
    image={spiderMC}
    isGlobal={true}
    audio={itsy}
  />,
  <NormalDialogue
    text={[`My arms are too beefy to hit the keys...`]}
    image={buffSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Someone else will have to play it then!`]}
    image={spiderMC}
    isGlobal={true}
  />,
  pianoPortalGame,
  <NormalDialogue
    text={[
      `Nice job! Now we're in the graveyard! Not sure why didn't you just ask me to play it though.`,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  /*<NormalDialogue
    text={[`My arms are too beefy to hit the keys...`]}
    image={buffSpider}
    isGlobal={true}
  />,*/
  /*
  <NormalDialogue
    text={[
      `Rats! ${weaverLocation} is locked! And Rats! Our spider scouts were eaten by rats! We need to get them back!`,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  dissectionGame,
  // TODO scene change?
  <NormalDialogue
    text={["What's the code?"]}
    answers={["Boogieman"]}
    isGlobal={true}
  />,
  */
  // TODO - receive the scythes
  <NormalDialogue
    text={[`The ${weaverLoc} is open...`]}
    image={spiderPartner}
    isGlobal={true}
    audio={spooky_sad}
  />,
  <NormalDialogue
    text={[`I'm buff, and I find this concerning...`]}
    image={buffSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `They're probably expecting us. You need to be able to defend yourselves... maybe you can use the scythe.`,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Everyone take a piece of the scythe`]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `This is great! They're all imbued with undead energy. Here, I'll give you some spider magic, too!`,
      `But we should make sure you can wield them before we go in.`,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  webPictionary,
  <NormalDialogue
    text={[`My buff hands crush every pencil. I also cannot draw.`]}
    image={buffSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Yeah, okay, anyways. We've attached these webs to the ceiling, so you can move through the ${weaverLoc} without touching the floor.
       Let's go!`,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue text={[`...`]} image={spiderPartner} isGlobal={true} />,
  <NormalDialogue text={[`We're in.`]} image={spiderPartner} isGlobal={true} />,
  <NormalDialogue text={[`...`]} image={spiderPartner} isGlobal={true} />,
  <NormalDialogue text={[`Uh oh.`]} image={spiderPartner} isGlobal={true} />,
  <NormalDialogue
    text={[
      `There are a lot of bombs on the ground... When they notice us, they'll probably detonate them. Even if we avoid the bombs, the ceiling will crush us!`,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Nothing can crush me.`]}
    image={buffSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`But we'll still get crushed! We have to get rid of them!`]}
    image={spiderPartner}
    isGlobal={true}
  />,
  relayGame2,
  <NormalDialogue
    text={[`Phew! Now we can get to the main area!`]}
    image={spiderPartner}
    isGlobal={true}
    audio={ominousMusic}
  />,
  <NormalDialogue
    text={[`*dramatic gasp*`]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `The Grim Weaver is enveloped in ghost energy behind the web! We have to free them!`,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`You guys gotta hide!`]}
    image={blackWidowPal}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`You're the hostage! Are you okay?`]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`No time for that! Hide!`]}
    image={blackWidowPal}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`...okay you guys are too big to hide. Just... act natural.`]}
    image={blackWidowPal}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Hah! I knew you spiders would come!`]}
    image={evilGuy2}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Wait, you're not spiders, what are you doing here? (Respond individually or as a group)`,
      `1. We're spiders`,
      `2. We're trick-or-treaters`,
      `3. We're humans`,
      `4. We're graverobbers`,
      `5. We're skeletons`,
      `6. We're from the union`,
    ]}
    image={evilGuy2}
    isGlobal={true}
    answerOptions={[
      {
        option: ["1.", "1"],
        response: `You're a spider!? *smack* (lose one ${pointName} and take a penalty). Wait, you don't look like spiders... are you sure?`,
        valid: false,
      },
      {
        option: ["2", "2."],
        response: `Oh... uh... I don't have any candy for you. How about this! *cheers* (take a sip).`,
        valid: false,
      },
      {
        option: ["3", "3."],
        response: `Okay? And???`,
        valid: false,
      },
      {
        option: ["4", "4."],
        response: `I have a grave here! You better not have stolen any of MY stuff! *smack* (lose one ${pointName} and take a penalty)`,
        valid: false,
      },
      {
        option: ["5", "5."],
        response: `You're skeletons?!`,
        valid: true,
      },
      {
        option: ["6", "6."],
        response: `Boss told us not to talk to you! *smack* (take a penalty)`,
        valid: false,
      },
      {
        option: ["soup"],
        response: `Mmm... soup... wait, who are you?`,
        valid: false,
      },
    ]}
  />,

  <NormalDialogue
    text={[
      `You don't look like skeletons`,
      `1. We're future skeletons`,
      `2. We're actors`,
      `3. We do look like skeletons`,
      `4. We lied`,
    ]}
    image={evilGuy2}
    isGlobal={true}
    answerOptions={[
      {
        option: ["1.", "1"],
        response: `If you're not a skeleton yet, then I don't care! (take a penalty)`,
        valid: false,
      },
      {
        option: ["2", "2."],
        response: `You're actors? So... you don't look like skeletons cause you're acting?`,
        valid: true,
      },
      {
        option: ["3", "3."],
        response: `No, you don't!`,
        valid: false,
      },
      {
        option: ["4", "4."],
        response: `Why would you lie to me?! *smack* (lose one ${pointName} and take a penalty)`,
        valid: false,
      },
      {
        option: ["soup"],
        response: `Mmm... soup... wait, who are you?`,
        valid: false,
      },
    ]}
    defaultAnswerOption="What are you mumbling about?!"
  />,
  <NormalDialogue
    text={[`If you're really skeleton actors, then prove it!`]}
    image={evilGuy2}
    isGlobal={true}
  />,
  skeletonCharades,
  <NormalDialogue
    text={[
      `Wow! Real skeleton actors! But some of you seem like extras, no offense...`,
    ]}
    image={evilGuy2}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `I'll go get the boss so he can initiate you into our organization!`,
    ]}
    image={evilGuy2}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Well, that could have gone worse.`]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Now, let's free the Grim Weaver before they come back!`]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`I'm still here.`]}
    image={evilGuy2}
    isGlobal={true}
  />,
  <NormalDialogue text={[`🤦‍♀️`]} image={blackWidowPal} isGlobal={true} />,
  <NormalDialogue
    text={[`Oh. Uh... forget you heard that.`]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue text={[`Okay :3`]} image={evilGuy2} isGlobal={true} />,
  <NormalDialogue
    text={[`You are 100% fired`]}
    image={evilGuy1}
    isGlobal={true}
  />,
  <NormalDialogue text={[`:(`]} image={evilGuy2} isGlobal={true} />,
  <NormalDialogue
    text={[`Ghouls! Attack them!`]}
    image={evilGuy1}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Your scythes contain undead energy! You can fight!`]}
    image={spiderPartner}
    isGlobal={true}
  />,
  finalGame,
  <BossBattle />,
  <NormalDialogue
    text={[
      `Ugh... you think you've won? We're in a graveyard! There are countless souls outside awaiting my command!`,
    ]}
    image={evilGuy1}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Quick! We have to free the Grim Weaver!`]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Hah! I know you're bluffing! Only a Grim Reaper can do that!`]}
    image={evilGuy1}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Oh no... you're right... *whispering* they don't suspect a thing! Free the Grim Weaver before they catch on!`,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  freeTheWeaver,
  <NormalDialogue
    text={[""]}
    image={grimWeaver}
    isGlobal={true}
    audio={midnight_halloween}
  />,
  <NormalDialogue text={[`Uh-oh`]} image={evilGuy1} isGlobal={true} />,
  <NormalDialogue
    text={[
      `With the Grim Weaver's webs, we can take them all back to the party!`,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`One spooky scary portal spell later...`]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`You're back! With the Grim Weaver! And the evil ghouls!`]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `And we're getting out of here! We're ghosts! Not like you can stop us with your webs!`,
    ]}
    image={evilGuy1}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[``]}
    image={grimWeaver}
    isGlobal={true}
    audio={scarySpiderMusic}
  />,
  <NormalDialogue text={[`...huh?`]} image={evilGuyWebbed} isGlobal={true} />,
  <NormalDialogue
    text={[`The Grim Weaver can even make ectoplasm webs!`]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`And now the Grim Weaver will decide your fate...`]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue text={[``]} image={grimWeaver} isGlobal={true} />,
  <NormalDialogue
    text={[`100 years of community service!`]}
    image={spiderMC}
    isGlobal={true}
    audio={halloween_dance}
  />,
  <NormalDialogue text={[`What`]} image={evilGuyWebbed} isGlobal={true} />,
  <NormalDialogue
    text={[
      `You can start by helping to reweave the ${lifeLine}s you stole! Of course, you can't weave them yourselves, so instead you'll act as a black widow's assistant.`,
    ]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `As your new boss, I'll be sure to treat you as nicely as you treated me >:)`,
    ]}
    image={blackWidowPal}
    isGlobal={true}
  />,
  <NormalDialogue text={[`*gulp*`]} image={evilGuyWebbed} isGlobal={true} />,
  <NormalDialogue
    text={[
      `As for that Grim Reaper... why did you help these guys?! Why didn't you ask us to rescue your partner!`,
    ]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `I made a magical deal with em'. As long as I didn't talk to no spiders, or talk about their plan, they wouldn' hurt my buddy.`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue text={[`🥺`]} image={blackWidowPal} isGlobal={true} />,
  <NormalDialogue text={[``]} image={grimWeaver} isGlobal={true} />,
  <NormalDialogue
    text={[`The Grim Weaver has decided you're free to go.`]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue text={[`Hurray!`]} image={grimReaper} isGlobal={true} />,
  <NormalDialogue
    text={[`As long as you also help rebuild the webs.`]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`I got no problem with that!`]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue text={[`Yay!`]} image={blackWidowPal} isGlobal={true} />,
  <NormalDialogue text={[``]} image={bffs} isGlobal={true} />,
  <NormalDialogue
    text={[
      `And to you all, thank you for rescuing the Grim Weaver! We will weave you up some new ${lifeLine}s that are nice and long.`,
    ]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue text={[``]} image={grimWeaver} isGlobal={true} />,
  <NormalDialogue
    text={["And the Grim Weaver will ensure your fates are favourable."]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "Some of you worked extra hard to help us, and for that, we will give you a gift.",
    ]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Those with the longest ${lifeLine}s can choose their prize.`]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Some need to get stronger...`]}
    image={buffSpider}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`And some need to let loose!`]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `The three with the shortest ${lifeLine}s take 5 penalties, or a shot`,
    ]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "Despite the chaotic start to this evening, the night is only just beginning!",
    ]}
    image={spiderMC}
    audio={rave}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Yaaas! Let's party!"]}
    image={purpleSpiderWink}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Happy Halloween!!"]}
    image={skeletonNPC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`(Happy Halloween)`]}
    image={grimWeaver}
    isGlobal={true}
  />,
  <NormalDialogue text="HAPPY HALLOWEEN!" image={endCard} isGlobal={true} />,
];

// TODO - all areas have same dialogue, depending on team, return different order (future task when needed)
export const getDialogue = (team: string) => {
  return dialogue2026;
};

export default getDialogue;
