import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppServiceMockHelper, AppServiceMock } from './app.service.mock';

describe('AppController', () => {
  let appController: AppController;
  let appServiceMock: AppServiceMock;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: AppServiceMockHelper.createDefaultMock(), // use custom mock creator with default mocked responses
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appServiceMock = app.get(AppService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('should not return "Hello World!"', () => {
      appServiceMock.getHello.mockReturnValue('NOT Hello World!');

      expect(appController.getHello()).not.toBe('Hello World!');
    });
  });
});
