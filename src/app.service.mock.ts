/**
 * mock util for AppService
 */

// 1. import class to mock (for typeing)
import { AppService } from './app.service';

// 2. auto mock class using jest
/**
 * Note: the following methods didn't work when using Typescript
 * const AppServiceMock = jest.mocked(AppService, true);
 * or
 * const AppServiceMock = jest.createMockFromModule('./app.service');
 */
jest.mock('./app.service');

// 3. force type for mock constructor
export type AppServiceMock = jest.Mocked<AppService>;
const AppServiceMock = AppService as {
  new (): AppServiceMock;
};

// 4. export mock factorys and additinal utiles (helper methods, consts, etc.)
export const AppServiceMockHelper = {
  createMock() {
    return new AppServiceMock();
  },
  createDefaultMock() {
    const mock = new AppServiceMock();
    mock.getHello.mockReturnValue('Hello World!');

    return mock;
  },
};
