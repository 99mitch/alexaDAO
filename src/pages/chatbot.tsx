// pages/chatbot.tsx
import React, { useEffect } from 'react';

interface ChatbotPageProps {
  configUrl: string;
}

const ChatbotPage: React.FC<ChatbotPageProps> = ({ configUrl }) => {
  useEffect(() => {
    // Load Landbot script
    const script = document.createElement('script');
    script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";
    script.async = true;
    script.onload = () => {
      // Initialize Landbot with the configUrl from server-side props
      const landbotInstance = new (window as any).Landbot.Container({
        container: '#myLandbot',
        configUrl: configUrl,
      });
    };
    document.body.appendChild(script);
  }, [configUrl]);

  return (
    <div style={terminalStyles.container}>
      <div style={terminalStyles.header}>
        <span style={terminalStyles.circle}></span>
        <span style={{ ...terminalStyles.circle, backgroundColor: '#ffbd2e' }}></span>
        <span style={{ ...terminalStyles.circle, backgroundColor: '#27c93f' }}></span>
        <span style={terminalStyles.title}>bash - Chatbot</span>
      </div>
      <div id="myLandbot" style={terminalStyles.chatbot}></div>
    </div>
  );
};

// Fetch the config URL on the server side to avoid exposing it in the client code
export async function getServerSideProps() {
  return {
    props: {
      configUrl: process.env.NEXT_PUBLIC_LANDBOT_CONFIG_URL || '',
    },
  };
}

const terminalStyles = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    fontFamily: '"Courier New", Courier, monospace',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#333',
  },
  circle: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#ff5f56',
    marginRight: '5px',
  },
  title: {
    marginLeft: '10px',
    fontSize: '14px',
    color: '#fff',
  },
  chatbot: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
  },
};

export default ChatbotPage;
