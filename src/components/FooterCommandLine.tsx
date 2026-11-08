import React, { useState } from 'react';
import { Terminal, Send } from 'lucide-react';
import { processCLICommand } from '../utils/telemetryUtils';

interface FooterCommandLineProps {
  onNavigate: (sectionId: string) => void;
  onShowTerminalToast: (msg: string, isError?: boolean) => void;
  onDownloadResume: () => void;
}

export const FooterCommandLine: React.FC<FooterCommandLineProps> = ({
  onNavigate,
  onShowTerminalToast,
  onDownloadResume,
}) => {
  const [commandInput, setCommandInput] = useState('');

  const executeCommand = (cmdText?: string) => {
    const textToExecute = cmdText !== undefined ? cmdText : commandInput;
    if (!textToExecute.trim()) return;

    const result = processCLICommand(textToExecute);
    onShowTerminalToast(result.feedback, result.isError);

    if (result.action === 'navigate' && result.targetSection) {
      onNavigate(result.targetSection);
    } else if (result.action === 'download') {
      onDownloadResume();
    }

    setCommandInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand();
    }
  };

  return (
    <footer className="fixed bottom-0 right-0 left-0 sm:left-24 md:left-28 h-14 bg-[#060e1d]/95 border-t border-[#3b494b]/30 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.6)] flex items-center justify-between px-3 sm:px-6 z-30 select-none">
      {/* Command Prompt Block */}
      <div className="flex items-center space-x-2 sm:space-x-3 flex-1 max-w-3xl">
        {/* Reticle Badge */}
        <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#17202f] border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-[10px] font-bold tracking-widest shrink-0">
          <Terminal className="w-3.5 h-3.5" />
          <span>COMMAND CENTER</span>
        </div>

        {/* Live CLI Input Console */}
        <div className="flex items-center flex-1 bg-[#060e1d]/90 border border-[#3b494b]/40 rounded px-2.5 sm:px-3 py-1.5 focus-within:border-[#00f0ff] transition-colors">
          <span className="font-mono text-[12px] text-[#00f0ff] font-bold mr-2">&gt;</span>
          <input
            type="text"
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command... (e.g., help, skills, projects, contact)"
            className="w-full bg-transparent border-none p-0 font-mono text-[11px] sm:text-[12px] text-[#dae2f8] placeholder:text-[#849495]/60 focus:ring-0 outline-none"
            aria-label="CLI Command Input"
          />
          <span className="text-[#00f0ff] animate-pulse font-mono ml-1">_</span>
        </div>
      </div>

      {/* Quick Footer Links & Action CTA */}
      <div className="flex items-center space-x-2 sm:space-x-3 ml-2 sm:ml-4 shrink-0">
        <div className="hidden md:flex items-center space-x-3 sm:space-x-4 font-mono text-[11px]">
          <button
            onClick={() => executeCommand('HELP')}
            className="text-[#849495] hover:text-[#dae2f8] transition-colors cursor-pointer"
          >
            HELP
          </button>
          <button
            onClick={() => executeCommand('STATUS')}
            className="text-[#849495] hover:text-[#dae2f8] transition-colors cursor-pointer"
          >
            STATUS
          </button>
          <button
            onClick={() => executeCommand('RESUME')}
            className="text-[#849495] hover:text-[#dae2f8] transition-colors cursor-pointer"
          >
            DOCS
          </button>
        </div>

        {/* Execute Button */}
        <button
          onClick={() => executeCommand()}
          className="px-3 sm:px-4 py-1.5 rounded border border-[#00f0ff] bg-[#00f0ff]/10 hover:bg-[#00f0ff] hover:text-[#060e1d] text-[#00f0ff] font-mono text-[11px] font-bold tracking-wider shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all active:scale-95 cursor-pointer whitespace-nowrap"
        >
          EXECUTE
        </button>
      </div>
    </footer>
  );
};
