import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { RootController } from './root.contorller'

@Module({
  controllers: [RootController, AppController],
})
export class AppModule {}
