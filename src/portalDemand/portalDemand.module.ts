import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import base_config from 'config/base_config';
import { PortalDemandResolver } from './portalDemand.resolver';

@Module({
  imports: [ConfigModule.forRoot({ load: [base_config] })],
  controllers: [],
  providers: [PortalDemandResolver, Logger],
})
export class PortalDemandModule {}
