export interface HttpProtocol {
  request(
    url: string,
    method: string,
    cb: () => void,
    body?: unknown,
  ): Promise<void>;
}
