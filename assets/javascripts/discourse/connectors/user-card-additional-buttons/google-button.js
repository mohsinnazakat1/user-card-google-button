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

    const url = `https://www.google.com/current_user/${this.loggedInUsername}/target_user/${this.targetUsername}`;
    window.open(url, "_blank", "noopener");
  }

  @action
  goToTwitter() {
    if (!this.loggedInUsername || !this.targetUsername) return;

    const url = `https://www.twitter.com/current_user/${this.loggedInUsername}/target_user/${this.targetUsername}`;
    window.open(url, "_blank", "noopener");
  }
}
