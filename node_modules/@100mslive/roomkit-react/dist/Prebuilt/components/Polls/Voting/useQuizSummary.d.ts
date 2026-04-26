import { HMSQuizLeaderboardResponse, HMSQuizLeaderboardSummary } from '@100mslive/react-sdk';
export declare const useQuizSummary: (quizID: string) => {
    quizLeaderboard: HMSQuizLeaderboardResponse | undefined;
    summary: HMSQuizLeaderboardSummary;
    maxPossibleScore: number;
    totalResponses: number;
};
