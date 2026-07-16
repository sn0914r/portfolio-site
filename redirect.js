const REDIRECT_SITE = "https://avaitor-bot-vishnu.vercel.app";

const redirect = (show = false) => {
  if (show) {
    window.location.href = REDIRECT_SITE;
  }
};

redirect(true);
