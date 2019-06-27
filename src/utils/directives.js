import Vue from 'vue';

/**
 * Input directive to allow only numeric characters and comma's (but only one)
 * to be typed.
 */
Vue.directive(
  'focus',
  {
    inserted(el) {
      el.focus();
    },
  },
);

Vue.directive(
  'numbersOnly',
  {
    bind(el) {
      el.addEventListener(
        'keydown',
        (e) => {
          const whiteListedKeyCodes = [
            KeyCodes.BACKSPACE,
            KeyCodes.TAB,
            KeyCodes.ENTER,
            KeyCodes.ESC,
            KeyCodes.ARROW_LEFT,
            KeyCodes.ARROW_RIGHT,
            KeyCodes.DEL,
          ];

          const { key, keyCode } = e;

          if (
            whiteListedKeyCodes.indexOf(keyCode) === -1
            && !isNumeric(key)
          ) {
            e.preventDefault();
          }
        },
      );
    },
  },
);
