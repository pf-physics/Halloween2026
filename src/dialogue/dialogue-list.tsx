import NormalDialogue from "./templates/normal-dialogue";
import introMusic from "../assets/audio/magic_halloween.mp3";
import summoning from "../assets/audio/summoning.mp3";
import firstImg from "../assets/imgs/cauldron_pumpkin.jpg";

import graveMusic from "../assets/audio/Runescape_Halloween.mp3";

import shinySkeleton from "../assets/imgs/skeleton_shiny_eyes.png";
import sheetGhost from "../assets/imgs/sheet-ghost.jpg";

import mort2 from "../assets/imgs/mort2.png";
import rattler from "../assets/imgs/Rattler.png";
import lil_ghost from "../assets/imgs/lil_ghost.png";
import many_ghosts from "../assets/imgs/many_ghosts_freepik.jpg";

import endCard from "../assets/imgs/Halloween_Cauldron.jpg";
import wizardArrival from "../assets/audio/Wizard_arrival.mp3";

import headmaster from "../assets/imgs/headmaster.png";
import necromancer from "../assets/imgs/necromancer1.jpg";
import cheaterWitch from "../assets/imgs/sus witch.png";
import shapeshifting_witch from "../assets/imgs/shapeshifting_witch.jpg";
import potionsWitch from "../assets/imgs/potions_witch.png";
import broomWitch from "../assets/imgs/broom_witch.png";
import broomWitchScared from "../assets/imgs/broom_witch_scared.png";
import broomWitchExasperated from "../assets/imgs/broom_witch_exasperated.png";
import divinationWitch from "../assets/imgs/clairvoyance_witch.jpg";
import duelWitch from "../assets/imgs/duel_witch.jpg";
import darkMage from "../assets/imgs/curse_witch2.png";

import BossBattle from "./scenes/boss-battle";
import GhostDialogue from "./templates/ghost-dialogue";

import normal_witch from "../assets/imgs/regular witch.png";

import happy_witch from "../assets/imgs/happy_witch.png";
import happy_eyes_witch from "../assets/imgs/happy_eyes_witch.png";
import eyes_witch from "../assets/imgs/eyes_witch.png";
import unhappy_witch from "../assets/imgs/unhappy_witch.png";
import unhappy_eyes_witch from "../assets/imgs/unhappy_eyes_witch.png";
import angry_witch from "../assets/imgs/angry_witch.png";

import flabbergasted from "../assets/imgs/flabbergasted.gif";

import possessed_witch from "../assets/imgs/possessed_3.png";
import prudence from "../assets/imgs/prudence4.png";
import wizard from "../assets/imgs/wizard.png";
import witches2 from "../assets/audio/witches2.mp3";
import newHalloween from "../assets/audio/New-Halloween-Theme.mp3";

import halloweenGroove from "../assets/audio/Halloween-Groove.mp3";
import halloweenHex from "../assets/audio/Halloween-Hex.mp3";

const schoolName = "Grexmurium"; // urbs murium = city of rats, grex murium = swarm of rats, vicus felium = village of cats, bat = vespertilio
const otherSchoolName = "Iusculum"; // soup
const staffName = "Praeclarus";
const headmasterName = "Mildred";

// TODO delete - it's for the chat menu
export const graveDiggerImg = headmaster;
const lostSoulsImg = many_ghosts;

const CharmRules = [
  "Coven Charm/Curse: In a group of 3, each roll a dice. If the average value is greater than 3, you can charm/curse someone",
  "Wizard's Tower Charm/Curse: Everyone in the group rolls a dice. If someone rolls a 6, you can charm/curse someone, otherwise everyone must take 3 penalties.",
  "Scientist's sacrifice: Take a shot to charm/curse someone",
  "Skeleton's hand: Roll a dice. If the value is greater than 2, you can charm/curse someone, otherwise, you are cursed for the round.",
  "Devil's wager: Roll a dice with someone from the other team. Whoever gets a lower value is cursed.",
];

const magicPower = "Halloween power";
const rules = `1st place: 3 points, 2nd place, 2 points, 3rd place 1 point. Last place 3 penalties, 2nd to last 2 penalties, 3rd to last 1 penalty`;

// TODO remove all audio I guess

// TODO DCDCDC the rules here
const wandMakingRules = (
  <NormalDialogue
    isGlobal={true}
    header={"WAND MAKING"}
    stopAudio={true}
    text={[
      `Everyone grab a base wand`,
      `Using the materials provided, alter your wand so that it is in tune with your magic (make it look cool)`,
      `When everyone's wand is complete, each student will be given three pellets to vote on their favourite wand.`,
      rules,
    ]}
  />
);

// TODO - draw the examples
const familiarSummoningRules = (
  <NormalDialogue
    isGlobal={true}
    header={"FAMILIAR SUMMONING"}
    text={[
      `Everyone split up into pairs/groups. Using your camera flashlight, draw a picture of the creature you want to summon.`,
      `Examples of what is accepted will be provided. If your desired animal is not on the list, exceptions can be made.`,
      `Bonus points will be awarded to those who go above and beyond.`,
      `Three points for complex version, 1 point for simple version`,
      `Cheating: get one extra try. Failure to cheat: your first attempt is your only attempt`,
      rules,
    ]}
  />
);

const summonSoulsRules = (
  <NormalDialogue
    isGlobal={true}
    header={"SUMMONING LOST SOULS"}
    text={[
      `Attach a summoning charm to your wand. When everyone is ready, use the summoning charm to fish lost souls from the gate`,
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
      `Everyone take your ghost space out. When everyone is ready, use your wand to keep the ghost afloat. The person who keeps their ghost floating the longest, wins`,
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
      `Take three beads and vote for your top 3 favourite shapeshifters`,
      `Top shapeshifter gets 4 points. 2nd and 3rd place get 3 points, 4th and 5th get 2 points. Everyone else who shapeshifted get 1 points. If you didn't shapeshift, get no points and take 3 penalties.`, // TODO - make sure this still makes sense!
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
      `The instructions may be vague but any experienced witch is very familiar with this potions, and knows which ingredients should be used, and would never use the poisoned ones by accident.`,
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
    text="Halloween 2025 >:)"
    image={firstImg}
    answers={["witches"]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Welcome new students! I am Headmaster ${headmasterName} We're so happy to have you here in our school. With Halloween just around the corner we've been in need of some fresh blood.`,
      "You see, this year our school has been bestowed the honour of hosting this year's Magic Showcase.",
    ]}
    audio={introMusic}
    image={headmaster}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Only our top students will have the priviledge of participating in the showcase, so you'd best study hard!`,
      `The winning school will be awarded the Staff of ${staffName}, a powerful artifact rivaled only by my amulet. With its power, the school will double its potato yield! Among other things...`,
    ]}
    image={headmaster}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "You can find your report card on the wall. The best students will be rewarded and the worst... well, just do your best and you won't have to find out.",
      "Your host will help me grade, but I may need one of you to step up as well.",
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Hm? You want to know where the other students are? They're preparing and studying for the showcase of course!"
    image={headmaster}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Now before you are officially enrolled, every witch/mage/wizards needs two things! First is a wand!"
    image={headmaster}
    answers={[]}
    isGlobal={true}
  />,
  wandMakingRules,
  <NormalDialogue
    text="I can already tell who the good students are..."
    image={headmaster}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Next! You will summon your familiars! I just need to find the scriptures... hold on a moment..."
    image={headmaster}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Psst... hey new students! Before you guys fail all your classes, you should know something."
    image={cheaterWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Now that you have your wands, you can use chaos magic to cheat! If the deities of chaos are in your favour, you'll gain an advantage!"
    image={cheaterWitch}
    isGlobal={true}
  />,
  cheatingRules,
  <NormalDialogue
    image={cheaterWitch}
    text="Good luck! You'll need it..."
    isGlobal={true}
  />,
  <NormalDialogue
    text="Found them! Now get to it!"
    image={headmaster}
    answers={[]}
    isGlobal={true}
  />,
  familiarSummoningRules,
  <NormalDialogue
    text={[
      `You are now officially enrolled! Time to get to your first class! I will teleport you there.`,
      `(When your host is ready, write "Teleport" to continue)`,
    ]}
    image={headmaster}
    answers={["Teleport"]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Welcome students to your necromancy class... I will show you the art of communing with and controlling the dead."
    image={necromancer}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="First, you must learn summoning. Everyone gather around the gate to the world of lost souls."
    image={necromancer}
    isGlobal={true}
  />,
  summonSoulsRules,
  <NormalDialogue
    text="Breathe life into the souls to bring them to our plane."
    image={necromancer}
    isGlobal={true}
  />,
  ghostCreationRules,
  <GhostDialogue
    text="Hellloooooo????"
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Now you must form a connection with the spirit."
    image={necromancer}
    isGlobal={true}
  />,
  ghostConnectionRules,
  <NormalDialogue
    text="Now you are bound to the spirits. In your time of need, they may come to your aid..."
    image={necromancer}
    isGlobal={true}
  />,
  <GhostDialogue
    text={["where is Prudy?", "our friend Prudy?", "our enemy Prudy?"]}
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="...sometimes ghosts speak in riddles..."
    image={necromancer}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "When you are ready, I will teleport you to your next class",
      'Write "Next" when your host is ready',
    ]}
    image={necromancer}
    isGlobal={true}
    answers={["Next"]}
  />,
  <GhostDialogue
    text={["she has left us for alive", "she will leave you for dead"]}
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Welcome my dears to shapeshifting class!"
    image={shapeshifting_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Oh! Some of you already seem to be experts of the craft! I think you deserve some bonus points!"
    image={shapeshifting_witch}
    isGlobal={true}
  />,
  shapeshiftingJudging,
  <NormalDialogue
    text="Not bad... but there are always new tricks you can learn!"
    image={shapeshifting_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Why don't you decide what you should shift into?"
    image={shapeshifting_witch}
    isGlobal={true}
  />,
  shapeshiftingPractice,
  <NormalDialogue
    text="Well done, everyone! Though those were certainly some interesting choices..."
    image={shapeshifting_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "I will teleport you to your next class when you're ready!",
      'Write "Next" to go to your next class',
    ]}
    image={shapeshifting_witch}
    isGlobal={true}
    answers={["Next"]}
  />,
  <NormalDialogue
    text="Hm... the next ingredient is... no, it mustn't be that... mustn't be..."
    image={potionsWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Oh, class time already? Well, you already know what to do, I left the instructions on the potions table if you forgot..."
    image={potionsWitch}
    isGlobal={true}
  />,
  <NormalDialogue text="Your teacher doesn't seem to notice that you're not her regular students... well I'm sure you can figure it out!" />,
  potionMaking,
  <NormalDialogue
    text="Hm? You're done? Alright, then off to your next class..."
    image={potionsWitch}
    isGlobal={true}
  />,
  <NormalDialogue text="..." image={potionsWitch} isGlobal={true} />,
  <NormalDialogue
    text="You can't teleport on your own? Just drink the teleportation potion!"
    image={potionsWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text='Everyone take 3 penalties. When your host is ready, write "Next"'
    isGlobal={true}
    answers={["Next"]}
  />,
  <NormalDialogue
    text="Welcome to flying class!"
    image={broomWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Today, we'll be having a race!"
    image={broomWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Your next class is... oh dear."
    image={broomWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Best to recharge before your next class! You'll need your wits for that old witch's class!"
    image={broomWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text='Take a break if you need. When everyone is ready, write "Next"'
    isGlobal={true}
    answers={["Next"]}
  />,
  <NormalDialogue
    text="You are late. As was foretold..."
    image={divinationWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Divination class is not like those frivolous other classes. If you do not work hard, you will be sent straight to the dungeon!"
    image={divinationWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Everyone grab a sheet of paper and find a place to write. Make sure you can see no one else's page. I will NOT tolerate cheating!"
    image={divinationWitch}
    isGlobal={true}
  />,
  <NormalDialogue text="Seriously, don't cheat." isGlobal={true} />,
  <NormalDialogue
    text="I will now beam an image into your brains."
    image={divinationWitch}
    isGlobal={true}
  />,
  <NormalDialogue text="..." image={divinationWitch} isGlobal={true} />,
  <NormalDialogue
    text="The image has been sent. If you did not receive it, you are a failure and will be sent to the dungeon."
    image={divinationWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Psst... if you didn't get the image, don't worry! She always gives new students the same image: the headless horseman"
    image={cheaterWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Now, transfer the beamed image onto the page in front of you. Make sure not to sign your name or imprint your identity in any way on these pages."
    image={divinationWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="You have three minutes to draw. When you are done, anonymously hand in your drawings to the host."
    isGlobal={true}
  />,
  <NormalDialogue
    text="Now, comes the real test of your divination skills!"
    image={divinationWitch}
    isGlobal={true}
  />,
  divinationGame,
  <NormalDialogue
    text="What a pitiful excuse for divination... I would send you to the dungeons but unfortunately I foresee a great calamity if I do... Alas."
    image={divinationWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Now be off with you!"
    image={divinationWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={`Write "Next" when you're ready for your next class`}
    isGlobal={true}
    answers={["Next"]}
  />,
  <NormalDialogue
    text="Welcome to your offensive spells class! Now that you know the basics of magic, it's time you learned how to fight!"
    image={duelWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text="To cast a spell, there are three things to focus on when casting a spell; the incantation, the form, and the spirit."
    image={duelWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      'The fist spell is "Capax Infiniti". That is the incantation.', // capable of infinity
      "The form of the spell is an infinity symbol. Start in the middle of the infinity, trace it out with you wand, and finish by thrusting it forward",
      "If you want the spell to work, you must put energy into it, otherwise it will fail.",
      "Let us practice all together.",
    ]}
    image={duelWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      'The second spell is "Nox Cruenta".', // bloody night
      "The form of the spell is a zig zag from top to bottom, ending with a thrust forward.",
      "Let us practice all together",
    ]}
    image={duelWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      'The third spell is "Undam Mortis"', // wave of death
      "The form of the spell is a spiral from the outside in, ending with a thrust forward.",
      "Let us practice all together",
    ]}
    image={duelWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Now that you know the spells, it's time to duel!"]}
    image={duelWitch}
    isGlobal={true}
  />,
  magicDuelGame,
  <NormalDialogue
    text={["Marvelous! You are all ready now."]}
    image={duelWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={['If you feel ready, write "Ready"']} // TODO - maybe I'll make this a hidden code
    isGlobal={true}
    answers={["Ready"]}
  />,
  <NormalDialogue
    text={["Welcome back students, how have your classes been so far?"]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "Now that you are fully trained, you are ready to participate in the Magic Showcase! Just in time, too, because it is about to begin!",
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["THE GREAT COUNCIL OF MAGICAL MODERATORS HAVE ARRIVED"]}
    image={wizard}
    audio={wizardArrival}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `I am the Wizard Wysiwyg! And I am the Guardian of the Staff of ${staffName} until the Wizard is decided!`,
    ]} // google translate of Awesome
    image={wizard}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "While I was introducing myself, it seems that the rest of the schools have arrived! Everyone gather the students who will be participating here!",
    ]}
    image={wizard}
    isGlobal={true}
  />,
  <NormalDialogue text={[`We're ready!`]} image={headmaster} isGlobal={true} />,
  <NormalDialogue
    text={["...these are your competing students? Where are the rest of them?"]}
    image={wizard}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Ahem, yes, well... these students are our top students! All other students are studying!`,
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["The other students aren't going to watch the competition?"]}
    image={wizard}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`They have to study!`]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Hm... if you say so. I will check on the other schools."]}
    image={wizard}
    isGlobal={true}
  />,
  <NormalDialogue text={[`Phew...`]} image={headmaster} isGlobal={true} />,
  <NormalDialogue
    text={[
      `What's that look for? Aren't you honoured to be chosen to compete?`,
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Perhaps the students deserve an explanation...`]}
    image={shapeshifting_witch}
    isGlobal={true}
    //audio={witches2}
  />,
  <NormalDialogue
    text={[`*sigh* I suppose you're right...`]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "The truth is, someone has cursed our students. All of their energy is being syphoned elsewhere, leaving them all in a deep slumber. It is an advanced curse that not even our expert on dark magic can lift.",
      "With the power of my amulet and the staff, we might be able to break the curse through brute force magic.",
      `If you hadn't passed your classes, we would have had to forfeit the competition and try to break the curse another way.`,
    ]}
    image={headmaster}
    isGlobal={true}
    audio={halloweenGroove}
  />,
  <NormalDialogue
    text={[
      "Since you're all here, best make the most of it!",
      `Now, where is the headmaster of ${otherSchoolName}... we have some beef we need to settle...`,
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue text={["Here I am!"]} image={normal_witch} isGlobal={true} />,
  <NormalDialogue
    text={["Elise? What are you doing here?"]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Ah, you must have enrolled at ${otherSchoolName} after being expelled.`,
      `I suppose it's good to see you thriving at your new school, even though it's second rate compared to ours.`,
      `Now where is your headmaster?`,
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Actually, I am the headmaster now."]}
    image={normal_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Enough jokes. I'm looking for Headmaster Gertrude.`]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Look at me.", "Look at me!", "I am the headmaster now."]}
    image={happy_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Where is Gertrude?`]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "She's taking a nap. In fact, all the other teachers were so tired that I had to step up and take on this role.",
    ]}
    image={happy_eyes_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`...Elise, what did you do?`]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`That's not me...`]}
    image={cheaterWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Who said that?`]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `My body is possessed by a witch who wants the staff!`,
      `She's the one who cursed the students. She wanted to make sure our school lost so that she would win.`,
    ]}
    image={cheaterWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `I've been floating around as a spirit trying to help you guys cheat to make sure you could win the tournament and get the staff!`,
    ]}
    image={cheaterWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `You decide that the best course of action was training these rookie witches to win a tournament against the best witches of the other schools to try to win the staff?`,
      "Instead of letting us know who was responsible so we could deal with it properly?",
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Um... yeah?`]}
    image={cheaterWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Unbelievable... there's a reason why you were expelled..."]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "I believe she was expelled for trying to sacrifice other students to summon a demon.",
    ]}
    image={broomWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Well, that too."]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `I wasn't actually gonna kill them... just wanted to scare them a little...`,
      "But you expelled me before I could explain anything!",
    ]}
    image={cheaterWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "Someone go fetch the Council of Moderators so we can figure out what to do.",
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue text={["On it!"]} image={broomWitch} isGlobal={true} />,
  <NormalDialogue
    text={["Now, explain exactly what happened."]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "I was packing up my stuff after I got expelled, but then a ghost told me they could help me.",
      "They said they were wrongly expelled like me, for the same reason, and they could help me get revenge if I let them borrow my body for a bit.",
      "We did the switch then they cast the sleeping curse, which I thought was a really funny prank, but then they refused to lift the curse or give me my body back!",
    ]}
    image={cheaterWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "We've never had a student that good at curses... Unless... It couldn't be...",
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Why hasn't the showcase started? Shouldn't we begin the duels?"]}
    image={happy_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "We are having... technical difficulties.",
      "Most of our student body has been cursed. We're seeing if anyone can lift it.",
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["It's too bad our students won't be able to go against your best."]}
    image={happy_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "Yes... it's a shame our old teacher of dark magic isn't still around. I'm certain she would know how to break the curse.",
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["So now you miss her?"]}
    image={normal_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "You seem to be familiar with who I'm talking about. I was under the impression this was before your time.",
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "I only heard the stories. How you killed a fellow teacher because you disagreed with her teaching methods.",
    ]}
    image={angry_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["I heard that there's an issue? What's going on?"]}
    image={wizard}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `A malevolent spirit has possessed a student and taken over ${otherSchoolName} to get the staff.`,
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["That's ridiculous. She's just afraid of losing to me."]}
    image={happy_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "Well, you do seem rather young to be a headmaster...",
      "I suppose we'll have to postpone the showcase until we get this figured out.",
    ]}
    image={wizard}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["NO!"]}
    image={angry_witch}
    isGlobal={true}
    audio={newHalloween}
  />,
  <NormalDialogue text={["OOF"]} image={wizard} isGlobal={true} />,
  <NormalDialogue
    text={[`She has the staff!`]}
    image={broomWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Come here, my dear ${headmasterName}`]}
    image={possessed_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`We can't let her get my amulet! I'll teleport us somewhere safe!`]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`This should buy us some times...`]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Did you really kill her?`]}
    image={cheaterWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Not exactly... She had been using dark magic to get stronger by sacrificing misbehaving students.`,
      `I sealed away the part of her corrupted by dark magic in my amulet, but by then she had been entirely consumed by darkness and there was nothing left.`,
      "Or so we thought... it seems a shred of her remained in spirit form.",
    ]}
    image={headmaster}
    audio={halloweenHex}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `It's a good thing you clean out your amulet every few months! She has no way of getting her power back!`,
    ]}
    image={broomWitch}
    isGlobal={true}
  />,
  <NormalDialogue text={[`...`]} image={headmaster} isGlobal={true} />,
  <NormalDialogue
    text={[`You cleaned it out right?`]}
    image={broomWitch}
    isGlobal={true}
  />,
  <NormalDialogue text={[`...`]} image={headmaster} isGlobal={true} />,
  <NormalDialogue
    text={[`When was the last time you cleaned it out?`]}
    image={broomWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Perhaps a few centuries ago... I've just been so busy...`]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue text={[`bro...`]} image={broomWitchScared} isGlobal={true} />,
  <NormalDialogue
    text={[
      `Anyways! We need to break the contract you made with her so she'll lose her physical form and her power!`,
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`But it's unbreakable...`]}
    image={cheaterWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`You cannot hide from me!`]}
    image={possessed_witch}
    isGlobal={true}
  />,
  <NormalDialogue text={[`Quick!`]} image={headmaster} isGlobal={true} />,
  <NormalDialogue
    text={[`Okay, here it is...`]}
    image={cheaterWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`...this is the worst contract I've ever seen. I'll break it now.`]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Don't even try!`]}
    image={angry_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Ack! My amulet! It's cracked!`]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Hey I have my body back!`]}
    image={happy_witch}
    isGlobal={true}
  />,
  <NormalDialogue text={[`...`]} image={prudence} isGlobal={true} />,
  <NormalDialogue
    text={[
      `I don't need your body anymore, I can feel my power slowly coming back to me!`,
    ]}
    image={prudence}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `How dare you lock me away? I was going to be the greatest witch in all of history!`,
    ]}
    image={prudence}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`No great witch would murder their students!`]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`I only sacrificed the ones who deserved it.`]}
    image={prudence}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`You once sent a student to "detention" for sneezing in your class`]}
    image={broomWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`As I said, the ones who deserved it.`]}
    image={prudence}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`Now, to destroy your amulet, once and for all!`]}
    image={prudence}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Prudence, stop! If you destroy the amulet, all the other evil creatures I sealed away will escape too!`,
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Serves you right! I will regain my power and watch as the world burns because of your mistakes!`,
    ]}
    image={prudence}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[`She's gone mad...`]}
    image={broomWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `Teachers! Gather around the amulet, we'll need all our power combined to seal it!`,
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      `You! Rookie students! Defend us against Prudence's attacks and banish the creatures trying to get out!`,
      "The fate of the world depends on you!",
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue text={[`No pressure`]} image={broomWitch} isGlobal={true} />,
  <NormalDialogue
    text={[
      "Attach a long distance attack charm to your wands. Make sure to have the spirits you summoned near you so they can defend you.",
      "Capax Infiniti: infinity - defeats creatures of the dead",
      "Nox Cruenta: zig zag - defeats creatures peering in",
      "Undam Mortis: swirl - defeats flames of darkness",
      "Good luck!",
    ]}
    stopAudio
    answers={["spellattack"]}
  />,
  // fight goes here
  <NormalDialogue
    text={[`YOU WILL REGRET THIS`]}
    image={prudence}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Good riddance."]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Can I come back to school now?"]}
    image={normal_witch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "After you cursed the entire student body and almost caused the end of the world?",
    ]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue text={["Ya"]} image={normal_witch} isGlobal={true} />,
  <NormalDialogue text={["Sure why not"]} image={headmaster} isGlobal={true} />,
  <NormalDialogue text={["Yippee!"]} image={happy_witch} isGlobal={true} />,
  <NormalDialogue text={[""]} image={broomWitchExasperated} isGlobal={true} />,
  <NormalDialogue
    text={["CLEAN OUT YOUR AMULET"]}
    image={broomWitch}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Yes, yes, I'll do it soon."]}
    image={headmaster}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["But more importantly..."]}
    image={headmaster}
    isGlobal={true}
  />,
  <BossBattle />,
  <NormalDialogue text="HAPPY HALLOWEEN!" image={endCard} isGlobal={true} />,
];

// TODO - all areas have same dialogue, depending on team, return different order (future task when needed)
export const getDialogue = (team: string) => {
  return dialogue2024;
};

export default getDialogue;
