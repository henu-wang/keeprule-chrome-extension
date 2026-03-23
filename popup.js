const PRINCIPLES = [
  { quote: "Rule No. 1: Never lose money. Rule No. 2: Never forget Rule No. 1.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "Price is what you pay. Value is what you get.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "Be fearful when others are greedy, and greedy when others are fearful.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "Our favorite holding period is forever.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "The stock market is designed to transfer money from the active to the patient.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "Risk comes from not knowing what you're doing.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "Only buy something that you'd be perfectly happy to hold if the market shut down for 10 years.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "The most important quality for an investor is temperament, not intellect.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "Never invest in a business you cannot understand.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "Time is the friend of the wonderful company, the enemy of the mediocre.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "Wide diversification is only required when investors do not understand what they are doing.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "The best thing that happens to us is when a great company gets into temporary trouble.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "Invert, always invert. Turn a situation or problem upside down. Look at it backward.", author: "Charlie Munger", title: "Vice Chairman, Berkshire Hathaway" },
  { quote: "Knowing what you don't know is more useful than being brilliant.", author: "Charlie Munger", title: "Vice Chairman, Berkshire Hathaway" },
  { quote: "The big money is not in the buying and selling, but in the waiting.", author: "Charlie Munger", title: "Vice Chairman, Berkshire Hathaway" },
  { quote: "Spend each day trying to be a little wiser than you were when you woke up.", author: "Charlie Munger", title: "Vice Chairman, Berkshire Hathaway" },
  { quote: "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.", author: "Charlie Munger", title: "Vice Chairman, Berkshire Hathaway" },
  { quote: "The desire to get rich fast is pretty dangerous.", author: "Charlie Munger", title: "Vice Chairman, Berkshire Hathaway" },
  { quote: "You don't have to be brilliant, only a little bit wiser than the other guys, on average, for a long, long time.", author: "Charlie Munger", title: "Vice Chairman, Berkshire Hathaway" },
  { quote: "Take a simple idea and take it seriously.", author: "Charlie Munger", title: "Vice Chairman, Berkshire Hathaway" },
  { quote: "In the short run, the market is a voting machine but in the long run, it is a weighing machine.", author: "Benjamin Graham", title: "Father of Value Investing" },
  { quote: "The intelligent investor is a realist who sells to optimists and buys from pessimists.", author: "Benjamin Graham", title: "Father of Value Investing" },
  { quote: "The investor's chief problem — and even his worst enemy — is likely to be himself.", author: "Benjamin Graham", title: "Father of Value Investing" },
  { quote: "Have the courage of your knowledge and experience. If you have formed a conclusion from the facts and if you know your judgment is sound, act on it.", author: "Benjamin Graham", title: "Father of Value Investing" },
  { quote: "The margin of safety is always dependent on the price paid.", author: "Benjamin Graham", title: "Father of Value Investing" },
  { quote: "An investment operation is one which, upon thorough analysis, promises safety of principal and an adequate return.", author: "Benjamin Graham", title: "Father of Value Investing" },
  { quote: "The four most dangerous words in investing are: 'This time it's different.'", author: "Sir John Templeton", title: "Pioneer of Global Investing" },
  { quote: "The time of maximum pessimism is the best time to buy, and the time of maximum optimism is the best time to sell.", author: "Sir John Templeton", title: "Pioneer of Global Investing" },
  { quote: "If you want to have a better performance than the crowd, you must do things differently from the crowd.", author: "Sir John Templeton", title: "Pioneer of Global Investing" },
  { quote: "Know what you own, and know why you own it.", author: "Peter Lynch", title: "Former Manager, Fidelity Magellan Fund" },
  { quote: "The key to making money in stocks is not to get scared out of them.", author: "Peter Lynch", title: "Former Manager, Fidelity Magellan Fund" },
  { quote: "Go for a business that any idiot can run — because sooner or later, any idiot probably is going to run it.", author: "Peter Lynch", title: "Former Manager, Fidelity Magellan Fund" },
  { quote: "Far more money has been lost by investors preparing for corrections, or trying to anticipate corrections, than has been lost in corrections themselves.", author: "Peter Lynch", title: "Former Manager, Fidelity Magellan Fund" },
  { quote: "The individual investor should act consistently as an investor and not as a speculator.", author: "Benjamin Graham", title: "Father of Value Investing" },
  { quote: "Returns matter a lot. It's our money.", author: "John Bogle", title: "Founder, Vanguard Group" },
  { quote: "Don't look for the needle in the haystack. Just buy the haystack!", author: "John Bogle", title: "Founder, Vanguard Group" },
  { quote: "Time is your friend; impulse is your enemy.", author: "John Bogle", title: "Founder, Vanguard Group" },
  { quote: "If you have trouble imagining a 20% loss in the stock market, you shouldn't be in stocks.", author: "John Bogle", title: "Founder, Vanguard Group" },
  { quote: "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it.", author: "Albert Einstein", title: "Theoretical Physicist" },
  { quote: "The stock market is filled with individuals who know the price of everything, but the value of nothing.", author: "Philip Fisher", title: "Pioneer of Growth Investing" },
  { quote: "I'd rather own a few outstanding companies than a large number of average ones.", author: "Philip Fisher", title: "Pioneer of Growth Investing" },
  { quote: "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.", author: "Paul Samuelson", title: "Nobel Laureate in Economics" },
  { quote: "The essence of investment management is the management of risks, not the management of returns.", author: "Benjamin Graham", title: "Father of Value Investing" },
  { quote: "All intelligent investing is value investing — acquiring more than you are paying for.", author: "Charlie Munger", title: "Vice Chairman, Berkshire Hathaway" },
  { quote: "It's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong.", author: "George Soros", title: "Founder, Soros Fund Management" },
  { quote: "The market can stay irrational longer than you can stay solvent.", author: "John Maynard Keynes", title: "Economist" },
  { quote: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin", title: "Founding Father" },
  { quote: "Do not save what is left after spending, but spend what is left after saving.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" },
  { quote: "The best investment you can make is in yourself.", author: "Warren Buffett", title: "Chairman, Berkshire Hathaway" }
];

function getDailyPrinciple() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  return PRINCIPLES[dayOfYear % PRINCIPLES.length];
}

function getRandomPrinciple() {
  return PRINCIPLES[Math.floor(Math.random() * PRINCIPLES.length)];
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2);
}

function displayPrinciple(principle) {
  document.getElementById('quoteText').textContent = principle.quote;
  document.getElementById('authorName').textContent = principle.author;
  document.getElementById('authorTitle').textContent = principle.title;
  document.getElementById('authorAvatar').textContent = getInitials(principle.author);
}

document.addEventListener('DOMContentLoaded', () => {
  displayPrinciple(getDailyPrinciple());

  document.getElementById('refreshBtn').addEventListener('click', () => {
    displayPrinciple(getRandomPrinciple());
  });
});
