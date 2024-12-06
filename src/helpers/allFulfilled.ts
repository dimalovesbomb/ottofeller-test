export async function allFulfilled<T>(promises: Promise<T>[]): Promise<T[]> {
    const results: PromiseSettledResult<T>[] = await Promise.allSettled(promises);
    return results
        .filter((result): result is PromiseFulfilledResult<T> => result.status === 'fulfilled')
        .map((result) => result.value);
}
