import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class extends Component {
  @action
  goToGoogle() {
    window.open("https://www.google.com", "_blank", "noopener");
  }

  @action
  goToTwitter() {
    window.open("https://www.twitter.com", "_blank", "noopener");
  }
}
