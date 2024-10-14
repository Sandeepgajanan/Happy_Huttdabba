const tl = gsap.timeline();
const chatText = document.querySelector(".hbd-chatbox .chat-text");
const message = "Happy huttadabba, khushi khushi yagiru yavattu...";
let index = 0;

function typeChatMessage() {
  chatText.textContent = "";
  index = 0;
  function typeNextLetter() {
    if (index < message.length) {
      chatText.textContent += message.charAt(index);
      index++;
      setTimeout(typeNextLetter, 100);
    } else {
      tl.resume(); 
    }
  }
  typeNextLetter();
}

tl.to(".text1", { duration: 1.3, opacity: 1, ease: "power3.out" })
  .to(".text1", { opacity: 0, duration: 1.3 })
  .to(".text2", { duration: 1.3, opacity: 1, ease: "power3.out" })
  .to(".text2", { opacity: 0, duration: 1.3 })
  .to(".hbd-chatbox", { opacity: 1, duration: 1})
  .call(typeChatMessage)
  .addPause() 
  .to(".hbd-chatbox", { opacity: 0, duration: 0.2 })
  .to(".dp", {
    opacity: 1,
    scale: 1.2,
    duration: 1.7,
    ease: "back.out(1.7)",
  })
  .to(".wish-hbd", {
    opacity: 1,
    scale: 1.5,
    duration: 1.5,
    ease: "bounce.out",
  })
  .to(".dp", { opacity: 0, duration: 1 })
  .to(".wish-hbd", { opacity: 0, duration: 1 })
  .to(".finaltext", {
    opacity: 1,
    duration: 2,
    ease: "power3.out",
  })
  .to(".finaltext", {
    opacity: 0,
    duration: 2,
  })
  .to(".finalgift", {
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
  });
