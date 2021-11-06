function copyFunction(x) {
  /* Get the text field */

  if (x === "ethButton") {
    var copyText = "0xB5F99027D52aacAaC62CEEA57fd44DDfefc70674";
  } else if (x === "btcButton") {
    var copyText = "bc1qchy43jrsa4yvv0am8s6hkm6q2sw46gjw5hachy";
  } else if (x === "stackRSS") {
    var copyText =
      "https://feeds.soundcloud.com/users/soundcloud:users:900166441/sounds.rss";
  }

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);

  /* Alert the copied text */
  alert("Copied the text: " + copyText);
}
