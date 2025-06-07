import { NLPResponse } from './types';
import { trainingData } from './training-data';

export class NLPService {
  private confidenceThreshold = 0.6;

  public async processMessage(message: string): Promise<NLPResponse> {
    try {
      const intent = this.detectIntent(message);
      const entities = this.extractEntities(message);
      const sentiment = this.analyzeSentiment(message);

      return {
        intent: intent.name,
        confidence: intent.confidence,
        entities,
        sentiment,
      };
    } catch (error) {
      console.error('NLP processing error:', error);
      throw new Error('Failed to process message');
    }
  }

  private detectIntent(message: string): { name: string; confidence: number } {
    const messageLower = message.toLowerCase();
    let bestMatch = { name: 'unknown', confidence: 0 };

    for (const [intentName, intentData] of Object.entries(trainingData.intents)) {
      let maxConfidence = 0;
      
      for (const pattern of intentData.patterns) {
        const confidence = this.calculatePatternSimilarity(messageLower, pattern.toLowerCase());
        if (confidence > maxConfidence) {
          maxConfidence = confidence;
        }
      }

      if (maxConfidence > this.confidenceThreshold && maxConfidence > bestMatch.confidence) {
        bestMatch = { name: intentName, confidence: maxConfidence };
      }
    }

    return bestMatch;
  }

  private extractEntities(message: string): Array<{ type: string; value: string; confidence: number }> {
    const entities: Array<{ type: string; value: string; confidence: number }> = [];
    const messageLower = message.toLowerCase();

    for (const [entityType, entityList] of Object.entries(trainingData.entities)) {
      for (const entity of entityList) {
        const matchedAlias = entity.aliases.find(alias => 
          messageLower.includes(alias.toLowerCase())
        );

        if (matchedAlias) {
          entities.push({
            type: entityType,
            value: entity.name,
            confidence: 0.9 // High confidence for exact matches
          });
        }
      }
    }

    return entities;
  }

  private analyzeSentiment(message: string): 'positive' | 'negative' | 'neutral' {
    const messageLower = message.toLowerCase();
    const words = messageLower.split(/\s+/);

    let positiveCount = 0;
    let negativeCount = 0;

    for (const word of words) {
      if (trainingData.sentiments.positive.includes(word)) positiveCount++;
      if (trainingData.sentiments.negative.includes(word)) negativeCount++;
    }

    if (positiveCount > negativeCount) return 'positive';
    if (negativeCount > positiveCount) return 'negative';
    return 'neutral';
  }

  private calculatePatternSimilarity(message: string, pattern: string): number {
    // Simple word overlap similarity
    const messageWords = new Set(message.split(/\s+/));
    const patternWords = new Set(pattern.split(/\s+/));
    
    const intersection = new Set([...messageWords].filter(x => patternWords.has(x)));
    const union = new Set([...messageWords, ...patternWords]);
    
    return intersection.size / union.size;
  }
}
