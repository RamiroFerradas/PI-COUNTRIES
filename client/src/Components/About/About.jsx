import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div>
      <aside class="profile-card" id="test">
        <header>
          <a href="https://tutsplus.com">
            <img src="http://fractalink.com/works/contest/irfan/opt_logo.png" />
          </a>

          <h1>Irfan Khan</h1>

          <h2>Ace Developer</h2>
        </header>

        <div class="profile-bio">
          <p>
            <br />
          </p>
        </div>

        <ul class="profile-social-links">
          <li>
            <a href="https://twitter.com/tutsplus">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
            </a>
          </li>

          <li>
            <a href="https://envato.com">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" />
            </a>
          </li>

          <li>
            <a href="https://codepen.io/tutsplus">
              <img src="http://fractalink.com/works/contest/irfan/codepen_icon.png" />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
