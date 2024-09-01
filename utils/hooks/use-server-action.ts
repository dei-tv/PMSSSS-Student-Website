import { Action, type ActionResponse } from '@/utils/types/core';
import { useState } from 'react';

// biome-ignore lint/suspicious/noExplicitAny: only used for type definition
type AsyncFunction = (...args: any[]) => Promise<ActionResponse<any>>;

export const useServerAction = <T extends AsyncFunction>(
    action: T,
    onExecute?: (response: Awaited<ReturnType<T>>['data']) => void
) => {
    const [loading, setLoading] = useState(false);

    const execute = async (...args: Parameters<T>) => {
        setLoading(true);

        try {
            const response = (await action(...args)) as Awaited<ReturnType<T>>;

            if (response.error) {
                return Action.error(response.error);
            }

            onExecute?.(response.data);
            return Action.success(null);
        } catch (error) {
            return Action.error(error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, execute };
};
