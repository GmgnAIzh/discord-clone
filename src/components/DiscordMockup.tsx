'use client';

import React, { useState, useEffect } from 'react';

interface Message {
  id: number;
  username: string;
  avatar: string;
  content: string;
  timestamp: string;
  typing?: boolean;
}

interface DiscordMockupProps {
  variant?: 'chat' | 'voice' | 'game' | 'servers';
}

const DiscordMockup: React.FC<DiscordMockupProps> = ({ variant = 'chat' }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      username: 'Alex',
      avatar: 'https://ui-avatars.com/api/?name=Alex&background=5865f2&color=fff&size=32',
      content: 'anyone want to play some games?',
      timestamp: 'Today at 2:30 PM'
    },
    {
      id: 2,
      username: 'Sarah',
      avatar: 'https://ui-avatars.com/api/?name=Sarah&background=57f287&color=fff&size=32',
      content: 'sure! what are we thinking?',
      timestamp: 'Today at 2:31 PM'
    },
    {
      id: 3,
      username: 'Mike',
      avatar: 'https://ui-avatars.com/api/?name=Mike&background=ffa500&color=fff&size=32',
      content: 'valorant? 🎮',
      timestamp: 'Today at 2:31 PM'
    }
  ]);

  const [typingUsers, setTypingUsers] = useState<string[]>([]);

  useEffect(() => {
    // Simulate live typing
    const interval = setInterval(() => {
      const randomUser = ['Emma', 'Jake', 'Luna'][Math.floor(Math.random() * 3)];
      setTypingUsers([randomUser]);

      setTimeout(() => {
        setTypingUsers([]);
        // Add a new message
        setMessages(prev => [...prev, {
          id: Date.now(),
          username: randomUser,
          avatar: `https://ui-avatars.com/api/?name=${randomUser}&background=${['5865f2', '57f287', 'ffa500', 'ed4245', 'eb459e'][Math.floor(Math.random() * 5)]}&color=fff&size=32`,
          content: ['hey everyone!', 'what\'s up?', 'anyone online?', 'let\'s play something!', '😄'][Math.floor(Math.random() * 5)],
          timestamp: 'Just now'
        }]);
      }, 2000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  if (variant === 'voice') {
    return (
      <div className="discord-mockup max-w-sm mx-auto">
        {/* Voice Channel Header */}
        <div className="bg-[#2f3136] p-4 border-b border-[#202225]">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-[#57f287] rounded mr-3 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white font-medium">General Voice</span>
          </div>
        </div>

        {/* Voice Users */}
        <div className="p-4 space-y-3">
          {[
            { name: 'Alex', status: 'speaking', avatar: 'https://ui-avatars.com/api/?name=Alex&background=5865f2&color=fff&size=32' },
            { name: 'Sarah', status: 'muted', avatar: 'https://ui-avatars.com/api/?name=Sarah&background=57f287&color=fff&size=32' },
            { name: 'Mike', status: 'idle', avatar: 'https://ui-avatars.com/api/?name=Mike&background=ffa500&color=fff&size=32' }
          ].map((user, index) => (
            <div key={user.name} className="flex items-center">
              <div className={`relative mr-3 ${user.status === 'speaking' ? 'pulse-glow' : ''}`}>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                {user.status === 'speaking' && (
                  <div className="absolute -inset-1 border-2 border-[#57f287] rounded-full animate-pulse"></div>
                )}
                {user.status === 'muted' && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#ed4245] rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              <span className="text-[#dcddde] text-sm">{user.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'game') {
    return (
      <div className="discord-mockup max-w-md mx-auto">
        {/* Game Activity Header */}
        <div className="bg-[#2f3136] p-4 border-b border-[#202225]">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded mr-3 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 000 1.788l4 2.016V15l-4-2v3a1 1 0 00-.553.106L7.764 18H11v-1z"/>
                <path d="M5 10a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1v-6z"/>
              </svg>
            </div>
            <div>
              <div className="text-white font-medium">Game Night</div>
              <div className="text-[#8e9297] text-xs">3 members playing</div>
            </div>
          </div>
        </div>

        {/* Game Status */}
        <div className="p-4 space-y-4">
          {[
            { name: 'Alex', game: 'Valorant', status: 'In Competitive Match' },
            { name: 'Sarah', game: 'Minecraft', status: 'Building' },
            { name: 'Mike', game: 'Among Us', status: 'Lobby' }
          ].map((user, index) => (
            <div key={user.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#5865f2] rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{user.name[0]}</span>
                </div>
                <div>
                  <div className="text-[#dcddde] text-sm font-medium">{user.name}</div>
                  <div className="text-[#8e9297] text-xs">Playing {user.game}</div>
                </div>
              </div>
              <div className="text-[#57f287] text-xs">{user.status}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'servers') {
    return (
      <div className="discord-mockup max-w-xs mx-auto">
        {/* Server List Header */}
        <div className="bg-[#2f3136] p-3 border-b border-[#202225] flex items-center justify-between">
          <span className="text-white font-medium text-sm">我的服务器</span>
          <button className="text-[#b9bbbe] hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Server List */}
        <div className="p-3 space-y-2 max-h-64 overflow-y-auto">
          {[
            { name: '游戏讨论', icon: '🎮', members: 1234, online: 567, color: 'bg-blue-500' },
            { name: '编程学习', icon: '💻', members: 891, online: 123, color: 'bg-green-500' },
            { name: '音乐分享', icon: '🎵', members: 456, online: 89, color: 'bg-purple-500' },
            { name: '电影评论', icon: '🎬', members: 234, online: 45, color: 'bg-red-500' }
          ].map((server, index) => (
            <div key={server.name} className="flex items-center p-2 rounded hover:bg-[#36393f] transition-colors cursor-pointer">
              <div className={`w-10 h-10 ${server.color} rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0`}>
                {server.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[#dcddde] font-medium text-sm truncate">{server.name}</div>
                <div className="text-[#8e9297] text-xs">
                  <span className="text-[#43b581]">{server.online}</span> 在线 · {server.members} 成员
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discover Servers Button */}
        <div className="p-3 border-t border-[#36393f]">
          <button className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white py-2 px-4 rounded text-sm font-medium transition-colors">
            发现服务器
          </button>
        </div>
      </div>
    );
  }

  // Default chat variant
  return (
    <div className="discord-mockup max-w-lg mx-auto">
      {/* Channel Header */}
      <div className="discord-channel flex items-center">
        <span className="mr-2">#</span>
        <span>general</span>
        <div className="ml-auto text-xs">Online: 1,234</div>
      </div>

      {/* Messages */}
      <div className="max-h-80 overflow-y-auto">
        {messages.slice(-6).map((message, index) => (
          <div key={message.id} className={`discord-message fade-in-up stagger-${(index % 5) + 1}`}>
            <img
              src={message.avatar}
              alt={message.username}
              className="discord-user-avatar"
            />
            <div className="flex-1">
              <div className="flex items-baseline">
                <span className="discord-username">{message.username}</span>
                <span className="discord-timestamp">{message.timestamp}</span>
              </div>
              <div className="text-[#dcddde] mt-1">{message.content}</div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {typingUsers.length > 0 && (
          <div className="discord-message">
            <div className="discord-user-avatar bg-gray-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            </div>
            <div className="flex-1">
              <div className="text-[#8e9297] text-sm">
                <span className="typing-animation">{typingUsers[0]} is typing...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-[#36393f]">
        <div className="bg-[#484c52] rounded-lg px-4 py-2 flex items-center">
          <span className="text-[#8e9297] text-sm flex-1">Message #general</span>
          <div className="flex space-x-2">
            <button className="text-[#8e9297] hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="text-[#8e9297] hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 00-4 4v4a4 4 0 008 0V8a4 4 0 00-4-4zM6 8a2 2 0 114 0v4a2 2 0 11-4 0V8zM4.5 17h11a.5.5 0 000-1h-11a.5.5 0 000 1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordMockup;
