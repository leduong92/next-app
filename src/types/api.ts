export interface ApiResponse<T> {
    data: T;
    isSuccess: boolean;
    message: string;
    statusCode: number
}

export function paginate<T>(items: T[], page: number, pageSize: number): T[] {
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
}