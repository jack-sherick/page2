import { Helmet } from "react-helmet-async";

export default function Root() {
    return (
    <html lang="en">
      <head>
      <Helmet>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.14.2/matter.min.js'></script>
          <script src="/src/routes/background.js"></script>
        </Helmet>

      </head>

      <body>
      <div class="fore">
        <nav class="navbar navbar-expand-lg fixed-top bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">My Page</a>

          <button class="navbar-toggler" type="button" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="https://github.com/jack-sherick">My Git</a>
              <a class="nav-link" href="https://github.com/jack-sherick/page2">Page Repo</a>
              <a class="nav-link" href="./src/top-down/start.html">Fun Project</a>
              <a class="nav-link">Test</a>
            </div>
          </div>
        </div>
      </nav>

      <h1>About Me</h1>
      <p>Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.</p>

      </div>
      </body>
    </html>
    );
  }