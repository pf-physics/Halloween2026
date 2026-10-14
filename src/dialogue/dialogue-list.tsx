import NormalDialogue from "./templates/normal-dialogue";
import introMusic from "../assets/audio/magic_halloween.mp3";
import firstImg from "../assets/imgs/cauldron_pumpkin.jpg";
import many_ghosts from "../assets/imgs/many_ghosts_freepik.jpg";
import chef_spider from "../assets/imgs/chef_spider.png";
import grim_reaper from "../assets/imgs/GrimReaper.jpg";
import buffSpider from "../assets/imgs/buffSpider.png";

import endCard from "../assets/imgs/cauldron_pumpkin.jpg";
import wizardArrival from "../assets/audio/Wizard_arrival.mp3";

import BossBattle from "./scenes/boss-battle";
import GhostDialogue from "./templates/ghost-dialogue";

import blackWidow from "../assets/imgs/bw2.png";

import newHalloween from "../assets/audio/New-Halloween-Theme.mp3";
import halloweenGroove from "../assets/audio/Halloween-Groove.mp3";
import carnage from "../assets/audio/Carnage.mp3";

const eventName = "Teardown of the Veil"; // Veil Removal Ceremony
const lifeLine = "life line";
const placeholder = blackWidow;
const ticketSpider = placeholder;
const grimReaper = grim_reaper;
const pointName = "link";
const spiderNPC1 = placeholder;
const spiderNPC2 = placeholder;
const spiderNPC3 = placeholder;
const spiderMC = placeholder;
const lilSpiderMC = placeholder;
const grimWeaver = placeholder;
const ghostNPC = "../assets/imgs/ghosts.png";
const skeletonNPC = placeholder;
const wizardNPC = "../assets/imgs/wizard_party.png";
const evilGuy1 = placeholder;
const evilGuy2 = placeholder;
const evilGuy3 = placeholder;
const evilGuyEntrance = carnage;
const blackWidowPal = placeholder;
const spiderPartner = placeholder;
const weaverLocation = "Gertrude's Crypt";

// TODO delete - it's for the chat menu
export const chatImg = placeholder;

const rules = `1st: 3 points, 2nd: 2 points, 3rd: 1 point. Last place 3 penalties, 2nd to last 2 penalties, 3rd to last 1 penalty`;

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const spiderTicketRules = (
  <NormalDialogue
    isGlobal={true}
    header={"COUNTERFEIT TICKETS"}
    videoUrls={[
      // TODO - https://www.youtube.com/watch?v=sGR9nA7L1zE
      "https://storage.googleapis.com/halloween2024/halloween2026/placeholder1",
      "https://storage.googleapis.com/halloween2024/halloween2026/placeholder1",
    ]}
    text={[
      `Use the webs provided to weave a ticket to get into the party`,
      `When your web is complete, take a picture of it and upload it to the group. Vote on the webs by reacting with 🕸️ on your favourite and 🕷️ on your second favourite.`,
      rules,
    ]}
    stopAudio={true}
  />
);

const potionRoulette = (
  <NormalDialogue
    isGlobal={true}
    header={"Potion Roulette"}
    text={[
      `There are four potions that will reveal your ${lifeLine}, some are more palatable than others: A potions - 50% chance of being hard alcohol. B - potions 50% chance of being gross.`,
      `Drinking these potions will also extend your ${lifeLine} by 1.`,
      `Those who don't want to risk drinking the potions, can take a sip of your own drink. Your ${lifeLine} will not increase.`,
    ]}
  />
);

const bugDeliveryRules = (
  <NormalDialogue
    isGlobal={true}
    header={"BUG DELIVERY"}
    text={[
      `Split up into two groups, each choose a bucket of bugs.`,
      `Throw the bugs at the spiderweb on the wall. Try to get as many bugs as possible to stick to the web.
       The group with the most bugs sticking wins`,
      `The group that finishes first gets one bonus ${pointName}`,
      rules,
    ]}
    stopAudio={true}
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
      rules,
    ]}
    stopAudio={true}
  />
);

const potionGame = // TODO - finish writing
  (
    <NormalDialogue
      isGlobal={true}
      header={"ANTI STICK POTION"}
      text={[
        `Split up into two groups.`,
        `One group at a time, go to the potions room and make the potion.`,
      ]}
      stopAudio={true}
    />
  );

// TODO - draw the examples
const familiarSummoningRules = (
  <NormalDialogue
    isGlobal={true}
    header={"FAMILIAR SUMMONING"}
    text={[
      `Everyone split up into pairs/groups. Using a summoning charm, draw a picture of the creature you want to summon. You have two tries.`,
      `Examples of what is accepted will be provided. If your desired animal is not on the list, exceptions can be made.`,
      `Bonus points will be awarded to those who go above and beyond.`,
      `Cheating: get one extra try. Failure to cheat: your first attempt is your only attempt`,
      //rules,
    ]}
  />
);

const summonSoulsRules = (
  <NormalDialogue
    isGlobal={true}
    header={"SUMMONING LOST SOULS"}
    text={[
      `Attach a necromancy charm to your wand. When everyone is ready, use the charm to fish lost souls from the gate`,
      `When time is up, the student with the most souls, wins.`,
      `If necessary, split up into two groups.`,
      `Cheating: get extra time (start early). Failure to cheat: get less time (start late). 7 seconds`, // DCDCDC - too much?
      rules,
    ]}
  />
);

const ghostCreationRules = (
  <NormalDialogue
    isGlobal={true}
    header={"GHOST COMMUNING"}
    text={[
      `Everyone grab a soul (balloon) and draw a face on it.`,
      `Blow up the balloon as big as you can. Biggest balloon wins.`,
      rules,
    ]}
  />
);

const ghostConnectionRules = (
  <NormalDialogue
    isGlobal={true}
    header={"GHOST BONDING"}
    text={[
      `Everyone take your ghost and space out. When everyone is ready, use your wand to keep the ghost afloat. The person who keeps their ghost floating the longest, wins`,
      `If everyone survives for 2 minutes, additional rules will be added`,
      `If you break or spill anything in the room, automatically lose and take 10 penalties`,
      rules,
    ]}
  />
);

const shapeshiftingJudging = (
  <NormalDialogue
    isGlobal={true}
    header={"SHAPESHIFTING CONTEST"}
    text={[
      `Since everyone has already shapeshifted into something cool (costume), you can decide who gets the most points!`,
      `Take three tokens and vote for your top 3 favourite shapeshifters`,
      `Top shapeshifter gets 4 points. 2nd and 3rd place get 3 points, 4th and 5th get 2 points. Everyone else who shapeshifted get 1 point. If you didn't shapeshift, get no points and take 3 penalties.`,
    ]}
  />
);

const shapeshiftingPractice = (
  <NormalDialogue
    isGlobal={true}
    header={"SHAPESHIFTING PRACTICE"}
    text={[
      `Everyone take two small pieces of paper and write something to shapeshift into, and sign with your name. Put your the papers into the pot.`,
      `One at a time, pick a paper and become (act out) what's written on the paper. Say the name of the person who wrote it beforehand so they know not to guess.`,
      `You get one minute to act out a maximum of two papers`,
      `Keep track of how many you guessed and how many you acted out to decide the winner of the challenge`,
      `Cheating: get 15 seconds extra. Failure to cheat: lose 15 seconds.`,
      rules,
    ]}
  />
);

const potionMaking = (
  <NormalDialogue
    isGlobal={true}
    header={"POTION MAKING"}
    text={[
      `Time for a group project! Split into three groups. One group at a time, head to the potion making room and make a potion, following the instructions.`,
      `The instructions may be vague but any experienced witch is very familiar with these ingredients and knows should ones should be used, and which ones are poisoned.`,
      `You cannot taste or smell the ingredients before you use them. The assistant witch will be moderating your potion making.`,
      `When each group has made a potion, you will taste test each other's potions to gauge which one is correct.`,
      `Everyone take a sampling glass and split each potions amongst everyone. Rate your potion in terms of your favourite to least favourite.`,
      `Those feeling daring can top off their samples with essence of nightmares (if you do it for one potion, you must do it for all)`,
      `3 points to each member of the team with the best potion, second team members get 1 point`,
      `Cheating: you can each smell one ingredient. EVERYONE must succeed at cheating for anyone to cheat. Failure to cheat: your secondary ingredient must be randomly picked.`,
    ]}
  />
);

const divinationGame = (
  <NormalDialogue
    isGlobal={true}
    header={"DIVINATION"}
    text={[
      `Everyone grab a new sheet of paper`,
      `2 minutes to write down who you think drew each picture`,
      `The answers will be revealed and you can grade your own sheet.`,
      `All correct = 3 points, 1-2 wrong = 2 points, 3 wrong = one point, 3-5 wrong = one penalty, 6+ wrong = two penalties`,
    ]}
  />
);

const broomDeliveryGame = (
  <NormalDialogue
    isGlobal={true}
    header={"BROOM RELAY"}
    text={[
      `You are tasked with delivering the magic ring artifacts`,
      `Split up into two even teams and line up from the table to the window in two rows.`,
      `The person closest to the table starts with the broom between their knees, and must pass the broom to the next person.`,
      `At the window, pick up the ring artifact and pass the broom back across the team to the other side.`,
      `The team that delivers the most rings, wins. If both teams deliver the same amount, then the team that finished first wins.`,
      `Each member of the winning team gets 4 points. The losing team takes 3 penalties.`,
    ]}
  />
);

const prepCurseGame = (
  <NormalDialogue
    isGlobal={true}
    header={"PREPARE THE CURSE"}
    text={[
      `Everyone take a curse board and write down something you want to curse in the middle.`,
      `Using the stakes provided, stake the four corners of the board.`,
      `If you haven't already, prepare your cursed string loop.`,
      `When everyone is prepared, write "Cursetime" to proceed to the instructions.`,
      `If you succeed on the first try, get 3 points, otherwise take 3 penalties and try again.`,
    ]}
    answers={["Cursetime"]}
  />
);

const curseGame = (
  <NormalDialogue
    isGlobal={true}
    header={"CASTING THE CURSE"}
    text={[
      `Everyone take a curse stake.`,
      `When everyone is ready, use the stake to stab between and around the strings as much as possible in one minute`,
      `The person with the most destroyed board gets 3 points`,
    ]}
  />
);

const magicDuelGame = (
  <NormalDialogue
    isGlobal={true}
    header={"MAGIC DUEL"}
    text={[
      'Capax Infiniti" counters "Nox Cruenta", "Nox Cruenta" counters "Undam Mortis", and "Undam Mortis" counters "Capax Infiniti"',
      "Capax Infiniti: infinity",
      "Nox Cruenta: zig zag",
      "Undam Mortis: swirl",
      `Everyone pair up and duel each other. Best out of three wins each round.`,
      // When there are 4 left, we judge them. If one spell wins against another, if they didn't have enough passion, consider it a tie
      // If both did the same thing, both with passion, can choose the faster one
      "When down to top 4, the audience will judge the winner based on every part of the spell. Ties will be broken by deciding who has the most spirit",
      "Cheating: You can try to cheat to add an extra round if you lose. Take 4 penalties if you fail.",
      rules,
    ]}
  />
);

export const cheatingRulesList = [
  `Take a penalty to try and cheat.`,
  `Roll a dice. If you roll {3, 4, 5, 6} you cheat successfully. If you roll {1, 2}, you are caught!`,
  `If you fail to cheat take two more penalties and the cheating penalty.`,
];

const cheatingRules = (
  <NormalDialogue
    isGlobal={true}
    header={"HOW TO CHEAT"}
    text={cheatingRulesList}
  />
);

const dialogue2024 = [
  <NormalDialogue
    text="Halloween 2026 >:)"
    image={firstImg}
    answers={["classtime"]}
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
    // new music
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
      `But don't ya panic! There's some kinda mistake for sure! We just gotta figure out what happened.`,
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
      `These ${lifeLine}s are how you survive the night. If your ${lifeLine} runs out, you die.`,
    ]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      // TODO - redo explanation
      `Ya see, Grim Reapers, such as myself, are in charge of cutting ${lifeLine}s, these are the strings tethering creatures to their bodies.`,
      `When someone's time is up, a Grim Reaper and Black Widow will cut the string together, so we can reap the souls and bring em' to the next world.`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `But something is wrong. Yer {lifeLines}s've been cut short. And yer not the only ones!
      I seen a bunch'a creatures with cut lines! Yer the only ones who believed my message though...`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue // DCDCDC - the spider weaves or just strengthens?
    text={[
      `My spider buddy weaved up yours up nice and long! And I wasn't supposed'ta cut em until far into the future.
    But no one else knows what your original strings looked like, so they don't think anything's wrong.`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue // maybe make this lore, so not spoken by Grim Reaper
    text={[`One other being knows, and that's the Grim Weaver!`]}
    image={grimReaper}
    isGlobal={true}
  />, // Black Widows act as our hourglass, leading us to those whose time is up. Then we reap their souls, and guide them to the next world.
  <NormalDialogue
    text={[
      `The Grim Weaver decides all fate. The indestructible webs they weave are destiny itself;
      it links people together, decides when something comes to an end, and when something new will start.`,
    ]}
    image={grimReaper}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `The Grim Weaver decides the length of every creature's ${lifeLine}, and their spider underlings weave it.`,
    ]}
    image={grimReaper}
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
      `This here is a spider party, so the tickets're woven by hand- er- by eight legs!`,
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
      `Hope my bones don't melt before I get ta the kitchen!`,
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
    text={[
      // TODO
      `(Stay tuned for a scene change)`,
    ]}
    answers={["spiderparty"]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `You sneak in through the kitchen and manage not to get bitten by the staff.`,
    ]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Spiders dressed in the finest silk are dancing on the floor, crawling on the walls, and hanging from the ceiling, feasting on a variety of refreshments.
      Some of them are holding drinks with each arm (octuple fisting).`,
    ]}
    isGlobal={true}
  />,
  <NormalDialogue // TODO - maybe put name tags on spiders
    text={[
      `I don't recognize you, who's plus-one are you?`,
      `(You, Gerald, ticket)`,
    ]}
    answerOptions={[
      {
        option: ["You", "Yours"],
        response: `I don't know you! (Lose one ${pointName})`,
        valid: false,
      },
      {
        option: ["ticket"],
        response: `You have a ticket? Those are clearly fake. *bites* (Lose one ${pointName})`,
        valid: false,
      },
      {
        option: ["Gerald"],
        response: `Ah yes, that spider is always making friends with weirdos. No offense.`,
        valid: true,
      },
      {
        option: ["Wenis"],
        response: `Huh... never heard of them.`,
        valid: true,
      },
      {
        option: ["Emily"],
        response: `That's my cousin. She doesn't know you! (Lose one ${pointName}$)`,
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
      `2. ${lifeLine}s`,
      `3. Cheers`,
      `4. Grim Reapers`,
      `5. Bye (End conversation)`,
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
        response: `Grim Reapers collect souls when their ${lifeLine} has run out. Otherwise, the soul is stuck their corpse, unable to move. They work in pairs with Black Widows who act as their hourglass, bringing them to those whose time is up.`,
        valid: false,
      },
      {
        option: ["5", "Bye", "Goodbye", "See you"],
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
      `Hey! Ya made it in!`,
      `Ask about`,
      `1. Soup`,
      `2. Black Widow`,
      `3. Weaver`,
      `4. Bye`,
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
        option: [`Cheers`],
        response: `Cheers! (take a sip)`,
        valid: false,
      },
      {
        option: ["4", "Bye", "Goodbye", "See you"],
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
    text={[`Hey! Where do you think YOU'RE going?!`]}
    image={spiderNPC3}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `If you want to approach the Grim Weaver, you at least have to bring an offering!`,
    ]}
    image={spiderNPC3}
    isGlobal={true}
  />,
  bugDeliveryRules,
  <NormalDialogue
    text={[
      `Okay with that offering you are... #1736 in line for meeting them, if they stick around for that long.`,
      `You should have brought a better snack, like eyeballs... mmmm....`,
    ]}
    image={spiderNPC3}
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
      `...well I guess I can bump you up to #50. Get in line behind #49.`,
    ]}
    image={spiderNPC3}
    isGlobal={true}
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
      `2. ${lifeLine}s`,
      `3. Bye`,
    ]}
    answerOptions={[
      {
        option: ["Ceremony", "1", "1.", `1. ${eventName}`], // DCDCDC
        response: `The Veil that separates our world and the world of the dead was woven by the Grim Weaver. Over the year, the Veil weakens, allowing some creatures to slip through to our side.
                  A week before Halloween, the Veil is taken down by the Grim Weaver for repairs, allowing the dead to come through for a week of festivities! A week later, all creatures return to their side as the new Veil is put up, or they will perish.`,
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
  <NormalDialogue
    text={[`Oh! It's starting!`]}
    image={spiderNPC2}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Welcome All! Our illustrious Grim Weaver will now take down the Veil!`,
    ]}
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
      `Enjoy the party everyone! Make sure to meet back here after Halloween so you don't get locked out!`,
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
    image={grimWeaver}
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
    image={spiderMC}
    isGlobal={true}
  />,
  /*
  <NormalDialogue
    text={[`And take the rest of them too! They were colluding`]}
    image={spiderMC}
    isGlobal={true}
  />,
  */
  /*
   <NormalDialogue
    text={[`We had jus' taken a soul to th'other side. We were walkin' along the veil.`]}
    image={spiderMC}
    isGlobal={true}
  />,
  */
  <NormalDialogue
    text={[`Take my scythe. Please, rescue my buddy.`]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Now where did they take the Grim Weaver?!`]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `A spider crawled on to one of the skeletons before they went through the portal. They're in ${weaverLocation}!`,
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
  />,
  <NormalDialogue
    text={[
      `Individually, or in groups, respond to her questions. Careful, your ${lifeLine} is on the line!`,
    ]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Hold on, what are you doing with a Grim Reaper scythe?`,
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
      `4. It's our ${lifeLine}s`,
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
        option: [`4`, `4.`, `4. It's our ${lifeLine}s`, `${lifeLine}s`],
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
      `Of course! Because it's your ${lifeLine}, you can also cut it!
       But if that Grim Reaper is in league with those evil ghouls, why would he want to cut the web?`,
      `1. His partner`,
      `2. For money`,
      `3. Lighter sentence`,
      `4. He forgot whose side he's on`,
    ]}
    image={spiderMC}
    isGlobal={true}
    answerOptions={[
      {
        option: ["1", "1.", `1. His partner`, `partner`],
        response: `That's a good point, where IS his partner.`,
        valid: true,
      },
      {
        option: [`2`, `2.`, `2. For money`, `Money`],
        response: `And I bet you want a cut of the money too?! *bites* (Lose one ${lifeLine} and take a penalty)`,
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
    text={[
      `Of course! Because it's your ${lifeLine}, you can also cut it!
       But if that Grim Reaper is in league with those evil ghouls, why would he want to cut the web?`,
      `1. His partner`,
      `2. For money`,
      `3. Lighter sentence`,
      `4. He forgot whose side he's on`,
    ]}
    image={spiderMC}
    isGlobal={true}
    answerOptions={[
      {
        option: ["1", "1.", `1. His partner`, `partner`],
        response: `That's a good point, where IS his partner.`,
        valid: true,
      },
      {
        option: [`2`, `2.`, `2. For money`, `Money`],
        response: `And I bet you want a cut of the money too?! *bites* (Lose one ${lifeLine} and take a penalty)`,
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
      `1. His partner`,
      `2. For money`,
      `3. Lighter sentence`,
      `4. He forgot whose side he's on`,
    ]}
    image={spiderMC}
    isGlobal={true}
    answerOptions={[
      {
        option: ["1", "1.", `1. His partner`, `partner`],
        response: `That's a good point, where IS his partner.`,
        valid: true,
      },
      {
        option: [`2`, `2.`, `2. For money`, `Money`],
        response: `And I bet you want a cut of the money too?! *bites* (Lose one ${lifeLine} and take a penalty)`,
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
    text={[
      `His partner was the hostage? That explains why he was helping them out. But I still don't trust him. We'll figure this out on our own.`,
    ]}
    image={spiderMC}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Those ghouls will be expecting a spider raid. They won't be expecting YOU to come visit ${weaverLocation}.
      Will you help us free the Grim Weaver?`,
      `1. Yes`,
      `2. No`,
      `3. I have to deliver a drink first`,
      `4. I'll do it for $5`,
    ]}
    image={spiderMC}
    isGlobal={true}
    answerOptions={[
      {
        option: ["1", "1.", `1. Yes`, `Yes`],
        response: `Fantastic! (Gain one ${lifeLine})`,
        valid: true,
      },
      {
        option: [`2`, `2.`, `2. No`, `No`],
        response: `You don't have a choice (take a penalty)`,
        valid: true,
      },
      {
        option: [`3`, `3.`, `3. I have to deliver a drink first`, `3. drink`],
        response: `- You deliver the drink. The ticketmaster is so grateful, you gain one ${lifeLine} (And cheers with someone/a spider) -`,
        valid: false,
      },
      {
        option: [`4`, `4.`, `4. $5`],
        response: `You'll do it for free.`,
        valid: true,
      },
      {
        option: [`Okay`, `ok`, `k`, `sure`, `whatever`],
        response: `Well don't sound TOO enthusiastic!`,
        valid: true,
      },
    ]}
  />,
  // TODO finish this
  <NormalDialogue
    text={[
      `The web used to catch the Grim Weaver was made of your ${lifeLine}s.
      It can only be cut by a Grim Reaper, whose scythe has been coated in the venom of the spider who weaved it.
      To prevent the web from being cut, they will probably try to kill my cousin... assuming she isn't dead yet.
      `,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      // The other spiders think that Grim Reaper is on the side of the evil ghouls, so they won't let him go on the rescue.
      `Oh! He gave YOU his scythe? But why...?`,
      `Of course! They're your ${lifeLine}s so you can also cut them with a scythe!`,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `The spiders are planning on rescuing the Grim Weaver in the web, and figuring out how to cut it later, which is exactly what the evil ghouls are expecting!
      They won't be expecting YOU to show up and cut the web!`,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `There are a lot of traps in the crypt, so you'll have to hang from the ceiling, using a web.
      Oh, but you'll get stuck to the web, won't you?`,
    ]}
    image={spiderPartner}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Well, luckily, there's a potion for that!`]}
    image={spiderPartner}
    isGlobal={true}
  />,
  potionGame,
  <NormalDialogue
    text={["Happy Halloween!"]}
    image={placeholder}
    isGlobal={true}
  />,
  <NormalDialogue text="HAPPY HALLOWEEN!" image={endCard} isGlobal={true} />,
];

// TODO - all areas have same dialogue, depending on team, return different order (future task when needed)
export const getDialogue = (team: string) => {
  return dialogue2024;
};

export default getDialogue;
