export interface ProjectionData {
    month?: string;
    monthData?: row[];
    actuals?: actuals[];
}

export interface row {
    deposit?: number;
    description?: string;
    monthYear?: Date;
    payment?: number;
    projected?: number;
}

export interface actuals {
    actualId?: number;
    amount?: number;
    memo?: string;
    dateDeposited?: Date;
    projectionId?: number;
}