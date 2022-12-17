import { useState } from 'react';
import './App.scss';
import AppHeader from './components/appHeader';
import EmojiList from './components/emojiList';
import Emoji from './components/emojiList/emoji';

function App() {
  const [currentSelection, setCurrentSelection] = useState('grinning-face')
  return (
    <div className="App">
      <AppHeader />
      <div className="App-body">
        <div className='current-selection'>
          <Emoji emoji={currentSelection} size={100} />
        </div>
        <h2 className='selection-title'>Flaunt your feeling now....</h2>
        <EmojiList setCurrentSelection={setCurrentSelection} selectedEmoji={currentSelection} />
      </div>
    </div>
  );
}

export default App;
