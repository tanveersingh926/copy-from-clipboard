const token = document.querySelector("code");

document.querySelector("button").addEventListener("click", async event => {
  if (!navigator.clipboard) {
    return;
  }

  try {
    const text = token.innerText;
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error("Copy failed", error);
  }
});
