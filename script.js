const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Black Summoner - épisode 8 VOSTFR",
      description: "Vous regardez",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/30c52b8f481041c3e629bbf67c90811e.jpe",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m117.syncusercontent.com/mfs-60:3fd9d9197f396492c7418977238535a6=============================/p/Black%20Summoner%208.mp4?allowdd=0&datakey=BC1oQOjJCx7tK30ERSJjpW37p5mprSwBMwRFWAxDXuxTFajnEZPase3da1tDuhAuPklAelalTRroPyHQBiaNihsRQ/3GLQcrcaL8DzHgva7vGNYxnewjt5U3AiZkKChKvYSD/FhAbqib+M8hVWTl2kGuxDlRjvh2LrUcPPn9KdMdomyf/fJoHQYXEQUpR6VR0z70C1cPFVU5Am8MdaW6irPJCub9bNZYDipAeUAyA/Xf+hzFtK1e2CLfuqcAsIerDZtfViDuoqHA/rprneoQ0Wf+tAkEjNCBIyxvJyQMDKgv+4ILCWbSOJr4TDAORl4AaApE3ABIFfhEsjYiw87PZw&engine=ln-2.3.7.3&errurl=IXpGlbatkqsktBE0K+4o/YvFriILxrsyx0qeWyd8YbNAvrMisVGfUsKhYlbyxJQm/UZmXfuGV9d7hhRpON1vVjt3Esiv7lX4XZPnFJYcmcuj+3XwJkXzPlSoPK1cx/yDuOwiXrV9ioY4IBzxobHSE35vVyIGG1OmY7gUBHji/YVsr/WkiRnMwRj9Skp2D0fqPFjD85veSV9RS24fCOAcCgbVxYw66TieOfK6FNz55D8Fi5Mex3XRzUfmTxt2jo2MTsdEVRfqUZe5T4aMLBPzSusSE/oj5G4roQdes9MrWmr1jrZ1JgPtHzCSfMd4UKBct7hNIaFNOj2GMnQdd+H0Fg==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQmxhY2slMjBTdW1tb25lciUyMDgubXA0IjtmaWxlbmFtZSo9VVRGLTgnJ0JsYWNrJTIwU3VtbW9uZXIlMjA4Lm1wNDs&ipaddress=1458994159&linkcachekey=0096e1500&linkoid=1746840004&mode=101&sharelink_id=11804569280004&timestamp=1672577375530&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=ead5da3efe96b7d4d8831083786905d9f82be818&cachekey=60:3fd9d9197f396492c7418977238535a6=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "https://cdn.jwplayer.com/strips/iYfADWO1-120.vtt",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
