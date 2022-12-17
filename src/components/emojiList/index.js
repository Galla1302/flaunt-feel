import React from 'react'

import Emoji from './emoji';
import emojiData from '../../static/EmojiData'

const ButtonItem = ({ emojiObj, selected, setCurrentSelection, size }) => {
    const { id = '', nameUrl = '' } = emojiObj
    return (
        <button
            key={`react-emojis-docs-${id}`}
            onClick = {() => {
                setCurrentSelection(nameUrl)
            }}
            disabled={selected}
        >
            {selected &&
            <span className="copied-max">Selected!</span>
            }
            <div className="react-emojis-docs__item__emoji">
            <Emoji emoji={nameUrl} size={size}/>
            </div>
        </button>
    )
}

export default function EmojiList({ selectedEmoji, setCurrentSelection }) {
    const theEmojis = [];
    for (let e in emojiData) {
    const {
        id = '',
        nameUrl
    } = emojiData[e];
        theEmojis.push(
        <ButtonItem
            key={`btn-${id}`}
            emojiObj={emojiData[e]}
            size={50}
            selected={nameUrl === selectedEmoji}
            setCurrentSelection={setCurrentSelection}
        />
        )
    }
    return theEmojis
}
