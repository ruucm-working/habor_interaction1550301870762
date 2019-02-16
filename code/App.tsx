import { Data, animate, Override, Animatable } from "framer";

export const sleep = sec => {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
};

const data = Data({
  myMoveleft01: Animatable(170),
  myMovetop01: Animatable(345),
  myOpacity01: Animatable(0),

  myMoveright02: Animatable(175),
  myMovetop02: Animatable(363),
  myOpacity02: Animatable(0),

  myMoveleft03: Animatable(373),
  myMovebottom03: Animatable(359),
  myOpacity03: Animatable(0),

  squareScale: Animatable(1),
  myBackground: Animatable("#BDBDBD")
});

export const myMove01: Override = () => {
  return {
    left: data.myMoveleft01,
    top: data.myMovetop01,
    opacity: data.myOpacity01
  };
};

export const myMove02: Override = () => {
  return {
    right: data.myMoveright02,
    top: data.myMovetop02,
    opacity: data.myOpacity02
  };
};

export const myMove03: Override = () => {
  return {
    left: data.myMoveleft03,
    bottom: data.myMovebottom03,
    opacity: data.myOpacity03
  };
};

export const Square01: Override = () => {
  return {
    background: data.myBackground,
    scale: data.squareScale,
    async onMouseEnter() {
      animate.bezier(data.myBackground, "#4265FF", {
        duration: 0.01
      });
      animate.spring(data.squareScale, 1.13, {
        duration: 0.55
      });

      await sleep(0.2);

      animate.spring(data.myMoveleft01, 70, {
        duration: 0.25,
        tension: 300,
        friction: 500
      });
      animate.spring(data.myMovetop01, 245, {
        duration: 0.25,
        tension: 300,
        friction: 100
      });
      animate.spring(data.myOpacity01, 1, {
        duration: 0.45,
        tension: 100,
        friction: 1000
      });

      await sleep(0.1);

      animate.spring(data.myMoveright02, 75, {
        duration: 0.32,
        tension: 300,
        friction: 500
      });
      animate.spring(data.myMovetop02, 262, {
        duration: 0.32,
        tension: 300,
        friction: 100
      });
      animate.spring(data.myOpacity02, 1, {
        duration: 0.32,
        tension: 100,
        friction: 1000
      });
      await sleep(0.15);

      animate.spring(data.myMoveleft03, 273, {
        duration: 0.32,
        tension: 500,
        friction: 500
      });
      animate.spring(data.myMovebottom03, 259, {
        duration: 0.32,
        tension: 300,
        friction: 100
      });
      animate.spring(data.myOpacity03, 1, {
        duration: 0.35,
        tension: 100,
        friction: 1000
      });
    }
  };
};
