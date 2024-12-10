// src/App.js

import React from 'react';
import VoiceToText from './VoiceToText'; // Import your VoiceToText component
import "./App.css"
function App() {
    return (
        <div className="App">
            
            <VoiceToText /> {/* Include your voice-to-text component here */}
        </div>
    );
}

export default App;