import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import base_config from '../config/base_config';
import { PortalDemandController } from './portalDemand/portalDemand.controller';
import { PortalDemandService } from './portalDemand/portalDemand.service';

@Module({
  imports: [ConfigModule.forRoot({ load: [base_config] })],
  controllers: [AppController, PortalDemandController],
  providers: [AppService, PortalDemandService],
})
export class AppModule {}
