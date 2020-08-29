<template>
  <div class="container content-box">
    <NuxtChild :show-footer="false" />
    <h1 class="title">
      <Greeting
        :day-time="dayTime"
        :language="language"
      >
      </Greeting>
    </h1>
    <h2 class="subtitle">
      I’m Diogo, a Front End Developer that loves to <SpecialLink to="https://github.com/diogobcondeco">build</SpecialLink> things.<br>
    </h2>
    <p class="paragraph">
      Passionate about <SpecialLink to="https://vuejs.org/">Vue</SpecialLink> & <SpecialLink to="https://reactjs.org/">React</SpecialLink>.
    </p>
    <p class="paragraph">
      Goals of mastering <SpecialLink to="https://vuejs.org/">Vue</SpecialLink> & contributing to it.
    </p>
    <p class="paragraph">
      Dreaming about traveling the 🌍 while 💻 remotely.
    </p>
    <p class="paragraph">
      Lover of 🍣🍔🍕✈🚐.
    </p>
    <p class="paragraph">
      You can follow me on <SpecialLink to="https://twitter.com/diogobcondeco">Twitter</SpecialLink>, <SpecialLink to="https://github.com/diogobcondeco">GitHub</SpecialLink> & <SpecialLink to="https://www.linkedin.com/in/diogobcondeco/">LinkedIn</SpecialLink>.
    </p>
    <a
      href="mailto:diogobcondeco@gmail.com"
      class="paragraph mail-link"
    >
      ↳ Talk to me.
    </a>
  </div>
</template>

<script>
import SpecialLink from '~/components/Link'
import Greeting from '~/components/Greeting'

const EARLY_MORNING = 'EARLY_MORNING'
const MORNING = 'MORNING'
const AFTERNOON = 'AFTERNOON'
const EVENING = 'EVENING'

function getDayTime () {
  const hourNow = new Date(Date.now()).getHours()

  switch (true) {
    case (hourNow >= 5 && hourNow < 7):
      return EARLY_MORNING
    case (hourNow >= 12 && hourNow < 17):
      return AFTERNOON
    case (hourNow >= 17 || hourNow < 5):
      return EVENING
    default:
      return MORNING
  }
}

(function() {
  window.__onThemeChange = function() {};
  function setTheme(newTheme) {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.body.setAttribute('data-theme', newTheme);
    window.__onThemeChange(newTheme);
  }

  var preferredTheme;
  try {
    preferredTheme = localStorage.getItem('theme');
  } catch (err) { }

  if (!preferredTheme) {
    preferredTheme = getDayTime() === EVENING
      ? 'dark'
      : 'light'
  }

  window.__setPreferredTheme = function(newTheme) {
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {}
  }

  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkQuery.addListener(function(e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light')
  });

  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
})();

export default {
  components: { SpecialLink, Greeting },
  metaInfo: {
    title: 'About',
    meta: [
      {
        name: 'description',
        content: 'Hi, I’m Diogo and I’m a Junior Front End Developer that loves to build things.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Diogo Condêço',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Diogo Condêço',
      },
      {
        key: 'og:url',
        name: 'og:url',
        content: 'https://diogobcondeco.com/',
      },
      {
        key: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        key: 'twitter:creator',
        name: 'twitter:creator',
        content: '@diogobcondeco',
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Hi, I’m Diogo and I’m a Junior Front End Developer that loves to build things.',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Hi, I’m Diogo and I’m a Junior Front End Developer that loves to build things.',
      },
    ]
  },
  data () {
    return {
      dayTime: MORNING,
      language: navigator.language.substr(0, 2)
    }
  },
  beforeCreate () {
    setTimeout(() => {
      this.dayTime = getDayTime()
      this.language = navigator.language.substr(0, 2)
    }, 2000)
  }
}
</script>

<style lang="scss">
.container {
  min-height: calc(100vh - 100px);
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;

  a:hover {
    opacity: 1;
  }
}

.title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 30px;
}

.subtitle {
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 20px;
  margin-top: 0;
  line-height: 2.25rem;
  max-width: 550px;
}

.paragraph {
 	font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1.1rem;
  margin-bottom: 20px;
  max-width: 750px;
}

@media only screen and (min-width: 600px)  {
  .container {
    min-height: calc(100vh - 200px);
  }

  .title {
    font-size: 2.4rem;
  }

  .subtitle {
    font-size: 1.8rem;
    margin-bottom: 30px;
    margin-top: 0;
    line-height: 2.4rem;
  }

  .paragraph {
    font-size: 1.4rem;
    margin-bottom: 30px;
  }

  .paragraph-small {
    font-size: 0.8rem;
  }
}

a.mail-link {
  display: inline-block;
  text-decoration: none;
  color: var(--body-color, #444a51);
}

.resize-enter-active, .resize-leave-active {
  transition: max-height .5s, opacity .4s;
  max-height: 600px;
}
.resize-enter, .resize-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
