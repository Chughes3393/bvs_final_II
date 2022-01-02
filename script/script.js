// stores all sonnets
const sonnets =
  ['Sonnet 18: Shall I compare thee to a summers day? Thou art more lovely and more temperate: Rough winds do shake the darling buds of May, And summer’s lease hath all too short a date: Sometime too hot the eye of heaven shines, And often is his gold complexion dimm’d; And every fair from fair sometime declines, By chance or nature’s changing course untrimm’d; But thy eternal summer shall not fade Nor lose possession of that fair thou owest; Nor shall Death brag thou wander’st in his shade, When in eternal lines to time thou growest: So long as men can breathe or eyes can see, So long lives this and this gives life to thee.',

    'Sonnet 30: When to the sessions of sweet silent thought I summon up remembrance of things past, I sigh the lack of many a thing I sought, And with old woes new wail my dear time’s waste: Then can I drown an eye, unused to flow, For precious friends hid in death’s dateless night, And weep afresh love’s long since cancell’d woe, And moan the expense of many a vanish’d sight: Then can I grieve at grievances foregone, And heavily from woe to woe tell o’er The sad account of fore-bemoaned moan, Which I new pay as if not paid before. But if the while I think on thee, dear friend, All losses are restor’d and sorrows end.',

    'Sonnet 129: The expense of spirit in a waste of shame Is lust in action: and till action, lust Is perjured, murderous, bloody, full of blame, Savage, extreme, rude, cruel, not to trust; Enjoyed no sooner but despised straight; Past reason hunted; and no sooner had, Past reason hated, as a swallowed bait, On purpose laid to make the taker mad. Mad in pursuit and in possession so; Had, having, and in quest to have extreme; A bliss in proof, and proved, a very woe; Before, a joy proposed; behind a dream. All this the world well knows; yet none knows well To shun the heaven that leads men to this hell.',

    'Sonnet 130: My mistress’ eyes are nothing like the sun; Coral is far more red, than her lips red: If snow be white, why then her breasts are dun; If hairs be wires, black wires grow on her head. I have seen roses damasked, red and white, But no such roses see I in her cheeks; And in some perfumes is there more delight Than in the breath that from my mistress reeks. I love to hear her speak, yet well I know That music hath a far more pleasing sound: I grant I never saw a goddess go, My mistress, when she walks, treads on the ground: And yet by heaven, I think my love as rare, As any she belied with false compare.',

    'Sonnet 73: That time of year thou mayst in me behold When yellow leaves, or none, or few, do hang Upon those boughs which shake against the cold, Bare ruined choirs, where late the sweet birds sang. In me thou see’st the twilight of such day As after sunset fadeth in the west; Which by and by black night doth take away, Death’s second self, that seals up all in rest. In me thou see’st the glowing of such fire, That on the ashes of his youth doth lie, As the death-bed, whereon it must expire, Consum’d with that which it was nourish’d by. This thou perceiv’st, which makes thy love more strong, To love that well, which thou must leave ere long.'];

// randomizes sonnets
const randomSonnet = Math.floor(Math.random() * sonnets.length)

// defines questions for purposes inside commenceDuel
const questions = [
  {
    question: "A?",
    answers: {
      a: "a",
      b: "b",
      c: "c",
      d: "d"
    }
  }
];

/* ========== DOM // Query Selectors ========== */

/* ID's */
const cont = document.getElementById('container');
const qCont = document.getElementById('question_container');
const indexQuestions = document.getElementById('question');
const answers = document.getElementById('answers');
const answerBtn1 = document.getElementById('a-btn-1');
const answerBtn2 = document.getElementById('a-btn-2');
const answerBtn3 = document.getElementById('a-btn-3');
const answerBtn4 = document.getElementById('a-btn-4');
const playingAgain = document.getElementById('play_again');
const againBtn = document.getElementById('play-again-btn');
const contStart = document.getElementById('control_start');
const startBtn = document.getElementById('start-btn');

/* Classes */
const btnGrid = document.getElementsByClassName('button_grid')
const btnClass = document.getElementsByClassName('btn')
const hidden = document.getElementsByClassName('hide')

// starts game
function commenceDuel() {

  // startBtn.classList.add('hide')
  answers.classList.remove('hide')

  console.group('Intro')
  console.log('Welcome to Bukowoski Vs. Shakespeare! Charles (Hank) Bukowski & William (Billy) Shakespeare could not be more different poets. For starters, they lived about 300 years apart, Shakespeare in Elizabethan England, Bukowski in California in the mid-20th century. Two, well Shakespeare is SHAKESPEARE. Name another poet (besides Dante or Homer) that even comes close to his style or ingenuity — You can’t. Charles Bukowski on the other hand is best known for his writings on alcohol and generally just being a gross old man. (For more information on his debauched lifestyle, just read any of his books.) But did you know that Bukowski and Shakespeare both liked to street fight? And since we can’t watch Shakespeare and Bukowski duke it out for poetic supremacy in the 21st century, we can use the internet to have them fight it out virtually, and poetically. But wait, Bukowski got too drunk and needs your help writing his poem to try and beat Shakespeare. That is you come in. Help Bukowski write his poem by answering questions 1-10. This will write a poem that you and Hank (mostly you) come up with. All Shakespeare is going to do is reach into his bag of Sonnets and randomly select one. Once both of these conditions are met, our referee (the editor) will select which poem he thinks is strongest. Strongest poem wins and the victor will take the top spot as The Best Poet In The Universe. Having a stronger poem than Shakespeare means that you and Bukowski (mostly you) are now the best Poets In The Universe. Failure to complete the answers or having a weaker poem than Shakespeare will make you lose.  If you win, have a great night and make sure you have a hangover cure in the waiting for the morning. If you lose, don’t come crying to me when Hank smashes up your car while blaring Liszt’s Totentanz! Good luck and don’t forget that Hank has a tire iron in his trunk and he knows how to use it!')
  console.groupEnd('Intro')
  // initializes variable
  let i = 0;
  // beginning prompt
  const y = window.prompt('Help out Hank will ya? Y or N?')
  // stores answers in array to display @ end + compare w randomSonnet
  let answerArray = [];
  // variables for answers defined below
  let z;
  let q;
  let w;
  let t;
  let v;
  let x;
  let m;
  let r;
  let p;
  let j;
  // if no input-- function does not run.
  if (y === "") {
    return;
  }
  if (y === "N") {
    // if N -- function does not run
    console.log('Game Over!')
    return;
  } else
    // this starts the game!
    if (y === 'Y') {
      while (i < questions.length) {
        console.group("HANK SAYS");
        console.log("Thank god kid, I'm real loaded and can't even type... I got some questions for ya to help us get going.")
        // prevents infinite loop
        break;
      }
      // initializes console group

      // first question!
      z = window.prompt('First off: how ya doing? Type "A" for alright, "B" for could be better"')
      if (z === "A") {
        // pushes to answerArray
        answerArray.push("WOKE UP FEELING FINE TODAY. THAT'S HOW I KNEW IT WAS GONNA TO BE A WILD ONE")

        console.log("What ya think you're better than me!")
      }
      if (z === "B") {

        console.log('well kid you know what they they -- misery loves company.')
        answerArray.push("WOKE UP FEELING HOW I FEEL EVERYDAY, LIKE A RUSTED OUT GUTTER IN AN ABONDONED L.A. MANSION")
      }
      if (z === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // second question
      q = window.prompt('Got a lover on your mind or are ya sane today? Type "A" if you have someone on your mind, or "B" if you are sane.')
      if (q === "A") {
        console.log("She got a number huh?")
        answerArray.push("& WITH A LOVER ON MY MIND IT WAS NO COINCIDENCE I WOKE UP WITH A LION IN MY BED")
      } if (q === "B") {
        console.log("I'm not calling you a liar but you're the only sane person on this planet.")
        answerArray.push("BUT WITH NOTHING ON MY MIND I JUST DRANK THE DAY AWAY")
      }
      if (q === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // third
      w = window.prompt("It's New Years Day. What did you do last night? Type 'A' if you went out and painted the town red, type 'B' if you were in bed by 9 because you ate too much spicy food.")
      if (w === "A") {
        console.log("Good for you kid. Why didn't you invite ol Hank?")
        answerArray.push("I THOUGHT I FELT SOMETHING FOLLOW ME HOME AFTER I BLEW UP BABY NEW YEAR")
      } if (w === "B") {
        console.log("Who taught you how to party? The nuns at Sunday School?")
        answerArray.push("I THOUGHT I FELT SOMETHING IN MY COLON AFTER I BLEW UP BABY NEW YEAR")
      }
      if (w === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // fourth
      t = window.prompt("Got any New Year Resolutions? Type 'A' for yes, 'B' for no.")
      if (t === "A") {
        console.log("What's the first one? Learning how to tie your velcro shoes?")
        answerArray.push("BUT IT LEFT EARLY AFTER STEALIN ALL MY CIGARETTES AND BEER")
      } if (t === "B") {
        console.log("What's the first one going to be? Learning how to tie your velcro shoes?")
        answerArray.push("BUT IT TURNED OUT TO BE THE HOT AIR OF FORGOTTEN DREAMS")
      }
      if (t === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // fifth
      v = window.prompt("How's your family? Type 'A' for good, 'B' for what family?.")
      if (v === "A") {
        console.log("Well tell your dad he still owes me fifty bucks")
        answerArray.push("OUTTA BEER - WALKED TO THE STORE AND THE CASHIER LOOKED LIKE A GIANT TICK")
      } if (v === "B") {
        console.log("Ah , I'm sorry kid, you can come live with Ol Hank if you ever need to.")
        answerArray.push("OUTTA BEER - STUMBLED TO THE STORE AND WAS ACCOSTED BY A GANG OF PLATYPUS'")
      }
      if (v === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // sixth
      x = window.prompt('Got yourself a job? type "A" for yes, "B" for no.')
      if (x === "A") {
        console.log("You know what they say about jobs...")
        answerArray.push("I THREW EM SOME MONEY LIKE I WAS A KENNEDY & MADE LIKE A TREE")
      } if (x === "B") {
        console.log("That's the one reasonable thing I've heard all day")
        answerArray.push("SO I RAN OUTTA THERE WITH WHAT I HAD")
      }
      if (x === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // seventh
      m = window.prompt("How's that workin out for ya? Type 'A' for good, 'B' for not so good.")
      if (m === "A") {
        console.log("yeah well whose your boss? I got some words for him")
        answerArray.push("NOW I'M RIGHT BACK WHERE I WAS LAST YEAR")
      } if (m === "B") {
        console.log("I could've told you that")
        answerArray.push("NO FUN - NOW I'M RIGHT BACK AT SQUARE ONE")
      }
      if (m === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // eighth
      r = window.prompt('What do you think of poetry readings? Type "A" if you hate them, type "B" if you really hate them.')
      if (r === "A") {
        console.log("me too")
        answerArray.push("WRITING POETRY COS I GOT NOTHIN ELSE GOING ON")
      } if (r === "B") {
        console.log("right on, you'll never see me at one.")
        answerArray.push("WRITING POETRY COS HOPEFULLY ONE DAY IT'LL BRING ME FAME AND FORTUNE")
      }
      if (r === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // ninth
      p = window.prompt('What do you think of Billy Shakespeare anyway? Type "A" if you think he is the best, "B" if you really dont care.')
      if (p === "A") {
        console.log("Come on now, have you ever read Stendahl?")
        answerArray.push("WISHING I WAS OL BILLY SHAKESPEARE")
      } if (p === "B") {
        console.log("me neither")
        answerArray.push("BURNING ALL MY BOOKS FOR WARMTH - SHAKESPEARE KEEPS MY COZIEST")
      }
      if (p === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // tenth
      j = window.prompt('You know Im a poet to kid, what do ya think of ol Hanks work? type "A" if you like it, "B" if you never read it.')
      if (j === "A") {
        console.log("atta boy")
        answerArray.push("BUT I'M JUST CHARLES HANK BUKOWKSI, BEST POET IN THE UNIVERSE")
      } if (j === "B") {
        console.log("we better win kid or I'm gonna smash up your car")
        answerArray.push("BUT I'M JUST CHARLES HANK BUKOWSKI, WORST POET IN THE UNIVERSE")
      }
      if (j === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // ends console group
      console.groupEnd("Hank SAYS");

    }

  console.log("Nice work. This is Shakespeare's Sonnet:")
  // gives you a randomized sonnet
  console.log(sonnets[randomSonnet])
  // gives you your answer array
  console.log(`& This is your poem:`)
  console.log(`${answerArray[0]}`)
  console.log(`${answerArray[1]}`)
  console.log(`${answerArray[2]}`)
  console.log(`${answerArray[3]}`)
  console.log(`${answerArray[4]}`)
  console.log(`${answerArray[5]}`)
  console.log(`${answerArray[6]}`)
  console.log(`${answerArray[7]}`)
  console.log(`${answerArray[8]}`)
  console.log(`${answerArray[9]}`)

  // CAN REUSE THESE VARIABLES TO COMPARE AND GET WINNER 
  let erCountSonnet = 0
  let estCountSonnet = 0
  let erCountAnswers = 0
  let estCountAnswers = 0

  // function that decides which poem is strongest, taking parameters of string and word

  function editorDecides(string, word) {
    // use split method to search strings for specific characters
    return string.split(word).length - 1;

  }
  // calling the search on the variable arrays -- answerArray is changed to a string
  erCountSonnet = editorDecides(sonnets[randomSonnet], 'er')
  estCountSonnet = editorDecides(sonnets[randomSonnet], 'est')
  erCountAnswers = editorDecides(answerArray.toString(), 'ER')
  estCountAnswers = editorDecides(answerArray.toString(), 'EST')

  // console logging these bad bois
  console.log("estCount in Shakespeare's sonnet", estCountSonnet)
  console.log("erCount in Shakespeare's sonnet", erCountSonnet)
  console.log('estCount in your poem', estCountAnswers)
  console.log('erCount in your poem', erCountAnswers)

  // conditional statements to decide who wins and loses 

  if (erCountSonnet > erCountAnswers && estCountSonnet > estCountAnswers) {
    console.log('Shakespeare wins!')
  }
  else if (erCountSonnet > erCountAnswers + estCountAnswers) {
    console.log('Shakespeare wins!')
  }
  else if (estCountSonnet > erCountAnswers + estCountAnswers) {
    console.log('Shakespeare wins!')
  }
  else if (erCountSonnet > erCountAnswers && estCountAnswers === estCountSonnet) {
    console.log('Shakespeare wins!')
  }
  else if (estCountSonnet > estCountAnswers && erCountAnswers === erCountSonnet) {
    console.log('Shakespeare wins!')
  }
  else if (erCountAnswers > erCountSonnet && estCountAnswers > estCountSonnet) {
    console.log('You win!')
  }
  else if (erCountAnswers > erCountSonnet && estCountAnswers === estCountSonnet) {
    console.log('You Win!')
  }
  else if (estCountAnswers > estCountSonnet && erCountAnswers === erCountSonnet) {
    console.log('You Win!')
  }
  else if (erCountAnswers > erCountSonnet + estCountSonnet) {
    console.log('You win!')
  }
  else if (estCountAnswers > erCountSonnet + estCountSonnet) {
    console.log('You win!')
  }
  else {
    console.log('Tie. Play again.')
  }

}

// calls commenceDuel function
commenceDuel()

// event listeners VVV 
// START AND PLAY AGAIN BUTTONS
startBtn.addEventListener('click', commenceDuel);
againBtn.addEventListener('click', commenceDuel);

// ANSWER BUTTONS 

// answerBtn1.addEventListener('click', );
// answerBtn2.addEventListener('click', );
// answerBtn3.addEventListener('click', );
// answerBtn4.addEventListener('click', );

