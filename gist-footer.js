footer = document.querySelector(".gist-meta");
tags = [...footer.querySelectorAll("a")];

arr = tags[0].href.split("gist.github.com/");
arr2 = arr[1].split("/");

myAccount = arr2[0];
myAccountHref = `https://github.com/${myAccount}`;
myGist = tags[1].innerText;
myGistHref = tags[1].href;

// Update footer
footer.innerHTML = `<a href="${myGistHref}">${myGist}</a> made with ❤ by <a href="${myAccountHref}">${myAccount}</a>`;
