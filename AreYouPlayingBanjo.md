# [Are You Play Banjo](https://www.codewars.com/kata/are-you-playing-banjo/train/javascript)

## 8kyu

```function areYouPlayingBanjo(name) {
  const firstInitialCheck = /[Rr]/.test(name.slice(0,1)) ? `${name} plays banjo` : `${name} does not play banjo`;
  return firstInitialCheck;
}```