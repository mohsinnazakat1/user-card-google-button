import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class extends Component {
  @service currentUser;

  get loggedInUsername() {
    return this.currentUser?.username;
  }

  get targetUsername() {
    return this.args.user?.username;
  }

  @action
  goToGoogle() {
    if (!this.loggedInUsername || !this.targetUsername) return;

    const url = `https://www.google.com/${this.loggedInUsername}/${this.targetUsername}`;
    window.open(url, "_blank", "noopener");
  }

  @action
  goToTwitter() {
    if (!this.loggedInUsername || !this.targetUsername) return;

    const url = `https://www.twitter.com/${this.loggedInUsername}/${this.targetUsername}`;
    window.open(url, "_blank", "noopener");
  }
}
