const axios = require('axios');

module.exports = {
  async afterCreate(event) {
    await dispatchGithub();
  },
  async afterUpdate(event) {
    await dispatchGithub();
  },
  async afterDelete(event) {
    await dispatchGithub();
  },
};

const dispatchGithub = async () => {
  try {
      await axios.post(
        `${process.env.GITHUB_GATSBY_REPO_URL}/dispatches`,
        { event_type: "created" },
        {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json',
            "Content-Type": "application/json",
          }
        }
      );
    } catch (error) {
      console.log('problem dispatching build trigger', error);
    }
}