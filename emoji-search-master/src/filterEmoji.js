import emojiList from "./emojiList.json";

export default function filterEmoji(searchText, maxResults) {
  return emojiList
    .filter(emoji => {
      if (emoji.title.includes(searchText.toLowerCase())) {
        return true;
      }
      if (!emoji.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
