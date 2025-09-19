'use client';

import { useState } from 'react';
import { Brain, Send, Loader2, MessageSquare } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import type { AIScenario, ConversationTurn } from '../lib/types';

interface AIResponsePreviewProps {
  onScenarioGenerated?: (scenario: AIScenario) => void;
}

export function AIResponsePreview({ onScenarioGenerated }: AIResponsePreviewProps) {
  const [userInput, setUserInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [scenario, setScenario] = useState<AIScenario | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateScenario = async () => {
    if (!userInput.trim()) return;

    setIsGenerating(true);
    setError(null);

    try {
      // In a real implementation, this would call the OpenAI API
      // For now, we'll simulate the response
      await new Promise(resolve => setTimeout(resolve, 2000));

      const mockScenario: AIScenario = {
        scenarioId: `scenario-${Date.now()}`,
        userInput: userInput.trim(),
        simulatedConversation: [
          {
            speaker: 'officer',
            message: 'Do you know why I pulled you over today?',
            timestamp: new Date(),
          },
          {
            speaker: 'user',
            message: 'I\'m not sure, officer. Could you please tell me?',
            timestamp: new Date(),
          },
          {
            speaker: 'officer',
            message: 'You were going 45 in a 35 mph zone. Can I see your license and registration?',
            timestamp: new Date(),
          },
          {
            speaker: 'user',
            message: 'Yes, officer. Here are my documents.',
            timestamp: new Date(),
          },
        ],
        suggestedResponses: [
          'Remain calm and polite throughout the interaction',
          'Keep your hands visible at all times',
          'Only provide required documents when asked',
          'Do not admit guilt or make excuses',
          'You have the right to remain silent beyond basic identification',
        ],
        relatedRights: ['1', '2'],
        createdAt: new Date(),
      };

      setScenario(mockScenario);
      onScenarioGenerated?.(mockScenario);
    } catch (err) {
      console.error('Error generating scenario:', err);
      setError('Failed to generate scenario. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const resetScenario = () => {
    setScenario(null);
    setUserInput('');
    setError(null);
  };

  return (
    <Card className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
          <Brain className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h3 className="font-semibold text-textPrimary">AI Scenario Preview</h3>
          <p className="text-sm text-textSecondary">
            Practice with realistic interactions
          </p>
        </div>
      </div>

      {!scenario ? (
        <div className="space-y-4">
          <div>
            <label htmlFor="scenario-input" className="block text-sm font-medium text-textPrimary mb-2">
              Describe your situation
            </label>
            <textarea
              id="scenario-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="e.g., I was pulled over for speeding on the highway..."
              className="w-full h-24 p-3 bg-bg border border-surface rounded-lg text-textPrimary placeholder-textSecondary resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
              disabled={isGenerating}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <Button
            variant="primary"
            onClick={generateScenario}
            disabled={!userInput.trim() || isGenerating}
            loading={isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              'Generating Scenario...'
            ) : (
              <>
                <Send className="h-4 w-4" />
                Generate AI Preview
              </>
            )}
          </Button>

          <div className="text-xs text-textSecondary text-center">
            <span className="inline-flex items-center gap-1">
              <Brain className="h-3 w-3" />
              Premium Feature - AI-powered scenario simulation
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-medium text-textPrimary flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Simulated Conversation
            </h4>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {scenario.simulatedConversation.map((turn, index) => (
                <div
                  key={index}
                  className={`flex ${turn.speaker === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      turn.speaker === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-surface border border-surface/50 text-textPrimary'
                    }`}
                  >
                    <div className="text-xs opacity-70 mb-1">
                      {turn.speaker === 'user' ? 'You' : 'Officer'}
                    </div>
                    <p className="text-sm">{turn.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-textPrimary">Suggested Guidelines</h4>
            <ul className="space-y-2">
              {scenario.suggestedResponses.map((response, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-textSecondary">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  {response}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2">
            <Button variant="secondary" onClick={resetScenario} className="flex-1">
              Try Another Scenario
            </Button>
            <Button variant="primary" className="flex-1">
              Save Scenario
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
