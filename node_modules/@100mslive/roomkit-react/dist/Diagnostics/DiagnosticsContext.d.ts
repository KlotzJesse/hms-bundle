import React from 'react';
import { HMSDiagnosticsInterface } from '@100mslive/react-sdk';
export declare enum DiagnosticsStep {
    BROWSER = 0,
    VIDEO = 1,
    AUDIO = 2,
    CONNECTIVITY = 3
}
export declare const initialSteps: {
    0: {
        name: string;
    };
    1: {
        name: string;
    };
    2: {
        name: string;
    };
    3: {
        name: string;
    };
};
export interface DiagnosticsStepInfo {
    name: string;
    hasFailed?: boolean;
    isCompleted?: boolean;
}
export declare const DiagnosticsContext: React.Context<{
    hmsDiagnostics?: HMSDiagnosticsInterface | undefined;
    activeStepIndex: DiagnosticsStep;
    setActiveStep: React.Dispatch<React.SetStateAction<DiagnosticsStep>>;
    steps: Record<DiagnosticsStep, DiagnosticsStepInfo>;
    updateStep: (step: DiagnosticsStep, value: Omit<DiagnosticsStepInfo, 'name'>) => void;
}>;
export declare const useDiagnostics: () => {
    activeStep: DiagnosticsStepInfo;
    hmsDiagnostics?: HMSDiagnosticsInterface | undefined;
    activeStepIndex: DiagnosticsStep;
    setActiveStep: React.Dispatch<React.SetStateAction<DiagnosticsStep>>;
    steps: Record<DiagnosticsStep, DiagnosticsStepInfo>;
    updateStep: (step: DiagnosticsStep, value: Omit<DiagnosticsStepInfo, 'name'>) => void;
};
