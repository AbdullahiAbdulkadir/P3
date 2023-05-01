function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, ""))
    .join(" ");
}
